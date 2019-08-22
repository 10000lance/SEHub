<template>
<div>
	<div>
		<div class="apy-header">{{formTitle}}</div>
		<div class="apy-container">
			<div class="apy-form-container">
				<!-- 基本信息表单 -->
				<transition name="slide-fade-right">
					<keep-alive>
						<baseForm
							ref="baseForm"
							:baseForm="base"
						></baseForm>
					</keep-alive>
				</transition>

				<!-- el-form -->
				<!-- transition必须放在keep-alive外面才能使keep-alive生效 -->
				<transition name="slide-fade-right">
					<keep-alive>
						<component
							ref="apyForm"
							:is="formID"
							:base="base"
							v-show="current === origin"
						></component>
					</keep-alive>
				</transition>

				<transition name="slide-fade-right">
					<keep-alive>
						<component
							ref="etiquetteForm" 
							:is="otherTables.etiquette.table"
							:base="base"
							v-show="current === 'etiquette'"
						></component>
					</keep-alive>
				</transition>

				<transition name="slide-fade-right">
					<keep-alive>
						<component
							ref="lectureTicketForm"
							:is="otherTables.lectureTicket.table"
							:base="base"
							v-show="current === 'lectureTicket'"
						></component>
					</keep-alive>
				</transition>

				<transition name="slide-fade-right">
					<keep-alive>
						<component
							ref="hostForm"
							:is="otherTables.host.table"
							:base="base"
							v-show="current === 'host'"
						></component>
					</keep-alive>
				</transition>

				<transition name="slide-fade-right">
					<keep-alive>
						<component
							ref="posterForm"
							:is="otherTables.poster.table"
							:base="base"
							v-show="current === 'poster'"
						></component>
					</keep-alive>
				</transition>

				<el-button 
					class="apy-btn-submit"
					@click="applySubmit"
					v-if="current === origin"
				>提交</el-button>
			</div>

			<div class="apy-matter-container">
				<el-button type="info" class="add-btn" @click="toggleTable('origin')">
					{{originTitle}}
				</el-button>
				<transition name="slide-fade-left">
					<component :is="matterID" v-if="current === origin"></component>
				</transition>

				<div class="add-btn-group" v-if="isActivity">
					<el-button :type="etiquette_add_btn"  class="add-btn" @click="toggleTable('etiquette')">
						<i class="el-icon-circle-plus-outline" v-if="!otherTables.etiquette.has"></i>
						{{etiquetteText}}
					</el-button>
					<transition name="slide-fade-left">
						<div class="new-matter" v-if="current === 'etiquette'">
							<component :is="otherTables.etiquette.matter"></component>
							<el-button
								type="danger"
								class="delete-btn"
								@click="deleteTable('etiquette')"
								v-if="otherTables.etiquette.has"
							>删除礼仪申请表</el-button>
						</div>
					</transition>
			
					<el-button :type="lectureTicket_add_btn"  class="add-btn" @click="toggleTable('lectureTicket')">
						<i class="el-icon-circle-plus-outline" v-if="!otherTables.lectureTicket.has"></i>
						{{lectureTicketText}}
					</el-button>
					<transition name="slide-fade-left">
						<div class="new-matter" v-if="current === 'lectureTicket'">
							<component :is="otherTables.lectureTicket.matter"></component>
							<el-button
								type="danger"
								class="delete-btn"
								@click="deleteTable('lectureTicket')"
								v-if="otherTables.lectureTicket.has"
							>删除讲座票申请表</el-button>
						</div>
					</transition>
			
					<el-button :type="host_add_btn"  class="add-btn" @click="toggleTable('host')">
						<i class="el-icon-circle-plus-outline" v-if="!otherTables.host.has"></i>
						{{hostText}}
					</el-button>
					<transition name="slide-fade-left">
						<div class="new-matter" v-if="current === 'host'">
							<component :is="otherTables.host.matter"></component>
							<el-button
								type="danger"
								class="delete-btn"
								@click="deleteTable('host')"
								v-if="otherTables.host.has"
							>删除主持人申请表</el-button>
						</div>
					</transition>					
			
					<el-button :type="poster_add_btn" class="add-btn" @click="toggleTable('poster')">
						<i class="el-icon-circle-plus-outline" v-if="!otherTables.poster.has"></i>
						{{posterText}}
					</el-button>
					<transition name="slide-fade-left">
						<div class="new-matter" v-if="current === 'poster'">
							<component :is="otherTables.poster.matter"></component>
							<el-button
								type="danger"
								class="delete-btn"
								@click="deleteTable('poster')"
								v-if="otherTables.poster.has"
							>删除宣传物资申请表</el-button>
						</div>
					</transition>
				</div>
			</div>
		</div>

	</div>
	<!-- <preview :previewObj="previewObj"></preview> -->
	<el-dialog
		title="请确认表单"
		:visible="isPreview"
		center
		:appendToBody="true"
		:closeOnClickModal="false"
		:showClose="false"
		width="75%"
	>
		<preview :previewData="previewData"></preview>

		<span slot="footer" class="dialog-footer">
		    <el-button @click="isPreview = false">取 消</el-button>
		    <el-button ref="applyBtn" type="primary" @click="apply">确 定 提 交</el-button>
		</span>
	</el-dialog>
