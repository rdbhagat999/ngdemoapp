(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"uKI+":function(e,t,n){"use strict";n.r(t),n.d(t,"routes",function(){return c}),n.d(t,"LazyModule",function(){return f});var i=n("ofXK"),o=n("tyNb"),r=n("fXoL");let s=(()=>{class e{}return e.\u0275mod=r.Fb({type:e}),e.\u0275inj=r.Eb({factory:function(t){return new(t||e)},imports:[[i.b]]}),e})(),l=(()=>{class e{constructor(){this.progress=0}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-progress"]],inputs:{progress:"progress"},decls:2,vars:2,consts:[[1,"progress-cont"],[1,"progress"]],template:function(e,t){1&e&&(r.Mb(0,"div",0),r.Ib(1,"div",1),r.Lb()),2&e&&(r.xb(1),r.kc("width",t.progress+"%"))},styles:[".progress-cont[_ngcontent-%COMP%]{height:7px;width:100%;border-radius:4px;background-color:#d0d0d0;position:relative}.progress-cont[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{width:0;height:100%;position:absolute;z-index:1;top:0;left:0;border-radius:4px;background-color:#4c97cb;transition:all .5s}"]}),e})();function a(e,t){if(1&e){const e=r.Nb();r.Mb(0,"div",11),r.Mb(1,"div",12),r.Wb(),r.Mb(2,"svg",13),r.Ib(3,"polygon",14),r.Mb(4,"g"),r.Ib(5,"path",15),r.Ib(6,"path",16),r.Ib(7,"path",17),r.Ib(8,"path",18),r.Ib(9,"path",19),r.Lb(),r.Ib(10,"polygon",20),r.Lb(),r.Lb(),r.Vb(),r.Mb(11,"div",21),r.Mb(12,"h4",22),r.nc(13),r.Lb(),r.Mb(14,"p",23),r.nc(15),r.Lb(),r.Ib(16,"app-progress",24),r.Lb(),r.Mb(17,"div",25),r.Tb("click",function(){r.hc(e);const n=t.index;return r.Xb().deleteFile(n)}),r.Wb(),r.Mb(18,"svg",26),r.Ib(19,"path",27),r.Lb(),r.Lb(),r.Lb()}if(2&e){const e=t.$implicit,n=r.Xb();r.xb(13),r.pc(" ",null==e?null:e.name," "),r.xb(2),r.pc(" ",n.formatBytes(null==e?null:e.size,2)," "),r.xb(1),r.ac("progress",null==e?null:e.progress)}}let p=(()=>{class e{constructor(){this.fileEvent=new r.n,this.files=[]}ngOnInit(){}onFileDropped(e){this.prepareFilesList(e)}fileBrowseHandler(e){this.prepareFilesList(e.target.files)}deleteFile(e){this.files.splice(e,1),this.emitfiles()}emitfiles(){this.fileEvent.emit({files:this.files})}uploadFilesSimulator(e){setTimeout(()=>{if(e!==this.files.length){const t=setInterval(()=>{100===this.files[e].progress?(clearInterval(t),this.uploadFilesSimulator(e+1)):this.files[e].progress+=5},200)}},1e3)}prepareFilesList(e){for(const t of e)t.progress=0,this.files.push(t);this.emitfiles()}formatBytes(e,t){if(0===e)return"0 Bytes";const n=t<=0?0:t||2,i=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,i)).toFixed(n))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][i]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-file-dnd"]],outputs:{fileEvent:"fileEvent"},decls:16,vars:1,consts:[["appDnd","",1,"container",3,"fileDropped"],["type","file","id","fileDropRef","accept",".png, .jpeg, .jpg, .csv","multiple","",3,"change"],["fileDropRef",""],["xmlns","http://www.w3.org/2000/svg","width","63","height","64","viewBox","0 0 63 64"],["fill","#3B454F","fill-rule","nonzero"],["d","M42.656 15.135a1.953 1.953 0 0 1-1.391-.578L31.5 4.795l-9.765 9.762a1.97 1.97 0 1 1-2.785-2.785L30.106.616a1.97 1.97 0 0 1 2.785 0l11.157 11.156a1.97 1.97 0 0 1-1.392 3.363z"],["d","M31.5 36.791a1.97 1.97 0 0 1-1.969-1.969V2.01a1.97 1.97 0 0 1 3.938 0v32.812a1.97 1.97 0 0 1-1.969 1.969z"],["d","M55.781 63.041H7.22A7.225 7.225 0 0 1 0 55.822V41.385a4.599 4.599 0 0 1 4.594-4.594h7.234a4.567 4.567 0 0 1 4.402 3.276l2.814 9.382a.658.658 0 0 0 .628.467h23.656a.658.658 0 0 0 .628-.467l2.814-9.385a4.572 4.572 0 0 1 4.402-3.273h7.234A4.599 4.599 0 0 1 63 41.385v14.437a7.225 7.225 0 0 1-7.219 7.219zM4.594 40.729a.656.656 0 0 0-.657.656v14.437a3.286 3.286 0 0 0 3.282 3.282H55.78a3.286 3.286 0 0 0 3.282-3.282V41.385a.656.656 0 0 0-.657-.656h-7.234a.65.65 0 0 0-.628.467L47.73 50.58a4.628 4.628 0 0 1-4.402 3.274H19.672a4.567 4.567 0 0 1-4.402-3.276l-2.814-9.382a.65.65 0 0 0-.628-.467H4.594z"],["for","fileDropRef"],[1,"files-list"],["class","single-file",4,"ngFor","ngForOf"],[1,"single-file"],[1,"file-icon",2,"width","50px"],["version","1.1","id","Capa_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 58 58",0,"xml","space","preserve",2,"enable-background","new 0 0 58 58"],["points","51.5,14 37.5,0 6.5,0 6.5,58 51.5,58 ",2,"fill","#EDEADA"],["d","M16.5,23h25c0.552,0,1-0.447,1-1s-0.448-1-1-1h-25c-0.552,0-1,0.447-1,1S15.948,23,16.5,23z",2,"fill","#CEC9AE"],["d","M16.5,15h10c0.552,0,1-0.447,1-1s-0.448-1-1-1h-10c-0.552,0-1,0.447-1,1S15.948,15,16.5,15z",2,"fill","#CEC9AE"],["d","M41.5,29h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S42.052,29,41.5,29z",2,"fill","#CEC9AE"],["d","M41.5,37h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S42.052,37,41.5,37z",2,"fill","#CEC9AE"],["d","M41.5,45h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S42.052,45,41.5,45z",2,"fill","#CEC9AE"],["points","37.5,0 37.5,14 51.5,14 ",2,"fill","#CEC9AE"],[1,"info"],[1,"name"],[1,"size"],[3,"progress"],[1,"delete",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","14","height","18","viewBox","0 0 14 18"],["fill","#B1B1B1","fill-rule","nonzero","d","M1 16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v10zm3.17-7.83a.996.996 0 0 1 1.41 0L7 9.59l1.42-1.42a.996.996 0 1 1 1.41 1.41L8.41 11l1.42 1.42a.996.996 0 1 1-1.41 1.41L7 12.41l-1.42 1.42a.996.996 0 1 1-1.41-1.41L5.59 11 4.17 9.58a.996.996 0 0 1 0-1.41zM10.5 1L9.79.29C9.61.11 9.35 0 9.09 0H4.91c-.26 0-.52.11-.7.29L3.5 1H1c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"]],template:function(e,t){1&e&&(r.Mb(0,"div",0),r.Tb("fileDropped",function(e){return t.onFileDropped(e)}),r.Mb(1,"input",1,2),r.Tb("change",function(e){return t.fileBrowseHandler(e)}),r.Lb(),r.Wb(),r.Mb(3,"svg",3),r.Mb(4,"g",4),r.Ib(5,"path",5),r.Ib(6,"path",6),r.Ib(7,"path",7),r.Lb(),r.Lb(),r.Vb(),r.Mb(8,"h3"),r.nc(9,"Drag and drop file here"),r.Lb(),r.Mb(10,"h3"),r.nc(11,"or"),r.Lb(),r.Mb(12,"label",8),r.nc(13,"Browse for file"),r.Lb(),r.Lb(),r.Mb(14,"div",9),r.lc(15,a,20,3,"div",10),r.Lb()),2&e&&(r.xb(15),r.ac("ngForOf",t.files))},directives:[i.j,l],styles:[".container[_ngcontent-%COMP%]{padding:2rem;text-align:center;border:1px dashed #979797;position:relative;margin:0 auto}.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0}.container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff;width:183px;height:44px;border-radius:21.5px;background-color:#db202f;padding:8px 16px}.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:600;color:#38424c}.fileover[_ngcontent-%COMP%]{animation:shake 1s;animation-iteration-count:infinite}.files-list[_ngcontent-%COMP%]{margin-top:1.5rem}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]{padding:.5rem;justify-content:space-between;align-items:center;border:1px dashed #979797;margin-bottom:1rem;display:flex;flex-grow:1}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]{display:flex;margin-left:.5rem;cursor:pointer;align-self:flex-end}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:#353f4a;margin:0}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]{font-size:12px;font-weight:500;color:#a4a4a4;margin:0 0 .25rem}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{width:100%}@keyframes shake{0%{transform:translate(1px,1px) rotate(0deg)}10%{transform:translate(-1px,-2px) rotate(-1deg)}20%{transform:translate(-3px) rotate(1deg)}30%{transform:translate(3px,2px) rotate(0deg)}40%{transform:translate(1px,-1px) rotate(1deg)}50%{transform:translate(-1px,2px) rotate(-1deg)}60%{transform:translate(-3px,1px) rotate(0deg)}70%{transform:translate(3px,1px) rotate(-1deg)}80%{transform:translate(-1px,-1px) rotate(1deg)}90%{transform:translate(1px,2px) rotate(0deg)}to{transform:translate(1px,-2px) rotate(-1deg)}}"]}),e})();const c=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}handleFileEvent(e){return console.log(e),!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Bb({type:e,selectors:[["app-lazy-comp-a"]],decls:3,vars:0,consts:[[3,"fileEvent"]],template:function(e,t){1&e&&(r.Mb(0,"p"),r.nc(1,"lazy-comp-a works!"),r.Lb(),r.Mb(2,"app-file-dnd",0),r.Tb("fileEvent",function(e){return t.handleFileEvent(e)}),r.Lb())},directives:[p],styles:[""]}),e})()}];let f=(()=>{class e{}return e.\u0275mod=r.Fb({type:e}),e.\u0275inj=r.Eb({factory:function(t){return new(t||e)},imports:[[i.b,s,o.d.forChild(c)]]}),e})()}}]);