<template>
	<div>
		<div class="apy-header">{{formTitle}}</div>
		<div class="apy-container">
			<div class="apy-form-container">
				<!-- el-form -->
				<!-- transition必须放在keep-alive才能使keep-alive生效 -->
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
							ref="tickForm"
							:is="otherTables.ticket.table"
							:base="base"
							v-show="current === 'ticket'"
						></component>
					</keep-alive>
				</transition>

				<transition name="slide-fade-right">
					<keep-alive>
						<component
							ref="presenterForm"
							:is="otherTables.presenter.table"
							:base="base"
							v-show="current === 'presenter'"
						></component>
					</keep-alive>
				</transition>

				<transition name="slide-fade-right">
					<keep-alive>
						<component
							ref="publicityForm"
							:is="otherTables.publicity.table"
							:base="base"
							v-show="current === 'publicity'"
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
			
					<el-button :type="ticket_add_btn"  class="add-btn" @click="toggleTable('ticket')">
						<i class="el-icon-circle-plus-outline" v-if="!otherTables.ticket.has"></i>
						{{ticketText}}
					</el-button>
					<transition name="slide-fade-left">
						<div class="new-matter" v-if="current === 'ticket'">
							<component :is="otherTables.ticket.matter"></component>
							<el-button
								type="danger"
								class="delete-btn"
								@click="deleteTable('ticket')"
								v-if="otherTables.ticket.has"
							>删除讲座票申请表</el-button>
						</div>
					</transition>
			
					<el-button :type="presenter_add_btn"  class="add-btn" @click="toggleTable('presenter')">
						<i class="el-icon-circle-plus-outline" v-if="!otherTables.presenter.has"></i>
						{{presenterText}}
					</el-button>
					<transition name="slide-fade-left">
						<div class="new-matter" v-if="current === 'presenter'">
							<component :is="otherTables.presenter.matter"></component>
							<el-button
								type="danger"
								class="delete-btn"
								@click="deleteTable('presenter')"
								v-if="otherTables.presenter.has"
							>删除主持人申请表</el-button>
						</div>
					</transition>					
			
					<el-button :type="publicity_add_btn" class="add-btn" @click="toggleTable('publicity')">
						<i class="el-icon-circle-plus-outline" v-if="!otherTables.publicity.has"></i>
						{{publicityText}}
					</el-button>
					<transition name="slide-fade-left">
						<div class="new-matter" v-if="current === 'publicity'">
							<component :is="otherTables.publicity.matter"></component>
							<el-button
								type="danger"
								class="delete-btn"
								@click="deleteTable('publicity')"
								v-if="otherTables.publicity.has"
							>删除宣传物资申请表</el-button>
						</div>
					</transition>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { apiApplyForm } from '../../api/apply.js';
import EtiquetteTable from '../../components/apply/form/EtiquetteForm.vue';
import EtiquetteMatter from '../../components/apply/matters/EtiquetteMatter.vue';
import TicketTable from '../../components/apply/form/TicketForm.vue';
import TicketMatter from '../../components/apply/matters/TicketMatter.vue';
import PresenterTable from '../../components/apply/form/PresenterForm.vue';
import PresenterMatter from '../../components/apply/matters/PresenterMatter.vue';
import PublicityTable from '../../components/apply/form/PublicityForm.vue';
import PublicityMatter from '../../components/apply/matters/PublicityMatter.vue';

// 默认的申请表单参数
const DefaultFormConfig = {
	activity: '活动申请表',
	etiquette: '礼仪队申请表',
	material: '秘书物资申请表',
	newmedia: '新媒体申请表',
	presenter: '主持人申请表',
	publicity: '宣传物资申请表',
	reporter: '记者团申请表',
	ticket: '讲座票申请表'
};

export default {
	name: 'applyform',
	data () {
		return {
			base: {
				actname: '',
				actaddr: '',
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
				ticket: {
					type: 'ticket',
					has: false,
					matter: null,
					table: null,
					Table: TicketTable,
					Matter: TicketMatter,
				},
				presenter: {
					type: 'presenter',
					has: false,
					matter: null,
					table: null,
					Table: PresenterTable,
					Matter: PresenterMatter,
				},
				publicity: {
					type: 'publicity',
					has: false,
					matter: null,
					table: null,
					Table: PublicityTable,
					Matter: PublicityMatter,
				},
			},
		};
	},

	computed: {
		//添加表的button的文字
		etiquetteText: function(){
			return !this.otherTables.etiquette.has ? '增添礼仪申请表' : '礼仪申请表';
		},
		ticketText: function(){
			return !this.otherTables.ticket.has ? '增添讲座票申请表' : '讲座票申请表';
		},
		presenterText: function(){
			return !this.otherTables.presenter.has ? '增添主持人申请表' : '主持人申请表';
		},
		publicityText: function(){
			return !this.otherTables.publicity.has ? '增添宣传物资申请表' : '宣传物资申请表';
		},

		//添加表的button的type
		etiquette_add_btn: function(){
			return this.otherTables.etiquette.has ? 'info' : 'primary';
		},
		ticket_add_btn: function(){
			return this.otherTables.ticket.has ? 'info' : 'primary';
		},
		presenter_add_btn: function(){
			return this.otherTables.presenter.has ? 'info' : 'primary';
		},
		publicity_add_btn: function(){
			return this.otherTables.publicity.has ? 'info' : 'primary';
		},

		originTitle: function() {
			return DefaultFormConfig[this.origin];
		},
		formTitle: function () {
			return DefaultFormConfig[this.current];
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
	methods: {
		applySubmit(){
			if (!this.formTitle){
				return;
			}
			var form = this.$refs['apyForm'].getSubmitForm();
			if (!form){
				return;
			}
			console.log(form);

			if (this.isActivity){
				var otherTables = [];
				['etiquette', 'ticket', 'presenter', 'publicity'].forEach((value) => {
					let formName = value + 'Form',
						otherForm = null;
					if (!this.otherTables[value].has){
						return;
					}
					otherForm = this.$refs[formName].getSubmitForm();
					if (otherForm){
						otherTables.push(otherForm);
					}
					else {
						return;
					}
				});
				form.otherTables = otherTables;
				console.log(form);
				['etiquette', 'ticket', 'presenter', 'publicity'].forEach((value) => {
					if (this.otherTables[value].has){
						let formName = value + "Form";
						this.$refs[formName].clear();
					}
				});
			}

			if (form){
				apiApplyForm(form, () => {
					this.$refs['apyForm'].clear();
					this.$message.success('提交成功');
				});
			}
			else{
				this.$message.error('请正确填写表单');
			}
			// var t = new Date('2019-04-18 08:00:00')
			// console.log(t)
		},
		toggleTable(tableName){
			if (tableName === 'origin'){
				this.current = this.origin;
				return ;
			}
			let other = this.otherTables[tableName];
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
		deleteTable(tableName){
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
