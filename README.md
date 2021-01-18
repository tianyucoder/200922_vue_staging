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
		(1).组件data中的数据、接到的props，都在vc对象上。
		(2).<input v-model="x" @click="demo"/> 会先执行demo函数，在维护x
		(3).使用计算属性时，只是读取用get，修改记得要用set









