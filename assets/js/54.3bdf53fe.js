(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{664:function(s,n,t){"use strict";t.r(n);var a=t(8),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",[s._v("map示例")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("map的range操作 - key、value都是值复制")])]),s._v(" "),t("li",[t("p",[s._v("map如何保证按key的某个顺序遍历？- 分两次遍历，第一次取出所有的key并排序；第二次按排序后的key去遍历")])]),s._v(" "),t("li",[t("p",[s._v("map的使用用上，有什么要注意的？- 遍历时，尽量只修改或删除当前key，操作非当前的key会带来不可预知的结果")])]),s._v(" "),t("li",[t("p",[s._v("map的设计上，我们可以学到 - Go语言对map底层的hmap做了很多层面的优化与封装，也屏蔽了很多实现的细节，适用于绝大多数的\n场景；而少部分有极高性能要求的场景，就需要深入到hmap中的相关细节。")])])]),s._v(" "),t("p",[t("strong",[s._v("Slice")])]),s._v(" "),t("ol",[t("li",[s._v("熟悉slice的底层数据结构 - 实际存储数据的array，当前长度len与容量cap")]),s._v(" "),t("li",[s._v("slice的扩容机制 - 不严格来说，当长度小于1024时，cap翻倍；大于1024时，增加1/4")]),s._v(" "),t("li",[s._v("slice有很多特性与map一致 - 记住一点，代码中操作的slice和map只是上层的，实际存储数据的是array与hmap")])]),s._v(" "),t("p",[t("strong",[s._v("interface")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("interface的两种类型 - 数据结构的interface，侧重于类型；面向对象中接囗定义的主interface，侧重于方法的声明")])]),s._v(" "),t("li",[t("p",[s._v("了解interface的底层定义一eface和iface，都分为两个部分：类型与数据")]),s._v(" "),t("p",[s._v("iface底层对类型匹配进行了优化一map+mutex组合")])])]),s._v(" "),t("p",[t("strong",[s._v("atomic")])]),s._v(" "),t("ol",[t("li",[s._v("atomic适用的场景 - 简单简单！不要将atomic用在复杂的业务逻辑中")]),s._v(" "),t("li",[s._v("atomic.value与mutex - 学习用两者解决问题的思路")]),s._v(" "),t("li",[s._v("了解data race 机制 - atom可以有效地减少数据竟争")])]),s._v(" "),t("p",[t("strong",[s._v("sync.Map")])]),s._v(" "),t("ol",[t("li",[s._v("sync.Map的核心实现两个map，一个用于写，另一个用于读，这样的设计思想可以类比缓存与数库")]),s._v(" "),t("li",[s._v("sync.Map的局限性 - 如果远高于读，dirty->readOnly这个类似于刷数据的频率就比较高，不如直接用mutex + map的组台")]),s._v(" "),t("li",[s._v("sync.Map的设计思想保证高频读的无锁结构、空间换时间")])]),s._v(" "),t("p",[t("strong",[s._v("Sync.Cond")]),s._v("\n1．sync.Cond的核心实现 - 通过一个锁，封装了notify通知的实现，包聒了单个通知与广播两种方式\n2．sync.Cond与channel的异同 - channel 应用于一收一发的场景，sync.Cond应用于多收一发的场景\n3．sync.Cond的使用探索\n"),t("strong",[s._v("sync.Pool")])]),s._v(" "),t("ol",[t("li",[s._v("到sync.Pool的核心作用 - 读源码，缓存稍后频繁使甲的对象+减轻GC压力")]),s._v(" "),t("li",[s._v("sync.Pool的Put与Get - Put的顺序为Iocal private -> local shared，Get的顺序为local private -> loca shared -> remote")]),s._v(" "),t("li",[s._v("思考sync.Poo应用的核心场景 - 高频使用且生命周期短的对象，且初始化始终一致。如：fmt")]),s._v(" "),t("li",[s._v("探索Go1.13引入victim的作用 -  了解victim cache的机制")])]),s._v(" "),t("p",[t("strong",[s._v("Channel关闭通知例子")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" sub "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    closing "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("error")]),s._v("\n    updates "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("chan")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("sub"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("error")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//tip 核心逻辑：两层通知，第一层作为准备关闭的通知，第二层作为关闭结果的返回")]),s._v("\n  errc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("chanerror"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//tip第一步：要关闭时，先传一个chane error过去，通知要关闭了")]),s._v("\n  s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("closing "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" errc\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//tip 第三步：从chane error中读取错误，阻塞等待")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v("errc\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("sub"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("loop")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("error")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" errc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("closing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//tip 第二步：收到关闭后，进行处理，处理后把error传回去")]),s._v("\n    errc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v(" err\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("updates"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[t("strong",[s._v("Context")])]),s._v(" "),t("ol",[t("li",[s._v("Context上下文 - 结合Linux操作系统的CPU上下文切换／子进程与父进程进行理解")]),s._v(" "),t("li",[s._v("如何优雅地使用context - 与setect配合使用，管理协程的生命周期")]),s._v(" "),t("li",[s._v("Context的底层实现是什么？ - mutex与channel的结合，前者用于初始部分参数，后者用于通信")])]),s._v(" "),t("p",[t("strong",[s._v("Channel")])]),s._v(" "),t("ol",[t("li",[s._v("channel用于Goroutine间通信时的注意点 - 合理设置channel的size大小/正确地关闭channel")]),s._v(" "),t("li",[s._v("合理地运用channel的发送与接收 - 运用函数传入参数的定义，限制<-chan和chan <-")]),s._v(" "),t("li",[s._v("channel的底层实现 - 环形队列 + 发送、接收的waiter通知")])])])}),[],!1,null,null,null);n.default=e.exports}}]);