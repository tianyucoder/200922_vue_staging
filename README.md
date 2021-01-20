## 1.Vue脚手架说明
### 1.1. 文件结构分析
		|-- node_modules
		|-- public
				|-- index.html: 主页面文件
		|-- src
			|-- main.js: 应用入口js
		|-- babel.config.js: babel的配置文件
		|-- vue.config.js: vue的配置文件，需要手动添加
		|-- .gitignore: git版本管制忽略的配置
		|-- package.json: 应用包配置文件 
		|-- README.md: 应用描述说明的readme文件
### 1.2. 关于h函数说明
		vue.runtime.common.js（项目中用的多） : 
				1.不包含模板解析器，打包后体积小
				2.配置项中的不能写template，要用render: h => h(App)代替
		vue.js : 
				1.包含解模板析器，打包后体积大
				2.配置可以写template

## 2.ref与props
### 2.1. ref的用法：
		(1).给组件标签指定ref：<Demo ref="xxxx"/>，获取到的是组件实例对象vc
		(2).给html标签指定ref：<input ref="xxxx"/>，获取到的是真实DOM节点
		(3).通过this.$refs获取
### 2.2. props的用法
		(1).传递props：<Demo :a="xxx"/>
		(2).Demo组件中声明接收：
				第一种方式（只声明）：
					props:['userName'] 

				第二种方式（限制类型）：
					props:{
						userName:Number
					}

				第三种方式（限制类型、属性，指定默认值）：
					props:{
						userName:{
							type:String,
							required:true,
							default:'老王'
						}
					}

## 3.scoped、name、语法检查
### 3.1. scoped可以让样式在局部生效
### 3.2. name可以给组件命名
### 3.2. 语法检查配置
		第一种方式：/*eslint-disable-next-line*/
		第二种方式：/*eslint-disable*/
		第三种方式：vue.confog.js中配置

## 4.todoList案例
		(1).组件data中的数据、接到的props、methods中的方法、computed中的属性，都在vc对象上。
		(2).<input v-model="x" @click="demo"/> 会先执行demo函数，在维护x的值
		(3).使用计算属性时，只是读取用get，修改记得要用set
		(4).methods、computed、watch并没有严格意义上的界定，视具体功能而定，有时用什么都可以实现。

## 5.SessionStorage与LocalStorage
		(1). Cookie, SessionStorage, LocalStorage这三者都可以被用来在浏览器端存储数据，而且都是字符串类型的键值对！
		(2). 注意：session和SessionStorage不是一个概念！！！
				 在服务端有一种存储方式叫做：session会话存储，常常被简称session。
				 SessionStorage和LocalStorage都是浏览器本地存储，统称为Web Storage。
		(3). 存储内容大小一般支持5-10MB
		(4). 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。
		(5). 相关API：
					1. localStorage.setItem('key', 'value');
							该方法接受一个键名和值作为参数，将会把键值对添加到存储中，如果键名存在，则更新其对应的值。
							
					2. var data = xxxxxStorage.getItem('person');
							该方法接受一个键名作为参数，返回键名对应的值。

					3. xxxxxStorage.removeItem('key');
							该方法接受一个键名作为参数，并把该键名从存储中删除。
						
					4. xxxxxStorage.clear()
						调用该方法会清空存储中的所有键名

	备注：SessionStorage存储的内容会随着浏览器窗口关闭而消失。
        LocalStorage存储的内容，需要手动清除才会消失。
				xxxxxStorage.getItem(xxx)如果xxx对应的value获取不到，那么getItem的返回值是null
				JSON.parse(null)的结果依然是null

## 6.todoList案例_本地存储版
		(1).解析LocaStorage中数据时要记得处理解析异常
		(2).watch时最好深度监视

## 7.深度监视
		(1).Vue中的watch默认只能监测自身一层的数据
		(2).配置deep:true可以检测所有层次的数据

## 8.自定义事件
		(1).绑定自定义事件：
				第一种方式：
						<Demo @haha="test"/>
				第二种方式：
						<Demo ref="demo"/>
						mounted中：this.$refs.demo.$on('haha',this.test)
		(2).触发自定义事件：
						this.$refs.header.$on('add-todo',this.addTodo)
		(3).备注：
					1.A组件想让B组件给自己传数据，那么就要给B组件绑定自定义事件
					2.自定义事件的回调在哪，哪才能接受到数据
					3.适用于 子 ===> 父


## 9.全局事件总线(GlobalEventBus)
		组件间通信的一种方式，适用于任意组件间通信
		(1).安装全局事件总线，在main.js中配置
					new Vue({
						beforeCreate() {
							Vue.prototype.$bus = this //安装事件总线
						},
						el:'#app',
						render:h => h(App)
					})
		(2).需要接受数据的组件中给$bus绑定自定义事件
					mounted() {
						this.$bus.$on('xxxx',this.yyyyy)
					}
					备注：上方的yyyy，若要配置在当前组件的methods中，则this是当前组件vc
								上方的yyyy，若直接写函数，则this是$bus
		(3).要提供数据的组件中触发事件：
					this.$bus.$emit('xxxx',数据)
		(4).备注：
						1.谁接数据，谁就$on('xxx-xxx',this.yyy)
						2.谁传数据，谁就$emit('xxx-xxxx',数据)
						3.上方的数据可以传递多个，例如$emit('xxx-xxxx',数据1,数据2，数据3)
							但一般传递多个的时候，我们包装成一个对象传递







## 10.插槽
		作用：父组件向子组件指定位置中插入html结构
		分类：
				默认插槽：<slot></slot>
				命名插槽：<slot name="s1"></slot>
				作用域插槽：后期项目中会讲到
		使用：	
				父组件中：
						<template slot="s1">
							具体html结构
						</template>
				子组件中：
						<slot></slot> 或 <slot name="s1"></slot>

## 11.vue-resource
		vue1.x时期用于发送网络请求的库，现已弃用，了解即可

## 12.求和案例vuex版
		(1).项目根目录创建： vuex/store.js 
					1.1) 应用Vuex插件
					1.2) 创建store并管理：state、actions、mutations对象
		(2).组件中读取状态：$store.state.xxxx
		(3).组件中更新状态：$store.dispatch('动作名',数据)

## 

##

##

##