</div>
</template>

<script>
import { apiApplyForm } from '../../api/apply.js';
import { ToFormName } from '../../assets/js/seconfig.js';
import EtiquetteTable from '../../components/apply/form/EtiquetteForm.vue';
import EtiquetteMatter from '../../components/apply/matters/EtiquetteMatter.vue';

import LectureTicketTable from '../../components/apply/form/LectureTicketForm.vue';
import LectureTicketMatter from '../../components/apply/matters/LectureTicketMatter.vue';

import HostTable from '../../components/apply/form/HostForm.vue';
import HostMatter from '../../components/apply/matters/HostMatter.vue';

import PosterTable from '../../components/apply/form/PosterForm.vue';
import PosterMatter from '../../components/apply/matters/PosterMatter.vue';

import BaseForm from '../../components/apply/form/BaseForm.vue';

import Preview from '../../components/Preview.vue';

export default {
	name: 'applyform',
	components: {
		'preview': Preview,
		'baseForm': BaseForm,
	},
	data () {
		return {
			//申请表基本信息
			base: {
				name: '软件学院活动', //活动名称
				address: 'C10',	//活动地址
				startTime: '2019-01-01',	//活动开始时间
				endTime: '2019-02-02',	//活动结束时间
				description: '软件学院软件学院',	//活动简介
			},

			origin: this.$route.params.id,
			current: this.$route.params.id,

			otherTables: {
				etiquette: {
					type: 'etiquette',
					has: false,
					matter: null,
					table: null,
					Table: EtiquetteTable,
					Matter: EtiquetteMatter,
				},
				lectureTicket: {
					type: 'lectureTicket',
					has: false,
					matter: null,
					table: null,
					Table: LectureTicketTable,
					Matter: LectureTicketMatter,
				},
				host: {
					type: 'host',
					has: false,
					matter: null,
					table: null,
					Table: HostTable,
					Matter: HostMatter,
				},
				poster: {
					type: 'poster',
					has: false,
					matter: null,
					table: null,
					Table: PosterTable,
					Matter: PosterMatter,
				},
			},
			isPreview: false,
			previewData: null,
		};
	},

	computed: {
		//添加表的button的文字
		etiquetteText: function(){
			return !this.otherTables.etiquette.has ? '增添礼仪申请表' : '礼仪申请表';
		},
		lectureTicketText: function(){
			return !this.otherTables.lectureTicket.has ? '增添讲座票申请表' : '讲座票申请表';
		},
		hostText: function(){
			return !this.otherTables.host.has ? '增添主持人申请表' : '主持人申请表';
		},
		posterText: function(){
			return !this.otherTables.poster.has ? '增添宣传物资申请表' : '宣传物资申请表';
		},

		//添加表的button的type
		etiquette_add_btn: function(){
			return this.otherTables.etiquette.has ? 'info' : 'primary';
		},
		lectureTicket_add_btn: function(){
			return this.otherTables.lectureTicket.has ? 'info' : 'primary';
		},
		host_add_btn: function(){
			return this.otherTables.host.has ? 'info' : 'primary';
		},
		poster_add_btn: function(){
			return this.otherTables.poster.has ? 'info' : 'primary';
		},

		originTitle: function() {
			return ToFormName[this.origin];
		},
		formTitle: function () {
			return ToFormName[this.current];
		},
		formID: function () {
			let pathid = this.$route.params.id;
			if (pathid && this.formTitle) {
				let name = pathid.charAt(0).toUpperCase() + pathid.substring(1);
				return () => import('../../components/apply/form/' + name + 'Form.vue'); // 动态获取相应的表单组件
			}
			else{
				return '';
			}
		},
		matterID: function () {
			let pathid = this.$route.params.id;
			if (pathid && this.formTitle) {
				let name = pathid.charAt(0).toUpperCase() + pathid.substring(1);
				return () => import('../../components/apply/matters/' + name + 'Matter.vue');
			} else { return '';}
		},
		//判断是否为活动申请表
		isActivity: function(){
			return this.$route.params.id === 'activity';
		}
	},

	updated (){
		this.setData();
	},
	methods: {
		//测试数据
		setData (){
			const data = {
				ACTIVITYDATA: {
					background: '活动背景',
					objective: '面向对象',
					organizer: '承办单位',
					hostUnit: '主办单位',
					// aim: '活动目的',
					expectedNumOfParticipants: '预计参与人数',
					note: '备注',
				},
				ETIQUETTEDATA: {
					etiquetteJobs: ['颁奖', '引导',], //[string, string]
					numOfEtiquette: 3,
					rehearsalTime: '2019-01-01',
					rehearsalSite: '排练地点',
					// note: '备注',
					descOfJob: '工作描述',
				},
				HOSTDATA: {
					numOfHost: 4,
					rehearsalTime: '2019-02-02',
					rehearsalSite: '排练地点',
					// note: '备注',
					descOfJob: '工作描述',
				},
				POSTERDATA: {
					deadline: '2019-03-03',
					propagandaTextRequirement: '宣传文字要求',
					posterSize: '海报大小',
					note: '备注',
				},
				LECTURETICKETDATA: {
					numOfTicket: 50,
					ticketType: '分数类型',
					ticketScore: 3,
					note: '备注',
				},
			};
			this.$refs.apyForm.setData(data[this.origin.toUpperCase() + 'DATA']);

			for (let name of ['etiquette', 'lectureTicket', 'host', 'poster']){
				let formName = name + 'Form';

				if (!this.otherTables[name].has){
					continue;
				}
				// console.log(formName);
				this.$refs[formName].setData(data[name.toUpperCase() + 'DATA']);
			}
		},

		//最终提交表单函数，在applySubmit函数中动态生成
		apply (){
			this.isPreview = false;
		},
		applySubmit (){
			let form = this.getFormData(),
				previewForm = this.getPreviewData();
			if (form && previewForm){
				this.preview(previewForm, true);

				//动态生成apply函数
				this.apply = () => {
					this.isPreview = false;
					//动态生成url
					// let url = '/application/' + this.origin;
					// console.log(url);
					apiApplyForm(this.origin, form, (res) => {
						// console.log(res);
						if (res.status === 200){
							this.clear();
							this.$message.success('提交成功');
						}
						else{
							this.$message.error('提交失败');
						}
					});
				};
			}
			else{
				return ;
				// this.$message.error('请正确填写表单');
			}
			// var t = new Date('2019-04-18 08:00:00')
			// console.log(t)
		},

		//获取表单数据
		getFormData (){
			if (!this.formTitle){
				return null;
			}
			let baseForm = this.$refs['baseForm'].getSubmitForm(),
				apyForm = this.$refs['apyForm'].getSubmitForm(),
				activityID = null,
				form = {
					activityBasicInfo: baseForm,
				};

			if (!baseForm || !apyForm){
				return null;
			}

			// console.log('baseForm', baseForm);
			// console.log(this.origin, apyForm);

			if (this.isActivity){
			//活动表添加特殊的表项
				form.activitySupplementaryInfo = apyForm;

			//活动表包含其它从属表
				for (let name of ['etiquette', 'lectureTicket', 'host', 'poster']){
					let formName = name + 'Form',
						otherForm = null;
					if (!this.otherTables[name].has){
						continue;
					}
					otherForm = this.$refs[formName].getSubmitForm();
					if (otherForm){
						// console.log(name, otherForm);
						// console.log(otherForm.type);
						form[name] = otherForm;
					}
					else {
						return null;
					}
				}
			}
			else{
				form.activityThisBelongsTo = activityID;
				for (let key in apyForm){
					form[key] = apyForm[key];
				}
			}

			console.log(form);
			return form;
		},

		//获取预览表单数据
		getPreviewData (){
			if (!this.formTitle){
				return null;
			}
			let baseForm = this.$refs['baseForm'].getSubmitForm(),
				apyForm = this.$refs['apyForm'].getSubmitForm(),
				previewForm = {
					type: this.origin,
				};

			if (!baseForm || !apyForm){
				return null;
			}

			// console.log('baseForm', baseForm);
			// console.log(this.origin, apyForm);

			for (let form of [baseForm, apyForm]){
				for (let key in form){
					if (form.hasOwnProperty(key)){
						previewForm[key] = form[key];
					}
				}
			}

			if (this.isActivity){
			//活动表包含其它从属表
				for (let name of ['etiquette', 'lectureTicket', 'host', 'poster']){
					let formName = name + 'Form',
						otherForm = null;
					if (!this.otherTables[name].has){
						continue;
					}
					otherForm = this.$refs[formName].getSubmitForm();
					otherForm.type = name;
					if (otherForm){
						// console.log(name, otherForm);
						// console.log(otherForm.type);
						previewForm.otherForms || (previewForm.otherForms = []);
						previewForm.otherForms.push(otherForm);
					}
					else {
						return null;
					}
				}
			}

			// console.log(previewForm);
			return previewForm;			
		},

		//清空表单
		clear (){
			this.$refs['baseForm'].clear();
			this.$refs['apyForm'].clear();
			['etiquette', 'lectureTicket', 'host', 'poster'].forEach((value) => {
				if (this.otherTables[value].has){
					let formName = value + "Form";
					this.$refs[formName].clear();
				}
			});
		},

		//预览表单
		preview (form, isApply){
			this.isPreview = true;
			this.previewData = form;
		},

		//切换表单
		toggleTable (tableName){
			if (tableName === 'origin'){
				this.current = this.origin;
				return ;
			}
			let other = this.otherTables[tableName];
			console.log(other);
			if (!other.has){
				other.matter = other.Matter;
				other.table = other.Table;
				other.has = true;
			}
			if (this.current !== other.type){
				this.currentTable = other.table;
				this.current = other.type;
			}
		},

		//删除表单
		deleteTable (tableName){
			let other = this.otherTables[tableName];
			if (other.has){
				other.matter = null;
				other.table = null;
				other.has = false;
				this.current = this.origin;

				//重新创建表前清空表
				let formName = tableName + 'Form';
				this.$refs[formName].clearApplyForm();
			}
		}
	}

	// beforeRouteLeave (to, from, next) {
	//   // 导航离开该组件的对应路由时调用
	//   // 可以访问组件实例 `this`
	//   console.log('router leave')
	// }
};
</script>
<style scoped lang="stylus" src="../../assets/css/apply/apply.styl"></style>
