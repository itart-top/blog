(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{645:function(a,e,t){"use strict";t.r(e);var n=t(8),s=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("实现效果: 监听Eclipse修改文件时, 同时更新某一个文件, 因为更新采用的是外部程序, 所以修改的时候需要调用Eclipse的方法Resources.refreshLocal重新加载这个文件.")]),a._v(" "),t("ul",[t("li",[a._v("添加监听")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ResourcesPlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getWorkspace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("addResourceChangeListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n\t\t\t\tresourceChangeListener"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IResourceChangeEvent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("POST_BUILD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ul",[t("li",[a._v("在resourceChangeListener中刷新文件")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IFile")]),a._v(" f "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ResourcesPlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getWorkspace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getRoot")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getFileForLocation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"D:/depot/workspace/itart/src/main.java"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("refreshLocal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IResource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DEPTH_ZERO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ul",[t("li",[t("p",[a._v("异常信息")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("org.eclipse.core.internal.resources.ResourceException: The resource tree is locked for modifications.\n\tat org.eclipse.core.internal.resources.WorkManager.checkIn(WorkManager.java:116)\n\tat org.eclipse.core.internal.resources.Workspace.prepareOperation(Workspace.java:2282)\n\tat org.eclipse.core.internal.resources.Resource.refreshLocal(Resource.java:1655)\n\tat org.eclipse.core.internal.resources.File.refreshLocal(File.java:333)\n\tat top.itart.auto.grunt.handlers.ExecuteHandler.refreshFile(ExecuteHandler.java:52)\n\tat top.itart.auto.grunt.handlers.ExecuteHandler.execute(ExecuteHandler.java:40)\n\tat top.itart.auto.grunt.handlers.FileChangeHandler.handle(FileChangeHandler.java:14)\n\tat top.itart.auto.grunt.listener.ResourceChangeListener.resourceChanged(ResourceChangeListener.java:66)\n\tat org.eclipse.core.internal.events.NotificationManager$1.run(NotificationManager.java:291)\n\tat org.eclipse.core.runtime.SafeRunner.run(SafeRunner.java:42)\n\tat org.eclipse.core.internal.events.NotificationManager.notify(NotificationManager.java:285)\n\tat org.eclipse.core.internal.events.NotificationManager.broadcastChanges(NotificationManager.java:149)\n\tat org.eclipse.core.internal.resources.Workspace.broadcastPostChange(Workspace.java:395)\n\tat org.eclipse.core.internal.resources.Workspace.endOperation(Workspace.java:1530)\n\tat org.eclipse.core.internal.resources.Workspace.run(Workspace.java:2353)\n\tat org.eclipse.ui.actions.WorkspaceModifyOperation.run(WorkspaceModifyOperation.java:118)\n\tat org.eclipse.ui.internal.editors.text.WorkspaceOperationRunner.run(WorkspaceOperationRunner.java:75)\n\tat org.eclipse.ui.internal.editors.text.WorkspaceOperationRunner.run(WorkspaceOperationRunner.java:65)\n\tat org.eclipse.ui.editors.text.TextFileDocumentProvider.executeOperation(TextFileDocumentProvider.java:456)\n\tat org.eclipse.ui.editors.text.TextFileDocumentProvider.saveDocument(TextFileDocumentProvider.java:772)\n\tat org.eclipse.ui.texteditor.AbstractTextEditor.performSave(AbstractTextEditor.java:5048)\n\tat org.eclipse.wst.jsdt.internal.ui.javaeditor.CompilationUnitEditor.performSave(CompilationUnitEditor.java:1210)\n\tat org.eclipse.wst.jsdt.internal.ui.javaeditor.CompilationUnitEditor.doSave(CompilationUnitEditor.java:1263)\n\tat org.eclipse.ui.texteditor.AbstractTextEditor$TextEditorSavable.doSave(AbstractTextEditor.java:7177)\n\tat org.eclipse.ui.Saveable.doSave(Saveable.java:214)\n\tat org.eclipse.ui.internal.SaveableHelper.doSaveModel(SaveableHelper.java:349)\n\tat org.eclipse.ui.internal.SaveableHelper$3.run(SaveableHelper.java:195)\n\tat org.eclipse.ui.internal.SaveableHelper$5.run(SaveableHelper.java:277)\n\tat org.eclipse.jface.operation.ModalContext.runInCurrentThread(ModalContext.java:464)\n\tat org.eclipse.jface.operation.ModalContext.run(ModalContext.java:372)\n\tat org.eclipse.jface.window.ApplicationWindow$1.run(ApplicationWindow.java:759)\n\tat org.eclipse.swt.custom.BusyIndicator.showWhile(BusyIndicator.java:70)\n\tat org.eclipse.jface.window.ApplicationWindow.run(ApplicationWindow.java:756)\n\tat org.eclipse.ui.internal.WorkbenchWindow.run(WorkbenchWindow.java:2649)\n\tat org.eclipse.ui.internal.SaveableHelper.runProgressMonitorOperation(SaveableHelper.java:285)\n\tat org.eclipse.ui.internal.SaveableHelper.runProgressMonitorOperation(SaveableHelper.java:264)\n\tat org.eclipse.ui.internal.SaveableHelper.saveModels(SaveableHelper.java:207)\n\tat org.eclipse.ui.internal.SaveableHelper.savePart(SaveableHelper.java:144)\n\tat org.eclipse.ui.internal.EditorManager.savePart(EditorManager.java:1399)\n\tat org.eclipse.ui.internal.WorkbenchPage.savePart(WorkbenchPage.java:3416)\n\tat org.eclipse.ui.internal.WorkbenchPage.saveEditor(WorkbenchPage.java:3429)\n\tat org.eclipse.ui.internal.handlers.SaveHandler.execute(SaveHandler.java:54)\n\tat org.eclipse.ui.internal.handlers.HandlerProxy.execute(HandlerProxy.java:293)\n\tat org.eclipse.core.commands.Command.executeWithChecks(Command.java:476)\n\tat org.eclipse.core.commands.ParameterizedCommand.executeWithChecks(ParameterizedCommand.java:508)\n\tat org.eclipse.ui.internal.handlers.HandlerService.executeCommand(HandlerService.java:169)\n\tat org.eclipse.ui.internal.keys.WorkbenchKeyboard.executeCommand(WorkbenchKeyboard.java:468)\n\tat org.eclipse.ui.internal.keys.WorkbenchKeyboard.press(WorkbenchKeyboard.java:786)\n\tat org.eclipse.ui.internal.keys.WorkbenchKeyboard.processKeyEvent(WorkbenchKeyboard.java:885)\n\tat org.eclipse.ui.internal.keys.WorkbenchKeyboard.filterKeySequenceBindings(WorkbenchKeyboard.java:567)\n\tat org.eclipse.ui.internal.keys.WorkbenchKeyboard.access$3(WorkbenchKeyboard.java:508)\n\tat org.eclipse.ui.internal.keys.WorkbenchKeyboard$KeyDownFilter.handleEvent(WorkbenchKeyboard.java:123)\n\tat org.eclipse.swt.widgets.EventTable.sendEvent(EventTable.java:84)\n\tat org.eclipse.swt.widgets.Display.filterEvent(Display.java:1262)\n\tat org.eclipse.swt.widgets.Widget.sendEvent(Widget.java:1052)\n\tat org.eclipse.swt.widgets.Widget.sendEvent(Widget.java:1077)\n\tat org.eclipse.swt.widgets.Widget.sendEvent(Widget.java:1062)\n\tat org.eclipse.swt.widgets.Widget.sendKeyEvent(Widget.java:1104)\n\tat org.eclipse.swt.widgets.Widget.sendKeyEvent(Widget.java:1100)\n\tat org.eclipse.swt.widgets.Widget.wmChar(Widget.java:1509)\n\tat org.eclipse.swt.widgets.Control.WM_CHAR(Control.java:4640)\n\tat org.eclipse.swt.widgets.Canvas.WM_CHAR(Canvas.java:345)\n\tat org.eclipse.swt.widgets.Control.windowProc(Control.java:4528)\n\tat org.eclipse.swt.widgets.Canvas.windowProc(Canvas.java:341)\n\tat org.eclipse.swt.widgets.Display.windowProc(Display.java:4972)\n\tat org.eclipse.swt.internal.win32.OS.DispatchMessageW(Native Method)\n\tat org.eclipse.swt.internal.win32.OS.DispatchMessage(OS.java:2531)\n\tat org.eclipse.swt.widgets.Display.readAndDispatch(Display.java:3752)\n\tat org.eclipse.ui.internal.Workbench.runEventLoop(Workbench.java:2701)\n\tat org.eclipse.ui.internal.Workbench.runUI(Workbench.java:2665)\n\tat org.eclipse.ui.internal.Workbench.access$4(Workbench.java:2499)\n\tat org.eclipse.ui.internal.Workbench$7.run(Workbench.java:679)\n\tat org.eclipse.core.databinding.observable.Realm.runWithDefault(Realm.java:332)\n\tat org.eclipse.ui.internal.Workbench.createAndRunWorkbench(Workbench.java:668)\n\tat org.eclipse.ui.PlatformUI.createAndRunWorkbench(PlatformUI.java:149)\n\tat org.eclipse.ui.internal.ide.application.IDEApplication.start(IDEApplication.java:123)\n\tat org.eclipse.equinox.internal.app.EclipseAppHandle.run(EclipseAppHandle.java:196)\n\tat org.eclipse.core.runtime.internal.adaptor.EclipseAppLauncher.runApplication(EclipseAppLauncher.java:110)\n\tat org.eclipse.core.runtime.internal.adaptor.EclipseAppLauncher.start(EclipseAppLauncher.java:79)\n\tat org.eclipse.core.runtime.adaptor.EclipseStarter.run(EclipseStarter.java:344)\n\tat org.eclipse.core.runtime.adaptor.EclipseStarter.run(EclipseStarter.java:179)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat org.eclipse.equinox.launcher.Main.invokeFramework(Main.java:622)\n\tat org.eclipse.equinox.launcher.Main.basicRun(Main.java:577)\n\tat org.eclipse.equinox.launcher.Main.run(Main.java:1410)\n\tat org.eclipse.equinox.launcher.Main.main(Main.java:1386)\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br"),t("span",{staticClass:"line-number"},[a._v("34")]),t("br"),t("span",{staticClass:"line-number"},[a._v("35")]),t("br"),t("span",{staticClass:"line-number"},[a._v("36")]),t("br"),t("span",{staticClass:"line-number"},[a._v("37")]),t("br"),t("span",{staticClass:"line-number"},[a._v("38")]),t("br"),t("span",{staticClass:"line-number"},[a._v("39")]),t("br"),t("span",{staticClass:"line-number"},[a._v("40")]),t("br"),t("span",{staticClass:"line-number"},[a._v("41")]),t("br"),t("span",{staticClass:"line-number"},[a._v("42")]),t("br"),t("span",{staticClass:"line-number"},[a._v("43")]),t("br"),t("span",{staticClass:"line-number"},[a._v("44")]),t("br"),t("span",{staticClass:"line-number"},[a._v("45")]),t("br"),t("span",{staticClass:"line-number"},[a._v("46")]),t("br"),t("span",{staticClass:"line-number"},[a._v("47")]),t("br"),t("span",{staticClass:"line-number"},[a._v("48")]),t("br"),t("span",{staticClass:"line-number"},[a._v("49")]),t("br"),t("span",{staticClass:"line-number"},[a._v("50")]),t("br"),t("span",{staticClass:"line-number"},[a._v("51")]),t("br"),t("span",{staticClass:"line-number"},[a._v("52")]),t("br"),t("span",{staticClass:"line-number"},[a._v("53")]),t("br"),t("span",{staticClass:"line-number"},[a._v("54")]),t("br"),t("span",{staticClass:"line-number"},[a._v("55")]),t("br"),t("span",{staticClass:"line-number"},[a._v("56")]),t("br"),t("span",{staticClass:"line-number"},[a._v("57")]),t("br"),t("span",{staticClass:"line-number"},[a._v("58")]),t("br"),t("span",{staticClass:"line-number"},[a._v("59")]),t("br"),t("span",{staticClass:"line-number"},[a._v("60")]),t("br"),t("span",{staticClass:"line-number"},[a._v("61")]),t("br"),t("span",{staticClass:"line-number"},[a._v("62")]),t("br"),t("span",{staticClass:"line-number"},[a._v("63")]),t("br"),t("span",{staticClass:"line-number"},[a._v("64")]),t("br"),t("span",{staticClass:"line-number"},[a._v("65")]),t("br"),t("span",{staticClass:"line-number"},[a._v("66")]),t("br"),t("span",{staticClass:"line-number"},[a._v("67")]),t("br"),t("span",{staticClass:"line-number"},[a._v("68")]),t("br"),t("span",{staticClass:"line-number"},[a._v("69")]),t("br"),t("span",{staticClass:"line-number"},[a._v("70")]),t("br"),t("span",{staticClass:"line-number"},[a._v("71")]),t("br"),t("span",{staticClass:"line-number"},[a._v("72")]),t("br"),t("span",{staticClass:"line-number"},[a._v("73")]),t("br"),t("span",{staticClass:"line-number"},[a._v("74")]),t("br"),t("span",{staticClass:"line-number"},[a._v("75")]),t("br"),t("span",{staticClass:"line-number"},[a._v("76")]),t("br"),t("span",{staticClass:"line-number"},[a._v("77")]),t("br"),t("span",{staticClass:"line-number"},[a._v("78")]),t("br"),t("span",{staticClass:"line-number"},[a._v("79")]),t("br"),t("span",{staticClass:"line-number"},[a._v("80")]),t("br"),t("span",{staticClass:"line-number"},[a._v("81")]),t("br"),t("span",{staticClass:"line-number"},[a._v("82")]),t("br"),t("span",{staticClass:"line-number"},[a._v("83")]),t("br"),t("span",{staticClass:"line-number"},[a._v("84")]),t("br"),t("span",{staticClass:"line-number"},[a._v("85")]),t("br"),t("span",{staticClass:"line-number"},[a._v("86")]),t("br"),t("span",{staticClass:"line-number"},[a._v("87")]),t("br"),t("span",{staticClass:"line-number"},[a._v("88")]),t("br"),t("span",{staticClass:"line-number"},[a._v("89")]),t("br"),t("span",{staticClass:"line-number"},[a._v("90")]),t("br")])])])]),a._v(" "),t("p",[a._v("分析: Eclipse在触发POST_CHANGE事件时, 会对资源文件进行锁定")]),a._v(" "),t("p",[a._v("方案1: 创建一个Job 来执行文件刷新事件.")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('Job job = new Job("Load Project") {\n\t@Override\n\tprotected IStatus run(IProgressMonitor monitor) {\n\t\t\n\t\t// Put your logic here\n\t\tIFile f = ResourcesPlugin.getWorkspace().getRoot().getFileForLocation(new Path(ApplicationContext.getRefreshFilePath()));\n\t\tf.refreshLocal(IResource.DEPTH_ZERO, null);\n\t\treturn Status.OK_STATUS;\n\t}\n};\njob.setUser(true);\njob.schedule();\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br")])]),t("p",[a._v("缺点是执行的时候会弹出一个提示对话框, 虽然会自动消失, 但是看起来突兀, 建议采用方案2.")]),a._v(" "),t("p",[a._v("方案2: 将监听事件POST_BUILD, 改为 PRE_BUILD")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ResourcesPlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getWorkspace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("addResourceChangeListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n\t\t\t\tresourceChangeListener"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("IResourceChangeEvent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("PRE_BUILD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])])}),[],!1,null,null,null);e.default=s.exports}}]);