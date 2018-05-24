/*****
Topic: Liquid pressure – hydraulic press
Author: Sreekanth T M, NIT Agartala
*******/


//PIE LIBRARY Code
var PIEcontrolElem;var PIEtitleElem;var PIEsourceElem;var PIEdeveloperElem;var PIEdesignerElem;var PIEtoplineElem;var PIEscreenElem;var PIEspeedElem;var PIEresetButton;var PIEstartButton;var PIEstopButton;var PIEpauseButton;var PIEresumeButton;var PIEslowdownButton;var PIEspeedupButton;var PIEhelpButton;var PIEinfoButton;var PIEhelpModal;var PIEhelpContent;var PIEhelpSpan;var PIEinfoModal;var PIEinfoContent;var PIEinfoSpan;var PIEcanvasW;var PIEcanvasH;var PIEcanvasAspect;var PIEaoiTLX;var PIEaoiTLY;var PIEaoiBRX;var PIEaoiBRY;var PIEaoiW;var PIEaoiH;var PIEaoiAspect;var PIEdislayTLX;var PIEdislayTLY;var PIEdislayBRX;var PIEdislayBRY;var PIEdisplayW;var PIEdisplayH;var PIEdisplayAspect;var PIEscene;var PIEcamera;var PIEcameraAngle;var PIEcameraAspect;var PIEcameraZ;var PIEcameraTarget;var PIErenderer;var PIEambientLight;var PIEspotLight;var PIEraycaster;var PIEsceneElements=[];var PIEdragElements=[];var PIEselectedDrag;var PIEselectedHover;var PIEdragPlane;var PIEmouseP;var PIEdragOffset;var PIEdragIntersect;var PIElastUpdateTime;var PIEpauseOffset;var PIEcurrentTime;var PIEoffsetTime;var PIEanimationON;var PIEanimationPaused;var PIEanimationSpeed;var PIEminAnimationSpeed;var PIEmaxAnimationSpeed;var PIEinputGUI;var PIEinputObject;var PIEitInput;var PIEsInput;var PIEcbInput;var PIEcInput;var PIEitInputNames=[];var PIEitInputHandles=[];var PIEsInputNames=[];var PIEsInputHandles=[];var PIEcbInputNames=[];var PIEcbInputHandles=[];var PIEcInputNames=[];var PIEcInputHandles=[];var PIEdisplayGUI;var PIEdisplayObject;var PIEitDisplay;var PIEsDisplay;var PIEcbDisplay;var PIEcDisplay;var PIEitDisplayNames=[];var PIEitDisplayHandles=[];var PIEsDisplayNames=[];var PIEsDisplayHandles=[];var PIEcbDisplayNames=[];var PIEcbDisplayHandles=[];var PIEcDisplayNames=[];var PIEcDisplayHandles=[];var PIEshowInput;var PIEshowDisplay;function PIEdummy(){}function PIEcreateGUIVariables(){PIEinputObject.it00="";PIEinputObject.it01="";PIEinputObject.it02="";PIEinputObject.it03="";PIEinputObject.it04="";PIEinputObject.it05="";PIEinputObject.it06="";PIEinputObject.it07="";PIEinputObject.it08="";PIEinputObject.it09="";PIEinputObject.it10="";PIEinputObject.it11="";PIEinputObject.it12="";PIEinputObject.it13="";PIEinputObject.it14="";PIEinputObject.it15="";PIEinputObject.it16="";PIEinputObject.it17="";PIEinputObject.it18="";PIEinputObject.it19="";PIEinputObject.s00=0;PIEinputObject.s01=0;PIEinputObject.s02=0;PIEinputObject.s03=0;PIEinputObject.s04=0;PIEinputObject.s05=0;PIEinputObject.s06=0;PIEinputObject.s07=0;PIEinputObject.s08=0;PIEinputObject.s09=0;PIEinputObject.s10=0;PIEinputObject.s11=0;PIEinputObject.s12=0;PIEinputObject.s13=0;PIEinputObject.s14=0;PIEinputObject.s15=0;PIEinputObject.s16=0;PIEinputObject.s17=0;PIEinputObject.s18=0;PIEinputObject.s19=0;PIEinputObject.cb00=false;PIEinputObject.cb01=false;PIEinputObject.cb02=false;PIEinputObject.cb03=false;PIEinputObject.cb04=false;PIEinputObject.cb05=false;PIEinputObject.cb06=false;PIEinputObject.cb07=false;PIEinputObject.cb08=false;PIEinputObject.cb09=false;PIEinputObject.cb10=false;PIEinputObject.cb11=false;PIEinputObject.cb12=false;PIEinputObject.cb13=false;PIEinputObject.cb14=false;PIEinputObject.cb15=false;PIEinputObject.cb16=false;PIEinputObject.cb17=false;PIEinputObject.cb18=false;PIEinputObject.cb19=false;PIEinputObject.c00=PIEdummy;PIEinputObject.c01=PIEdummy;PIEinputObject.c02=PIEdummy;PIEinputObject.c03=PIEdummy;PIEinputObject.c04=PIEdummy;PIEinputObject.c05=PIEdummy;PIEinputObject.c06=PIEdummy;PIEinputObject.c07=PIEdummy;PIEinputObject.c08=PIEdummy;PIEinputObject.c09=PIEdummy;PIEinputObject.c10=PIEdummy;PIEinputObject.c11=PIEdummy;PIEinputObject.c12=PIEdummy;PIEinputObject.c13=PIEdummy;PIEinputObject.c14=PIEdummy;PIEinputObject.c15=PIEdummy;PIEinputObject.c16=PIEdummy;PIEinputObject.c17=PIEdummy;PIEinputObject.c18=PIEdummy;PIEinputObject.c19=PIEdummy;PIEdisplayObject.it00="";PIEdisplayObject.it01="";PIEdisplayObject.it02="";PIEdisplayObject.it03="";PIEdisplayObject.it04="";PIEdisplayObject.it05="";PIEdisplayObject.it06="";PIEdisplayObject.it07="";PIEdisplayObject.it08="";PIEdisplayObject.it09="";PIEdisplayObject.it10="";PIEdisplayObject.it11="";PIEdisplayObject.it12="";PIEdisplayObject.it13="";PIEdisplayObject.it14="";PIEdisplayObject.it15="";PIEdisplayObject.it16="";PIEdisplayObject.it17="";PIEdisplayObject.it18="";PIEdisplayObject.it19="";PIEdisplayObject.s00=0;PIEdisplayObject.s01=0;PIEdisplayObject.s02=0;PIEdisplayObject.s03=0;PIEdisplayObject.s04=0;PIEdisplayObject.s05=0;PIEdisplayObject.s06=0;PIEdisplayObject.s07=0;PIEdisplayObject.s08=0;PIEdisplayObject.s09=0;PIEdisplayObject.s10=0;PIEdisplayObject.s11=0;PIEdisplayObject.s12=0;PIEdisplayObject.s13=0;PIEdisplayObject.s14=0;PIEdisplayObject.s15=0;PIEdisplayObject.s16=0;PIEdisplayObject.s17=0;PIEdisplayObject.s18=0;PIEdisplayObject.s19=0;PIEdisplayObject.cb00=false;PIEdisplayObject.cb01=false;PIEdisplayObject.cb02=false;PIEdisplayObject.cb03=false;PIEdisplayObject.cb04=false;PIEdisplayObject.cb05=false;PIEdisplayObject.cb06=false;PIEdisplayObject.cb07=false;PIEdisplayObject.cb08=false;PIEdisplayObject.cb09=false;PIEdisplayObject.cb10=false;PIEdisplayObject.cb11=false;PIEdisplayObject.cb12=false;PIEdisplayObject.cb13=false;PIEdisplayObject.cb14=false;PIEdisplayObject.cb15=false;PIEdisplayObject.cb16=false;PIEdisplayObject.cb17=false;PIEdisplayObject.cb18=false;PIEdisplayObject.cb19=false;PIEdisplayObject.c00=PIEdummy;PIEdisplayObject.c01=PIEdummy;PIEdisplayObject.c02=PIEdummy;PIEdisplayObject.c03=PIEdummy;PIEdisplayObject.c04=PIEdummy;PIEdisplayObject.c05=PIEdummy;PIEdisplayObject.c06=PIEdummy;PIEdisplayObject.c07=PIEdummy;PIEdisplayObject.c08=PIEdummy;PIEdisplayObject.c09=PIEdummy;PIEdisplayObject.c10=PIEdummy;PIEdisplayObject.c11=PIEdummy;PIEdisplayObject.c12=PIEdummy;PIEdisplayObject.c13=PIEdummy;PIEdisplayObject.c14=PIEdummy;PIEdisplayObject.c15=PIEdummy;PIEdisplayObject.c16=PIEdummy;PIEdisplayObject.c17=PIEdummy;PIEdisplayObject.c18=PIEdummy;PIEdisplayObject.c19=PIEdummy}function PIEshowDisplayPanel(){PIEinputGUI.domElement.style.display="none";PIEshowInput=false;PIEdisplayGUI.domElement.style.display="inline";PIEshowDisplay=true}function PIEshowInputPanel(){PIEdisplayGUI.domElement.style.display="none";PIEshowDisplay=false;PIEinputGUI.domElement.style.display="inline";PIEshowInput=true}function PIEsetupGUI(){PIEinputObject=new Object();PIEitInput=0;PIEsInput=0;PIEcbInput=0;PIEcInput=0;PIEdisplayObject=new Object();PIEitDisplay=0;PIEsDisplay=0;PIEcbDisplay=0;PIEcDisplay=0;PIEcreateGUIVariables();PIEinputGUI=new dat.gui.GUI();PIEdisplayGUI=new dat.gui.GUI();PIEshowInputPanel()}function loadExperiment(){var a;var b;if(!Detector.webgl){Detector.addGetWebGLMessage()}else{a="font-family: Monospace; background-color: #000; color: #000; margin: 0px; overflow: hidden;";b="font-family: Monospace; margin: 0px; overflow: hidden;";divStyle="position: fixed; left: 0px; top: 0px;";document.body.addEventListener("dragenter",PIEtableDragEnter,false);document.body.addEventListener("dragover",PIEtableDragOver,false);document.body.addEventListener("drop",PIEtableDrop,false);document.body.style=a;PIEscreenElem=document.createElement("div");PIEscreenElem.style.margin="0px";PIEscreenElem.style.padding="0px";document.body.appendChild(PIEscreenElem);PIEtoplineElem=document.createElement("div");PIEtoplineElem.style.backgroundColor="#000000";PIEtoplineElem.style.color="#fff";PIEtoplineElem.style.width="100%";PIEtoplineElem.style.position="absolute";PIEtoplineElem.style.left="0";PIEtoplineElem.style.top="0";document.body.appendChild(PIEtoplineElem);PIEsourceElem=document.createElement("span");PIEsourceElem.style=b;PIEtoplineElem.appendChild(PIEsourceElem);PIEdesignerElem=document.createElement("span");PIEdesignerElem.style=b;PIEtoplineElem.appendChild(PIEdesignerElem);PIEtitleElem=document.createElement("span");PIEtitleElem.style=b;PIEtoplineElem.appendChild(PIEtitleElem);PIEdeveloperElem=document.createElement("span");PIEdeveloperElem.style=b;PIEtoplineElem.appendChild(PIEdeveloperElem);PIEsourceElem.innerHTML='<a href="http://www.ekshiksha.org.in" target="_blank" style="color:#FF5454;"><b><u>ekshiksha</u></b></a>';PIEcanvasW=window.innerWidth;PIEcanvasH=window.innerHeight;PIEcanvasAspect=PIEcanvasW/PIEcanvasH;PIEanimationON=false;PIEanimationPaused=false;PIEanimationSpeed=1;PIEminAnimationSpeed=0.125;PIEmaxAnimationSpeed=4;PIEaddSystemButtons();PIEaddModalWindows();PIEscene=new THREE.Scene();PIEcameraAngle=30;PIEcamera=new THREE.PerspectiveCamera(PIEcameraAngle,PIEcanvasAspect,0.1,1000);PIEcameraTarget=new THREE.Vector3();PIErenderer=new THREE.WebGLRenderer({antialias:true});PIErenderer.setPixelRatio(window.devicePixelRatio);PIErenderer.setSize(PIEcanvasW,PIEcanvasH);PIErenderer.gammaInput=true;PIErenderer.gammaOutput=true;PIErenderer.shadowMap.enabled=true;PIEscreenElem.appendChild(PIErenderer.domElement);PIEsetupGUI();loadExperimentElements();lightX=PIEaoiTLX+PIEaoiW*0.25;lightY=PIEaoiBRY+PIEaoiH*0.75;lightZ=PIEcamera.position.z;PIEambientLight=new THREE.AmbientLight(16777215,0.3);PIEambientLight.position.set(lightX,lightY,lightZ);PIEscene.add(PIEambientLight);lightX=PIEaoiTLX+PIEaoiW*0.75;PIEspotLight=new THREE.PointLight(16777215);PIEspotLight.position.set(lightX,lightY,lightZ);PIEspotLight.castShadow=true;PIEscene.add(PIEspotLight);PIEraycaster=new THREE.Raycaster();PIEdragPlane=new THREE.Plane();PIEmouseP=new THREE.Vector2();PIEdragOffset=new THREE.Vector3();PIEdragIntersect=new THREE.Vector3();PIEselectedDrag=null;PIEselectedHover=null;window.addEventListener("resize",PIEresize,false);PIErenderer.domElement.addEventListener("mousemove",PIEmouseMove,false);PIErenderer.domElement.addEventListener("mousedown",PIEmouseDown,false);PIErenderer.domElement.addEventListener("mouseup",PIEmouseUp,false);PIErenderer.domElement.addEventListener("click",PIEmouseClick,false);updateExperimentElements(0,0);PIErenderer.render(PIEscene,PIEcamera)}}function PIEaddSystemButtons(){PIEresetButton=PIEaddButton("reset");PIEresetButton.style="background: none; border: none; box-sizing:border-box;";PIEresetButton.innerHTML='<img src="ButtonRound.png" alt="reset" style="height: inherit; width: 60%;">';PIEresetButton.style.display="inline";PIEresetButton.addEventListener("click",PIEresetExperiment);PIEstartButton=PIEaddButton("start");PIEstartButton.style.display="inline";PIEstartButton.addEventListener("click",PIEstartAnimation);PIEstopButton=PIEaddButton("stop");PIEstopButton.style.display="none";PIEstopButton.addEventListener("click",PIEstopAnimation);PIEpauseButton=PIEaddButton("pause");PIEpauseButton.style="background: none; border: none; box-sizing:border-box;";PIEpauseButton.innerHTML='<img src="ButtonPause.png" alt="pause" style="height: inherit; width: 60%;">';PIEpauseButton.style.display="inline";PIEpauseButton.style.visibility="hidden";PIEpauseButton.addEventListener("click",PIEpauseAnimation);PIEresumeButton=PIEaddButton("resume");PIEresumeButton.style="background: none; border: none; box-sizing:border-box;";PIEresumeButton.innerHTML='<img src="ButtonPlay.png" alt="resume" style="height: inherit; width: 60%;">';PIEresumeButton.style.display="none";PIEresumeButton.style.visibility="hidden";PIEresumeButton.addEventListener("click",PIEresumeAnimation);PIEslowdownButton=PIEaddButton("<<");PIEslowdownButton.addEventListener("click",PIEslowdownAnimation);PIEspeedElem=document.createElement("span");PIEspeedElem.innerHTML=PIEanimationSpeed;PIEtoplineElem.appendChild(PIEspeedElem);PIEspeedupButton=PIEaddButton(">>");PIEspeedupButton.addEventListener("click",PIEspeedupAnimation);PIEinfoButton=PIEaddButton("info");PIEinfoButton.style="background: none; border: none; box-sizing:border-box;";PIEinfoButton.innerHTML='<img src="ButtonInfo.png" alt="info" style="height: inherit; width: 60%;">';PIEinfoButton.addEventListener("click",PIEshowInfo);PIEhelpButton=PIEaddButton("help");PIEhelpButton.style="background: none; border: none; box-sizing:border-box;";PIEhelpButton.innerHTML='<img src="ButtonHelp.png" alt="help" style="height: inherit; width: 60%;">';PIEhelpButton.addEventListener("click",PIEshowHelp)}function PIEaddModalWindows(){var a;var b;a="display: none; position: fixed; z-index: 1; padding-top: 100px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); color:#000;";ImodalContentStyle="background-color:rgb(236,236,236); background-color:rgba(236,236,236,0.95); margin: auto auto 200px; padding: 20px; border: 10px solid #008000; width: 80%;";HmodalContentStyle="background-color:rgb(236,236,236); background-color:rgba(236,236,236,0.95); margin: auto auto 200px; padding: 20px; border: 10px solid #F0F000; width: 80%;";PIEhelpModal=document.createElement("div");PIEhelpModal.style=a;PIEhelpModal.onclick=function(){PIEhelpModal.style.display="none"};PIEhelpContent=document.createElement("div");PIEhelpContent.style=HmodalContentStyle;PIEhelpSpan=document.createElement("span");PIEhelpSpan.className="close";PIEhelpSpan.style="color: #000000; float: right; font-size: 28px; font-weight: bold;";PIEhelpSpan.innerHTML="&times;";PIEhelpSpan.onclick=function(){PIEhelpModal.style.display="none"};PIEhelpSpan.onmouseover=function(){PIEhelpSpan.style="color: #000; text-decoration: none; cursor: pointer;"};PIEhelpSpan.onmouseout=function(){PIEhelpSpan.style="color: #000000; cursor: auto;"};PIEhelpContent.appendChild(PIEhelpSpan);PIEhelpModal.appendChild(PIEhelpContent);PIEscreenElem.appendChild(PIEhelpModal);PIEinfoModal=document.createElement("div");PIEinfoModal.style=a;PIEinfoModal.onclick=function(){PIEinfoModal.style.display="none"};PIEinfoContent=document.createElement("div");PIEinfoContent.style=ImodalContentStyle;PIEinfoSpan=document.createElement("span");PIEinfoSpan.className="close";PIEinfoSpan.style="color: #008000; float: right; font-size: 28px; font-weight: bold;";PIEinfoSpan.innerHTML="&times;";PIEinfoSpan.onclick=function(){PIEinfoModal.style.display="none"};PIEinfoSpan.onmouseover=function(){PIEinfoSpan.style="color: #000; text-decoration: none; cursor: pointer;"};PIEinfoSpan.onmouseout=function(){PIEinfoSpan.style="color: #008000; cursor: auto;"};PIEinfoContent.appendChild(PIEinfoSpan);PIEinfoModal.appendChild(PIEinfoContent);PIEscreenElem.appendChild(PIEinfoModal)}function PIEshowHelp(){PIEhelpModal.style.display="block"}function PIEupdateHelp(b){var a;PIEhelpContent.innerHTML="";PIEhelpContent.appendChild(PIEhelpSpan);a=PIEhelpContent.innerHTML;PIEhelpContent.innerHTML=a+b}function PIEappendHelp(b){var a;a=PIEhelpContent.innerHTML;PIEhelpContent.innerHTML=a+b}function PIEshowInfo(){PIEinfoModal.style.display="block"}function PIEupdateInfo(a){var b;PIEinfoContent.innerHTML="";PIEinfoContent.appendChild(PIEinfoSpan);b=PIEinfoContent.innerHTML;PIEinfoContent.innerHTML=b+a}function PIEappendInfo(a){var b;b=PIEinfoContent.innerHTML;PIEinfoContent.innerHTML=b+a}function PIEresize(){var b;var a;b=window.innerWidth;a=window.innerHeight;PIEcanvasW=b;PIEcanvasH=a;PIEcanvasAspect=PIEcanvasW/PIEcanvasH;PIErenderer.setSize(PIEcanvasW,PIEcanvasH);PIEadjustDisplayScene();PIErender()}function PIEsetExperimentTitle(a){PIEtitleElem.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><u>"+a+"</u></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}function PIEsetDeveloperName(a){PIEdeveloperElem.innerHTML="Created by : "+a}function PIEhideControlElement(){}function PIEshowControlElement(){}function PIEaddDualText(a,c,b){PIEaddInputText(a,c,b);PIEaddDisplayText(a,c)}function PIEaddDisplayText(b,c){var a;switch(PIEitDisplay){case 0:PIEdisplayObject.it00=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it00").name(b);break;case 1:PIEdisplayObject.it01=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it01").name(b);break;case 2:PIEdisplayObject.it02=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it02").name(b);break;case 3:PIEdisplayObject.it03=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it03").name(b);break;case 4:PIEdisplayObject.it04=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it04").name(b);break;case 5:PIEdisplayObject.it05=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it05").name(b);break;case 6:PIEdisplayObject.it06=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it06").name(b);break;case 7:PIEdisplayObject.it07=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it07").name(b);break;case 8:PIEdisplayObject.it08=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it08").name(b);break;case 9:PIEdisplayObject.it09=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it09").name(b);break;case 10:PIEdisplayObject.it10=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it10").name(b);break;case 11:PIEdisplayObject.it11=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it11").name(b);break;case 12:PIEdisplayObject.it12=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it12").name(b);break;case 13:PIEdisplayObject.it13=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it13").name(b);break;case 14:PIEdisplayObject.it14=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it14").name(b);break;case 15:PIEdisplayObject.it15=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it15").name(b);break;case 16:PIEdisplayObject.it16=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it16").name(b);break;case 17:PIEdisplayObject.it17=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it17").name(b);break;case 18:PIEdisplayObject.it18=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it18").name(b);break;case 19:PIEdisplayObject.it19=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it19").name(b);break;default:return;break}PIEitDisplayHandles.push(a);PIEitDisplayNames.push(b);PIEitDisplay++}function PIEaddInputText(b,d,c){var a;switch(PIEitInput){case 0:PIEinputObject.it00=d;a=PIEinputGUI.add(PIEinputObject,"it00").name(b);break;case 1:PIEinputObject.it01=d;a=PIEinputGUI.add(PIEinputObject,"it01").name(b);break;case 2:PIEinputObject.it02=d;a=PIEinputGUI.add(PIEinputObject,"it02").name(b);break;case 3:PIEinputObject.it03=d;a=PIEinputGUI.add(PIEinputObject,"it03").name(b);break;case 4:PIEinputObject.it04=d;a=PIEinputGUI.add(PIEinputObject,"it04").name(b);break;case 5:PIEinputObject.it05=d;a=PIEinputGUI.add(PIEinputObject,"it05").name(b);break;case 6:PIEinputObject.it06=d;a=PIEinputGUI.add(PIEinputObject,"it06").name(b);break;case 7:PIEinputObject.it07=d;a=PIEinputGUI.add(PIEinputObject,"it07").name(b);break;case 8:PIEinputObject.it08=d;a=PIEinputGUI.add(PIEinputObject,"it08").name(b);break;case 9:PIEinputObject.it09=d;a=PIEinputGUI.add(PIEinputObject,"it09").name(b);break;case 10:PIEinputObject.it10=d;a=PIEinputGUI.add(PIEinputObject,"it10").name(b);break;case 11:PIEinputObject.it11=d;a=PIEinputGUI.add(PIEinputObject,"it11").name(b);break;case 12:PIEinputObject.it12=d;a=PIEinputGUI.add(PIEinputObject,"it12").name(b);break;case 13:PIEinputObject.it13=d;a=PIEinputGUI.add(PIEinputObject,"it13").name(b);break;case 14:PIEinputObject.it14=d;a=PIEinputGUI.add(PIEinputObject,"it14").name(b);break;case 15:PIEinputObject.it15=d;a=PIEinputGUI.add(PIEinputObject,"it15").name(b);break;case 16:PIEinputObject.it16=d;a=PIEinputGUI.add(PIEinputObject,"it16").name(b);break;case 17:PIEinputObject.it17=d;a=PIEinputGUI.add(PIEinputObject,"it17").name(b);break;case 18:PIEinputObject.it18=d;a=PIEinputGUI.add(PIEinputObject,"it18").name(b);break;case 19:PIEinputObject.it19=d;a=PIEinputGUI.add(PIEinputObject,"it19").name(b);break;default:return;break}a.onFinishChange(c);PIEitInputHandles.push(a);PIEitInputNames.push(b);PIEitInput++}function PIEchangeDisplayText(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEitDisplay);c++){if(PIEitDisplayNames[c]==b){a=PIEitDisplayHandles[c]}}if(a!=null){switch(c-1){case 0:PIEdisplayObject.it00=d;break;case 1:PIEdisplayObject.it01=d;break;case 2:PIEdisplayObject.it02=d;break;case 3:PIEdisplayObject.it03=d;break;case 4:PIEdisplayObject.it04=d;break;case 5:PIEdisplayObject.it05=d;break;case 6:PIEdisplayObject.it06=d;break;case 7:PIEdisplayObject.it07=d;break;case 8:PIEdisplayObject.it08=d;break;case 9:PIEdisplayObject.it09=d;break;case 10:PIEdisplayObject.it10=d;break;case 11:PIEdisplayObject.it11=d;break;case 12:PIEdisplayObject.it12=d;break;case 13:PIEdisplayObject.it13=d;break;case 14:PIEdisplayObject.it14=d;break;case 15:PIEdisplayObject.it15=d;break;case 16:PIEdisplayObject.it16=d;break;case 17:PIEdisplayObject.it17=d;break;case 18:PIEdisplayObject.it18=d;break;case 19:PIEdisplayObject.it19=d;break;default:break}a.updateDisplay()}}function PIEchangeInputText(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEitInput);c++){if(PIEitInputNames[c]==b){a=PIEitInputHandles[c]}}if(a!=null){switch(c-1){case 0:PIEinputObject.it00=d;break;case 1:PIEinputObject.it01=d;break;case 2:PIEinputObject.it02=d;break;case 3:PIEinputObject.it03=d;break;case 4:PIEinputObject.it04=d;break;case 5:PIEinputObject.it05=d;break;case 6:PIEinputObject.it06=d;break;case 7:PIEinputObject.it07=d;break;case 8:PIEinputObject.it08=d;break;case 9:PIEinputObject.it09=d;break;case 10:PIEinputObject.it10=d;break;case 11:PIEinputObject.it11=d;break;case 12:PIEinputObject.it12=d;break;case 13:PIEinputObject.it13=d;break;case 14:PIEinputObject.it14=d;break;case 15:PIEinputObject.it15=d;break;case 16:PIEinputObject.it16=d;break;case 17:PIEinputObject.it17=d;break;case 18:PIEinputObject.it18=d;break;case 19:PIEinputObject.it19=d;break;default:break}a.updateDisplay()}}function PIEgetDisplayText(a){var d;var b;var c;d=false;for(b=0;(d==false)&&(b<PIEitDisplay);b++){if(PIEitDisplayNames[b]==a){d=true}}c="";if(d==true){switch(b-1){case 0:c=PIEdisplayObject.it00;break;case 1:c=PIEdisplayObject.it01;break;case 2:c=PIEdisplayObject.it02;break;case 3:c=PIEdisplayObject.it03;break;case 4:c=PIEdisplayObject.it04;break;case 5:c=PIEdisplayObject.it05;break;case 6:c=PIEdisplayObject.it06;break;case 7:c=PIEdisplayObject.it07;break;case 8:c=PIEdisplayObject.it08;break;case 9:c=PIEdisplayObject.it09;break;case 10:c=PIEdisplayObject.it10;break;case 11:c=PIEdisplayObject.it11;break;case 12:c=PIEdisplayObject.it12;break;case 13:c=PIEdisplayObject.it13;break;case 14:c=PIEdisplayObject.it14;break;case 15:c=PIEdisplayObject.it15;break;case 16:c=PIEdisplayObject.it16;break;case 17:c=PIEdisplayObject.it17;break;case 18:c=PIEdisplayObject.it18;break;case 19:c=PIEdisplayObject.it19;break;default:break}}return(c)}function PIEgetInputText(a){var d;var b;var c;d=false;for(b=0;(d==false)&&(b<PIEitInput);b++){if(PIEitInputNames[b]==a){d=true}}c="";if(d==true){switch(b-1){case 0:c=PIEinputObject.it00;break;case 1:c=PIEinputObject.it01;break;case 2:c=PIEinputObject.it02;break;case 3:c=PIEinputObject.it03;break;case 4:c=PIEinputObject.it04;break;case 5:c=PIEinputObject.it05;break;case 6:c=PIEinputObject.it06;break;case 7:c=PIEinputObject.it07;break;case 8:c=PIEinputObject.it08;break;case 9:c=PIEinputObject.it09;break;case 10:c=PIEinputObject.it10;break;case 11:c=PIEinputObject.it11;break;case 12:c=PIEinputObject.it12;break;case 13:c=PIEinputObject.it13;break;case 14:c=PIEinputObject.it14;break;case 15:c=PIEinputObject.it15;break;case 16:c=PIEinputObject.it16;break;case 17:c=PIEinputObject.it17;break;case 18:c=PIEinputObject.it18;break;case 19:c=PIEinputObject.it19;break;default:break}}return(c)}function PIEaddDualText(b,f,d,c,a,e){PIEaddInputSlider(b,f,d,c,a,e);PIEaddDisplaySlider(b,f,c,a,e)}function PIEaddDisplaySlider(c,f,d,b,e){var a;switch(PIEsDisplay){case 0:PIEdisplayObject.s00=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s00").min(d).max(b).step(e).name(c);break;case 1:PIEdisplayObject.s01=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s01").min(d).max(b).step(e).name(c);break;case 2:PIEdisplayObject.s02=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s02").min(d).max(b).step(e).name(c);break;case 3:PIEdisplayObject.s03=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s03").min(d).max(b).step(e).name(c);break;case 4:PIEdisplayObject.s04=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s04").min(d).max(b).step(e).name(c);break;case 5:PIEdisplayObject.s05=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s05").min(d).max(b).step(e).name(c);break;case 6:PIEdisplayObject.s06=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s06").min(d).max(b).step(e).name(c);break;case 7:PIEdisplayObject.s07=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s07").min(d).max(b).step(e).name(c);break;case 8:PIEdisplayObject.s08=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s08").min(d).max(b).step(e).name(c);break;case 9:PIEdisplayObject.s09=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s09").min(d).max(b).step(e).name(c);break;case 10:PIEdisplayObject.s10=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s10").min(d).max(b).step(e).name(c);break;case 11:PIEdisplayObject.s11=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s11").min(d).max(b).step(e).name(c);break;case 12:PIEdisplayObject.s12=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s12").min(d).max(b).step(e).name(c);break;case 13:PIEdisplayObject.s13=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s13").min(d).max(b).step(e).name(c);break;case 14:PIEdisplayObject.s14=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s14").min(d).max(b).step(e).name(c);break;case 15:PIEdisplayObject.s15=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s15").min(d).max(b).step(e).name(c);break;case 16:PIEdisplayObject.s16=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s16").min(d).max(b).step(e).name(c);break;case 17:PIEdisplayObject.s17=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s17").min(d).max(b).step(e).name(c);break;case 18:PIEdisplayObject.s18=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s18").min(d).max(b).step(e).name(c);break;case 19:PIEdisplayObject.s19=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s19").min(d).max(b).step(e).name(c);break;default:return;break}PIEsDisplayHandles.push(a);PIEsDisplayNames.push(c);PIEsDisplay++}function PIEaddInputSlider(c,g,e,d,b,f){var a;switch(PIEsInput){case 0:PIEinputObject.s00=g;a=PIEinputGUI.add(PIEinputObject,"s00").min(d).max(b).step(f).name(c);break;case 1:PIEinputObject.s01=g;a=PIEinputGUI.add(PIEinputObject,"s01").min(d).max(b).step(f).name(c);break;case 2:PIEinputObject.s02=g;a=PIEinputGUI.add(PIEinputObject,"s02").min(d).max(b).step(f).name(c);break;case 3:PIEinputObject.s03=g;a=PIEinputGUI.add(PIEinputObject,"s03").min(d).max(b).step(f).name(c);break;case 4:PIEinputObject.s04=g;a=PIEinputGUI.add(PIEinputObject,"s04").min(d).max(b).step(f).name(c);break;case 5:PIEinputObject.s05=g;a=PIEinputGUI.add(PIEinputObject,"s05").min(d).max(b).step(f).name(c);break;case 6:PIEinputObject.s06=g;a=PIEinputGUI.add(PIEinputObject,"s06").min(d).max(b).step(f).name(c);break;case 7:PIEinputObject.s07=g;a=PIEinputGUI.add(PIEinputObject,"s07").min(d).max(b).step(f).name(c);break;case 8:PIEinputObject.s08=g;a=PIEinputGUI.add(PIEinputObject,"s08").min(d).max(b).step(f).name(c);break;case 9:PIEinputObject.s09=g;a=PIEinputGUI.add(PIEinputObject,"s09").min(d).max(b).step(f).name(c);break;case 10:PIEinputObject.s10=g;a=PIEinputGUI.add(PIEinputObject,"s10").min(d).max(b).step(f).name(c);break;case 11:PIEinputObject.s11=g;a=PIEinputGUI.add(PIEinputObject,"s11").min(d).max(b).step(f).name(c);break;case 12:PIEinputObject.s12=g;a=PIEinputGUI.add(PIEinputObject,"s12").min(d).max(b).step(f).name(c);break;case 13:PIEinputObject.s13=g;a=PIEinputGUI.add(PIEinputObject,"s13").min(d).max(b).step(f).name(c);break;case 14:PIEinputObject.s14=g;a=PIEinputGUI.add(PIEinputObject,"s14").min(d).max(b).step(f).name(c);break;case 15:PIEinputObject.s15=g;a=PIEinputGUI.add(PIEinputObject,"s15").min(d).max(b).step(f).name(c);break;case 16:PIEinputObject.s16=g;a=PIEinputGUI.add(PIEinputObject,"s16").min(d).max(b).step(f).name(c);break;case 17:PIEinputObject.s17=g;a=PIEinputGUI.add(PIEinputObject,"s17").min(d).max(b).step(f).name(c);break;case 18:PIEinputObject.s18=g;a=PIEinputGUI.add(PIEinputObject,"s18").min(d).max(b).step(f).name(c);break;case 19:PIEinputObject.s19=g;a=PIEinputGUI.add(PIEinputObject,"s19").min(d).max(b).step(f).name(c);break;default:return;break}a.onFinishChange(e);PIEsInputHandles.push(a);PIEsInputNames.push(c);PIEsInput++}function PIEchangeDisplaySlider(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEsDisplay);c++){if(PIEsDisplayNames[c]==b){a=PIEsDisplayHandles[c]}}if(a!=null){switch(c-1){case 0:PIEdisplayObject.s00=d;break;case 1:PIEdisplayObject.s01=d;break;case 2:PIEdisplayObject.s02=d;break;case 3:PIEdisplayObject.s03=d;break;case 4:PIEdisplayObject.s04=d;break;case 5:PIEdisplayObject.s05=d;break;case 6:PIEdisplayObject.s06=d;break;case 7:PIEdisplayObject.s07=d;break;case 8:PIEdisplayObject.s08=d;break;case 9:PIEdisplayObject.s09=d;break;case 10:PIEdisplayObject.s10=d;break;case 11:PIEdisplayObject.s11=d;break;case 12:PIEdisplayObject.s12=d;break;case 13:PIEdisplayObject.s13=d;break;case 14:PIEdisplayObject.s14=d;break;case 15:PIEdisplayObject.s15=d;break;case 16:PIEdisplayObject.s16=d;break;case 17:PIEdisplayObject.s17=d;break;case 18:PIEdisplayObject.s18=d;break;case 19:PIEdisplayObject.s19=d;break;default:break}a.updateDisplay()}}function PIEchangeInputSlider(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEsInput);c++){if(PIEsInputNames[c]==b){a=PIEsInputHandles[c]}}if(a!=null){switch(c-1){case 0:PIEinputObject.s00=d;break;case 1:PIEinputObject.s01=d;break;case 2:PIEinputObject.s02=d;break;case 3:PIEinputObject.s03=d;break;case 4:PIEinputObject.s04=d;break;case 5:PIEinputObject.s05=d;break;case 6:PIEinputObject.s06=d;break;case 7:PIEinputObject.s07=d;break;case 8:PIEinputObject.s08=d;break;case 9:PIEinputObject.s09=d;break;case 10:PIEinputObject.s10=d;break;case 11:PIEinputObject.s11=d;break;case 12:PIEinputObject.s12=d;break;case 13:PIEinputObject.s13=d;break;case 14:PIEinputObject.s14=d;break;case 15:PIEinputObject.s15=d;break;case 16:PIEinputObject.s16=d;break;case 17:PIEinputObject.s17=d;break;case 18:PIEinputObject.s18=d;break;case 19:PIEinputObject.s19=d;break;default:break}a.updateDisplay()}}function PIEgetDisplaySlider(a){var d;var b;var c;d=false;for(b=0;(d==false)&&(b<PIEsDisplay);b++){if(PIEsDisplayNames[b]==a){d=true}}c=0;if(d==true){switch(b-1){case 0:c=PIEdisplayObject.s00;break;case 1:c=PIEdisplayObject.s01;break;case 2:c=PIEdisplayObject.s02;break;case 3:c=PIEdisplayObject.s03;break;case 4:c=PIEdisplayObject.s04;break;case 5:c=PIEdisplayObject.s05;break;case 6:c=PIEdisplayObject.s06;break;case 7:c=PIEdisplayObject.s07;break;case 8:c=PIEdisplayObject.s08;break;case 9:c=PIEdisplayObject.s09;break;case 10:c=PIEdisplayObject.s10;break;case 11:c=PIEdisplayObject.s11;break;case 12:c=PIEdisplayObject.s12;break;case 13:c=PIEdisplayObject.s13;break;case 14:c=PIEdisplayObject.s14;break;case 15:c=PIEdisplayObject.s15;break;case 16:c=PIEdisplayObject.s16;break;case 17:c=PIEdisplayObject.s17;break;case 18:c=PIEdisplayObject.s18;break;case 19:c=PIEdisplayObject.s19;break;default:break}}return(c)}function PIEgetInputSlider(a){var d;var b;var c;d=false;for(b=0;(d==false)&&(b<PIEsInput);b++){if(PIEsInputNames[b]==a){d=true}}c=0;if(d==true){switch(b-1){case 0:c=PIEinputObject.s00;break;case 1:c=PIEinputObject.s01;break;case 2:c=PIEinputObject.s02;break;case 3:c=PIEinputObject.s03;break;case 4:c=PIEinputObject.s04;break;case 5:c=PIEinputObject.s05;break;case 6:c=PIEinputObject.s06;break;case 7:c=PIEinputObject.s07;break;case 8:c=PIEinputObject.s08;break;case 9:c=PIEinputObject.s09;break;case 10:c=PIEinputObject.s10;break;case 11:c=PIEinputObject.s11;break;case 12:c=PIEinputObject.s12;break;case 13:c=PIEinputObject.s13;break;case 14:c=PIEinputObject.s14;break;case 15:c=PIEinputObject.s15;break;case 16:c=PIEinputObject.s16;break;case 17:c=PIEinputObject.s17;break;case 18:c=PIEinputObject.s18;break;case 19:c=PIEinputObject.s19;break;default:break}}return(c)}function PIEaddDualCheckbox(a,c,b){PIEaddInputCheckbox(a,c,b);PIEaddDisplayCheckbox(a,c)}function PIEaddDisplayCheckbox(b,d,c){var a;switch(PIEcbDisplay){case 0:PIEdisplayObject.cb00=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb00").name(b);break;case 1:PIEdisplayObject.cb01=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb01").name(b);break;case 2:PIEdisplayObject.cb02=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb02").name(b);break;case 3:PIEdisplayObject.cb03=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb03").name(b);break;case 4:PIEdisplayObject.cb04=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb04").name(b);break;case 5:PIEdisplayObject.cb05=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb05").name(b);break;case 6:PIEdisplayObject.cb06=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb06").name(b);break;case 7:PIEdisplayObject.cb07=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb07").name(b);break;case 8:PIEdisplayObject.cb08=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb08").name(b);break;case 9:PIEdisplayObject.cb09=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb09").name(b);break;case 10:PIEdisplayObject.cb10=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb10").name(b);break;case 11:PIEdisplayObject.cb11=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb11").name(b);break;case 12:PIEdisplayObject.cb12=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb12").name(b);break;case 13:PIEdisplayObject.cb13=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb13").name(b);break;case 14:PIEdisplayObject.cb14=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb14").name(b);break;case 15:PIEdisplayObject.cb15=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb15").name(b);break;case 16:PIEdisplayObject.cb16=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb16").name(b);break;case 17:PIEdisplayObject.cb17=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb17").name(b);break;case 18:PIEdisplayObject.cb18=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb18").name(b);break;case 19:PIEdisplayObject.cb19=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb19").name(b);break;default:return;break}a.onChange(c);PIEcbDisplayHandles.push(a);PIEcbDisplayNames.push(b);PIEcbDisplay++}function PIEaddInputCheckbox(b,d,c){var a;switch(PIEcbInput){case 0:PIEinputObject.cb00=d;a=PIEinputGUI.add(PIEinputObject,"cb00").name(b);break;case 1:PIEinputObject.cb01=d;a=PIEinputGUI.add(PIEinputObject,"cb01").name(b);break;case 2:PIEinputObject.cb02=d;a=PIEinputGUI.add(PIEinputObject,"cb02").name(b);break;case 3:PIEinputObject.cb03=d;a=PIEinputGUI.add(PIEinputObject,"cb03").name(b);break;case 4:PIEinputObject.cb04=d;a=PIEinputGUI.add(PIEinputObject,"cb04").name(b);break;case 5:PIEinputObject.cb05=d;a=PIEinputGUI.add(PIEinputObject,"cb05").name(b);break;case 6:PIEinputObject.cb06=d;a=PIEinputGUI.add(PIEinputObject,"cb06").name(b);break;case 7:PIEinputObject.cb07=d;a=PIEinputGUI.add(PIEinputObject,"cb07").name(b);break;case 8:PIEinputObject.cb08=d;a=PIEinputGUI.add(PIEinputObject,"cb08").name(b);break;case 9:PIEinputObject.cb09=d;a=PIEinputGUI.add(PIEinputObject,"cb09").name(b);break;case 10:PIEinputObject.cb10=d;a=PIEinputGUI.add(PIEinputObject,"cb10").name(b);break;case 11:PIEinputObject.cb11=d;a=PIEinputGUI.add(PIEinputObject,"cb11").name(b);break;case 12:PIEinputObject.cb12=d;a=PIEinputGUI.add(PIEinputObject,"cb12").name(b);break;case 13:PIEinputObject.cb13=d;a=PIEinputGUI.add(PIEinputObject,"cb13").name(b);break;case 14:PIEinputObject.cb14=d;a=PIEinputGUI.add(PIEinputObject,"cb14").name(b);break;case 15:PIEinputObject.cb15=d;a=PIEinputGUI.add(PIEinputObject,"cb15").name(b);break;case 16:PIEinputObject.cb16=d;a=PIEinputGUI.add(PIEinputObject,"cb16").name(b);break;case 17:PIEinputObject.cb17=d;a=PIEinputGUI.add(PIEinputObject,"cb17").name(b);break;case 18:PIEinputObject.cb18=d;a=PIEinputGUI.add(PIEinputObject,"cb18").name(b);break;case 19:PIEinputObject.cb19=d;a=PIEinputGUI.add(PIEinputObject,"cb19").name(b);break;default:return;break}a.onChange(c);PIEcbInputHandles.push(a);PIEcbInputNames.push(b);PIEcbInput++}function PIEchangeDisplayCheckbox(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEcbDisplay);c++){if(PIEcbDisplayNames[c]==b){a=PIEcbDisplayHandles[c]}}if(a!=null){switch(c-1){case 0:PIEdisplayObject.cb00=d;break;case 1:PIEdisplayObject.cb01=d;break;case 2:PIEdisplayObject.cb02=d;break;case 3:PIEdisplayObject.cb03=d;break;case 4:PIEdisplayObject.cb04=d;break;case 5:PIEdisplayObject.cb05=d;break;case 6:PIEdisplayObject.cb06=d;break;case 7:PIEdisplayObject.cb07=d;break;case 8:PIEdisplayObject.cb08=d;break;case 9:PIEdisplayObject.cb09=d;break;case 10:PIEdisplayObject.cb10=d;break;case 11:PIEdisplayObject.cb11=d;break;case 12:PIEdisplayObject.cb12=d;break;case 13:PIEdisplayObject.cb13=d;break;case 14:PIEdisplayObject.cb14=d;break;case 15:PIEdisplayObject.cb15=d;break;case 16:PIEdisplayObject.cb16=d;break;case 17:PIEdisplayObject.cb17=d;break;case 18:PIEdisplayObject.cb18=d;break;case 19:PIEdisplayObject.cb19=d;break;default:break}a.updateDisplay()}}function PIEchangeInputCheckbox(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEcbInput);c++){if(PIEcbInputNames[c]==b){a=PIEcbInputHandles[c]}}if(a!=null){switch(c-1){case 0:PIEinputObject.cb00=d;break;case 1:PIEinputObject.cb01=d;break;case 2:PIEinputObject.cb02=d;break;case 3:PIEinputObject.cb03=d;break;case 4:PIEinputObject.cb04=d;break;case 5:PIEinputObject.cb05=d;break;case 6:PIEinputObject.cb06=d;break;case 7:PIEinputObject.cb07=d;break;case 8:PIEinputObject.cb08=d;break;case 9:PIEinputObject.cb09=d;break;case 10:PIEinputObject.cb10=d;break;case 11:PIEinputObject.cb11=d;break;case 12:PIEinputObject.cb12=d;break;case 13:PIEinputObject.cb13=d;break;case 14:PIEinputObject.cb14=d;break;case 15:PIEinputObject.cb15=d;break;case 16:PIEinputObject.cb16=d;break;case 17:PIEinputObject.cb17=d;break;case 18:PIEinputObject.cb18=d;break;case 19:PIEinputObject.cb19=d;break;default:break}a.updateDisplay()}}function PIEgetDisplayCheckbox(a){var d;var b;var c;d=false;for(b=0;(d==false)&&(b<PIEcbDisplay);b++){if(PIEcbDisplayNames[b]==a){d=true}}c=false;if(d==true){switch(b-1){case 0:c=PIEdisplayObject.cb00;break;case 1:c=PIEdisplayObject.cb01;break;case 2:c=PIEdisplayObject.cb02;break;case 3:c=PIEdisplayObject.cb03;break;case 4:c=PIEdisplayObject.cb04;break;case 5:c=PIEdisplayObject.cb05;break;case 6:c=PIEdisplayObject.cb06;break;case 7:c=PIEdisplayObject.cb07;break;case 8:c=PIEdisplayObject.cb08;break;case 9:c=PIEdisplayObject.cb09;break;case 10:c=PIEdisplayObject.cb10;break;case 11:c=PIEdisplayObject.cb11;break;case 12:c=PIEdisplayObject.cb12;break;case 13:c=PIEdisplayObject.cb13;break;case 14:c=PIEdisplayObject.cb14;break;case 15:c=PIEdisplayObject.cb15;break;case 16:c=PIEdisplayObject.cb16;break;case 17:c=PIEdisplayObject.cb17;break;case 18:c=PIEdisplayObject.cb18;break;case 19:c=PIEdisplayObject.cb19;break;default:break}}return(c)}function PIEaddDualCommand(a,b){PIEaddInputCommand(a,b);PIEaddDisplayCommand(a,b)}function PIEaddDisplayCommand(b,c){var a;switch(PIEcDisplay){case 0:PIEdisplayObject.c00=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c00").name(b);break;case 1:PIEdisplayObject.c01=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c01").name(b);break;case 2:PIEdisplayObject.c02=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c02").name(b);break;case 3:PIEdisplayObject.c03=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c03").name(b);break;case 4:PIEdisplayObject.c04=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c04").name(b);break;case 5:PIEdisplayObject.c05=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c05").name(b);break;case 6:PIEdisplayObject.c06=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c06").name(b);break;case 7:PIEdisplayObject.c07=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c07").name(b);break;case 8:PIEdisplayObject.c08=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c08").name(b);break;case 9:PIEdisplayObject.c09=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c09").name(b);break;case 10:PIEdisplayObject.c10=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c10").name(b);break;case 11:PIEdisplayObject.c11=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c11").name(b);break;case 12:PIEdisplayObject.c12=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c12").name(b);break;case 13:PIEdisplayObject.c13=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c13").name(b);break;case 14:PIEdisplayObject.c14=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c14").name(b);break;case 15:PIEdisplayObject.c15=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c15").name(b);break;case 16:PIEdisplayObject.c16=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c16").name(b);break;case 17:PIEdisplayObject.c17=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c17").name(b);break;case 18:PIEdisplayObject.c18=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c18").name(b);break;case 19:PIEdisplayObject.c19=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c19").name(b);break;default:return;break}PIEcDisplayHandles.push(a);PIEcDisplayNames.push(b);PIEcDisplay++}function PIEaddInputCommand(b,c){var a;switch(PIEcInput){case 0:PIEinputObject.c00=c;a=PIEinputGUI.add(PIEinputObject,"c00").name(b);break;case 1:PIEinputObject.c01=c;a=PIEinputGUI.add(PIEinputObject,"c01").name(b);break;case 2:PIEinputObject.c02=c;a=PIEinputGUI.add(PIEinputObject,"c02").name(b);break;case 3:PIEinputObject.c03=c;a=PIEinputGUI.add(PIEinputObject,"c03").name(b);break;case 4:PIEinputObject.c04=c;a=PIEinputGUI.add(PIEinputObject,"c04").name(b);break;case 5:PIEinputObject.c05=c;a=PIEinputGUI.add(PIEinputObject,"c05").name(b);break;case 6:PIEinputObject.c06=c;a=PIEinputGUI.add(PIEinputObject,"c06").name(b);break;case 7:PIEinputObject.c07=c;a=PIEinputGUI.add(PIEinputObject,"c07").name(b);break;case 8:PIEinputObject.c08=c;a=PIEinputGUI.add(PIEinputObject,"c08").name(b);break;case 9:PIEinputObject.c09=c;a=PIEinputGUI.add(PIEinputObject,"c09").name(b);break;case 10:PIEinputObject.c10=c;a=PIEinputGUI.add(PIEinputObject,"c10").name(b);break;case 11:PIEinputObject.c11=c;a=PIEinputGUI.add(PIEinputObject,"c11").name(b);break;case 12:PIEinputObject.c12=c;a=PIEinputGUI.add(PIEinputObject,"c12").name(b);break;case 13:PIEinputObject.c13=c;a=PIEinputGUI.add(PIEinputObject,"c13").name(b);break;case 14:PIEinputObject.c14=c;a=PIEinputGUI.add(PIEinputObject,"c14").name(b);break;case 15:PIEinputObject.c15=c;a=PIEinputGUI.add(PIEinputObject,"c15").name(b);break;case 16:PIEinputObject.c16=c;a=PIEinputGUI.add(PIEinputObject,"c16").name(b);break;case 17:PIEinputObject.c17=c;a=PIEinputGUI.add(PIEinputObject,"c17").name(b);break;case 18:PIEinputObject.c18=c;a=PIEinputGUI.add(PIEinputObject,"c18").name(b);break;case 19:PIEinputObject.c19=c;a=PIEinputGUI.add(PIEinputObject,"c19").name(b);break;default:return;break}PIEcInputHandles.push(a);PIEcInputNames.push(b);PIEcInput++}function PIEchangeDisplayCommand(c,b,d){var a;var e;a=null;for(e=0;(a==null)&&(e<PIEcDisplay);e++){if(PIEcDisplayNames[e]==c){a=PIEcDisplayHandles[e]}}if(a!=null){switch(e-1){case 0:PIEdisplayObject.c00=d;break;case 1:PIEdisplayObject.c01=d;break;case 2:PIEdisplayObject.c02=d;break;case 3:PIEdisplayObject.c03=d;break;case 4:PIEdisplayObject.c04=d;break;case 5:PIEdisplayObject.c05=d;break;case 6:PIEdisplayObject.c06=d;break;case 7:PIEdisplayObject.c07=d;break;case 8:PIEdisplayObject.c08=d;break;case 9:PIEdisplayObject.c09=d;break;case 10:PIEdisplayObject.c10=d;break;case 11:PIEdisplayObject.c11=d;break;case 12:PIEdisplayObject.c12=d;break;case 13:PIEdisplayObject.c13=d;break;case 14:PIEdisplayObject.c14=d;break;case 15:PIEdisplayObject.c15=d;break;case 16:PIEdisplayObject.c16=d;break;case 17:PIEdisplayObject.c17=d;break;case 18:PIEdisplayObject.c18=d;break;case 19:PIEdisplayObject.c19=d;break;default:break}PIEcDisplayNames[e-1]=b;a.name(b);a.updateDisplay()}}function PIEchangeInputCommand(c,b,d){var a;var e;a=null;for(e=0;(a==null)&&(e<PIEcInput);e++){if(PIEcInputNames[e]==c){a=PIEcInputHandles[e]}}if(a!=null){switch(e-1){case 0:PIEinputObject.c00=d;break;case 1:PIEinputObject.c01=d;break;case 2:PIEinputObject.c02=d;break;case 3:PIEinputObject.c03=d;break;case 4:PIEinputObject.c04=d;break;case 5:PIEinputObject.c05=d;break;case 6:PIEinputObject.c06=d;break;case 7:PIEinputObject.c07=d;break;case 8:PIEinputObject.c08=d;break;case 9:PIEinputObject.c09=d;break;case 10:PIEinputObject.c10=d;break;case 11:PIEinputObject.c11=d;break;case 12:PIEinputObject.c12=d;break;case 13:PIEinputObject.c13=d;break;case 14:PIEinputObject.c14=d;break;case 15:PIEinputObject.c15=d;break;case 16:PIEinputObject.c16=d;break;case 17:PIEinputObject.c17=d;break;case 18:PIEinputObject.c18=d;break;case 19:PIEinputObject.c19=d;break;default:break}PIEcInputNames[e-1]=b;a.name(b);a.updateDisplay()}}function PIEaddButton(a){var b;button=document.createElement("button");button.setAttribute("id",a);button.innerHTML=a;PIEtoplineElem.appendChild(button);return(button)}function PIEadjustCamera(a,c,b){PIEcamera.position.x=a;PIEcamera.position.y=c;PIEcamera.position.z=b}function PIEturnCamera(a,c,b){PIEcameraTarget.x=a;PIEcameraTarget.y=c;PIEcameraTarget.z=b;PIEcamera.lookAt(PIEcameraTarget)}function PIEsetCameraAspect(a){PIEcameraAspect=a;PIEcamera.aspect=a}function PIEsetCameraFOV(a){PIEcameraAngle=a;PIEcamera.fov=a}function PIEsetCameraDepth(a){PIEcamera.far=a}function PIEsetAreaOfInterest(c,b,a,d){PIEaoiTLX=c;PIEaoiTLY=b;PIEaoiBRX=a;PIEaoiBRY=d;PIEaoiW=a-c;PIEaoiH=b-d;PIEaoiAspect=PIEaoiW/PIEaoiH;PIEcameraAngle=30;PIEcameraZ=((PIEaoiH/2)/Math.tan((PIEcameraAngle*Math.PI/180)/2));PIEadjustDisplayScene()}function PIEadjustDisplayScene(){var b;var a;b=0;a=0;if(PIEcanvasAspect>PIEaoiAspect){b=PIEcanvasAspect*(PIEaoiTLY-PIEaoiBRY)-(PIEaoiBRX-PIEaoiTLX);b/=2}else{if(PIEcanvasAspect<PIEaoiAspect){a=(PIEaoiBRX-PIEaoiTLX)/PIEcanvasAspect-(PIEaoiTLY-PIEaoiBRY);a/=2}}PIEdisplayTLX=PIEaoiTLX-b;PIEdisplayTLY=PIEaoiTLY+a;PIEdisplayBRX=PIEaoiBRX+b;PIEdisplayBRY=PIEaoiBRY-a;PIEdisplayW=PIEaoiW+2*b;PIEdisplayH=PIEaoiH+2*a;PIEdisplayAspect=PIEdisplayW/PIEdisplayH;PIEadjustCamera(PIEdisplayTLX+PIEdisplayW/2,PIEdisplayBRY+PIEdisplayH/2,PIEcameraZ);PIEturnCamera(PIEdisplayTLX+PIEdisplayW/2,PIEdisplayBRY+PIEdisplayH/2,0);PIEsetCameraFOV(2*Math.atan((PIEdisplayH/2)/PIEcameraZ)*180/Math.PI);PIEsetCameraAspect(PIEdisplayAspect)}function PIEremoveElement(b){var a;var c;PIEscene.remove(b);c=false;for(a=PIEsceneElements.length-1;(c==false)&&(a>=0);a--){if(b==PIEsceneElements[a]){while(a<PIEsceneElements.length-1){PIEsceneElements[a]=PIEsceneElements[a+1];a++}PIEsceneElements.pop();c=true}}}function PIEaddElement(a){a.receiveShadow=true;a.castShadow=true;PIEscene.add(a);a.dragStart=null;a.drag=null;a.dragEnd=null;a.hoverON=null;a.hoverOFF=null;a.click=null;PIEsceneElements.push(a);return(PIEsceneElements.length-1)}function PIEresetExperiment(){PIEstopAnimation();PIEanimationSpeed=1;PIEspeedElem.innerHTML=PIEanimationSpeed;resetExperiment();PIEshowInputPanel();PIErender()}function PIEspeedupAnimation(){if(PIEanimationSpeed<PIEmaxAnimationSpeed){PIEanimationSpeed*=2}PIEspeedElem.innerHTML=PIEanimationSpeed}function PIEslowdownAnimation(){if(PIEanimationSpeed>PIEminAnimationSpeed){PIEanimationSpeed/=2}PIEspeedElem.innerHTML=PIEanimationSpeed}function PIEstartAnimation(){if(PIEanimationON==false){PIElastUpdateTime=Date.now();PIEpauseOffset=0;PIEcurrentTime=0;PIEoffsetTime=0;PIEanimationON=true;PIEanimationPaused=false;PIEresumeButton.style.display="none";PIEresumeButton.style.visibility="hidden";PIEpauseButton.style.display="inline";PIEpauseButton.style.visibility="visible";PIEstartButton.style.display="none";PIEstopButton.style.display="inline";PIEshowDisplayPanel();PIEanimate()}}function PIEstopAnimation(){if(PIEanimationON==true){PIEpauseOffset=0;PIEcurrentTime=0;PIEoffsetTime=0;PIEanimationON=false;PIEanimationPaused=false;PIEresumeButton.style.display="none";PIEresumeButton.style.visibility="hidden";PIEpauseButton.style.display="inline";PIEpauseButton.style.visibility="hidden";PIEstopButton.style.display="none";PIEstartButton.style.display="inline";PIEshowInputPanel()}}function PIEanimate(){var b;var a;if((PIEanimationON==true)&&(PIEanimationPaused==false)){b=Date.now();a=(b-PIElastUpdateTime)*PIEanimationSpeed;if(a>0){PIEcurrentTime+=a;PIEoffsetTime=a;PIElastUpdateTime=b;updateExperimentElements(PIEcurrentTime,PIEoffsetTime)}requestAnimationFrame(PIEanimate);PIErender()}}function PIErender(){PIErenderer.render(PIEscene,PIEcamera)}function PIEpauseAnimation(){var a;if((PIEanimationON==true)&&(PIEanimationPaused==false)){a=Date.now();PIEpauseOffset=(a-PIElastUpdateTime);PIEpauseButton.style.display="none";PIEpauseButton.style.visibility="hidden";PIEresumeButton.style.display="inline";PIEresumeButton.style.visibility="visible";PIEanimationPaused=true}}function PIEresumeAnimation(){var a;if((PIEanimationON==true)&&(PIEanimationPaused==true)){PIEpauseButton.style.display="inline";PIEpauseButton.style.visibility="visible";PIEresumeButton.style.display="none";PIEresumeButton.style.visibility="hidden";a=Date.now();PIElastUpdateTime=a-PIEpauseOffset;PIEanimationPaused=false;PIEanimate()}}function PIEadjustAnimationTime(a){PIEcurrentTime-=a}function PIEdefaultHoverON(a){if((a!=null)&&((a.hoverON)!=null)){a.hoverON(a)}PIErender()}function PIEdefaultHoverOFF(a){if((a!=null)&&((a.hoverOFF)!=null)){a.hoverOFF(a)}PIErender()}function PIEdefaultDragStart(a){if((a.dragStart)!=null){a.dragStart(a)}PIErender()}function PIEdefaultDrag(a,b){if((a.drag)!=null){a.drag(a,b)}else{a.position.x=b.x;a.position.y=b.y;a.position.z=b.z}PIErender()}function PIEdefaultDragEnd(a){if((a.dragEnd)!=null){a.dragEnd(a)}PIErender()}function PIEsetHoverON(a,b){a.hoverON=b}function PIEsetHoverOFF(a,b){a.hoverOFF=b}function PIEsetDragStart(a,b){a.dragStart=b}function PIEsetDrag(a,b){a.drag=b}function PIEsetDragEnd(a,b){a.dragEnd=b}function PIEdragElement(a){PIEdragElements.push(a)}function PIEremoveDragElement(b){var a;var c;c=false;for(a=0;(c==false)&&(a<PIEdragElements.length);a++){if(PIEdragElements[a]==b){c=true}}if(c==true){while(a<=PIEdragElements.length){PIEdragElements[a-1]=PIEdragElements[a];a++}PIEdragElements.pop()}}function PIEmouseMove(b){var a;b.defaultPrevented=true;PIEmouseP.x=(b.clientX/PIEcanvasW)*2-1;PIEmouseP.y=-(b.clientY/PIEcanvasH)*2+1;PIEraycaster.setFromCamera(PIEmouseP,PIEcamera);if(PIEselectedDrag!=null){PIEraycaster.ray.intersectPlane(PIEdragPlane,PIEdragIntersect);PIEdefaultDrag(PIEselectedDrag,PIEdragIntersect.sub(PIEdragOffset))}else{a=PIEraycaster.intersectObjects(PIEsceneElements);if(a.length>0){PIEdragPlane.setFromNormalAndCoplanarPoint(PIEcamera.getWorldDirection(PIEdragPlane.normal),a[0].object.position);if(PIEselectedHover!=a[0].object){PIEdefaultHoverOFF(PIEselectedHover);PIEselectedHover=a[0].object;PIEdefaultHoverON(PIEselectedHover)}PIEscreenElem.style.cursor="pointer"}else{if(PIEselectedHover!=null){PIEdefaultHoverOFF(PIEselectedHover);PIEselectedHover=null;PIEscreenElem.style.cursor="auto"}}}}function PIEmouseDown(b){var a;b.defaultPrevented=true;PIEselectedDrag=null;PIEraycaster.setFromCamera(PIEmouseP,PIEcamera);a=PIEraycaster.intersectObjects(PIEdragElements);if(a.length>0){PIEselectedDrag=a[0].object;if(PIEraycaster.ray.intersectPlane(PIEdragPlane,PIEdragIntersect)){PIEdragOffset.copy(PIEdragIntersect).sub(PIEselectedDrag.position)}PIEscreenElem.style.cursor="move";PIEdefaultDragStart(PIEselectedDrag)}}function PIEmouseUp(b){var a;b.defaultPrevented=true;if(PIEselectedDrag!=null){PIEdefaultDragEnd(PIEselectedDrag);PIEselectedDrag=null}PIEscreenElem.style.cursor="auto"}function PIEsetClick(a,b){a.click=b}function PIEresetClick(a,b){a.click=null}function PIEmouseClick(c){var b;var a;var d;c.defaultPrevented=true;PIEraycaster.setFromCamera(PIEmouseP,PIEcamera);b=PIEraycaster.intersectObjects(PIEsceneElements);for(a=0;a<b.length;a++){d=b[a].object;if(d.click!=null){d.click(d)}}}var PIEtableData=[];var PIEtableRows=[];var PIEtableNames=[];var PIEtables=[];var PIEcurrentTable;var PIEdraggedTable;var PIEtableChangeHandlers=[];function PIEtableDragStart(b){var a;var c;PIEdraggedTable=b.target;a=window.getComputedStyle(PIEdraggedTable,null);c=(parseInt(a.getPropertyValue("left"))-b.clientX)+","+(parseInt(a.getPropertyValue("top"))-b.clientY);b.dataTransfer.setData("Text",c);b.dataTransfer.dropEffect="move";b.dataTransfer.setData("aTable",c);return(false)}function PIEtableDrop(a){var b;if(PIEdraggedTable!=null){b=a.dataTransfer.getData("Text").split(",");PIEdraggedTable.style.left=(a.clientX+parseInt(b[0],10))+"px";PIEdraggedTable.style.top=(a.clientY+parseInt(b[1],10))+"px";PIEdraggedTable=null;a.stopPropagation();a.preventDefault();return false}}function PIEtableDragEnter(a){a.preventDefault();return(false)}function PIEtableDragOver(a){a.preventDefault();return(false)}function PIEtableSetInputChange(a){var b;var d;var c;PIEtableChangeHandlers[PIEcurrentTable]=a;for(b=0;(b<PIEtableRows[PIEcurrentTable].length);b++){for(d=0;(d<PIEtableData[PIEcurrentTable][b].length);d++){if((PIEtableData[PIEcurrentTable][b][d]!=null)&&(PIEtableData[PIEcurrentTable][b][d].children.length>0)){c=PIEtableData[PIEcurrentTable][b][d].children[0];c.addEventListener("change",PIEtableInputChange,false)}}}}function PIEtableInputChange(a){a.preventDefault();PIEtableInputHandleEvent(a,PIEtableChangeHandlers);return(false)}function PIEtableInputHandleEvent(d,g){var f;var e;var h;var c;var a;var b;var i;i=false;f=d.target;for(e=0;(i==false)&&(e<PIEtables.length);e++){for(h=0;(i==false)&&(h<PIEtableRows[e].length);h++){for(c=0;(i==false)&&(c<PIEtableData[e][h].length);c++){if((PIEtableData[e][h][c]!=null)&&(f==PIEtableData[e][h][c].children[0])){i=true}}}}if(i==true){e--;h--;c--;if(g[e]!=null){g[e](h,c,f.value)}}}function PIEtableSelect(c){var a;var b;PIEcurrentTable=0;for(a=0;(a<PIEtableNames.length);a++){if(c==PIEtableNames[a]){PIEcurrentTable=a}}}function PIEcreateTable(i,n,g,d){var c;var b;var m;var f;var a;var h;var l;var k;var j;var e;PIEtableChangeHandlers.push(null);PIEtableNames.push(i);PIEtableRows.push(new Array(0));PIEtableData.push(new Array(0));PIEtableChangeHandlers.push(null);PIEcurrentTable=PIEtableNames.length-1;c=document.createElement("div");c.draggable=true;c.addEventListener("dragstart",PIEtableDragStart,false);c.style.border="2px solid white";c.style.borderRadius="10px";c.style.display="inline-block";c.style.position="absolute";c.style.top="40px";c.id="obt";c.style.color="white";document.body.appendChild(c);b=document.createElement("div");b.style.display="inline-block";b.style.width="100%";b.style.padding="0px";c.appendChild(b);m=document.createElement("p");m.style.display="inline-block";m.style.width="100%";m.style.margin="auto";m.style.border="2 px solid white";m.style.borderRadius="10px";m.style.backgroundColor="#0020AA";b.appendChild(m);f=document.createElement("button");f.style.background="none";f.style.border="none";f.style.boxSizing="border-box";a=document.createElement("img");a.src="TableAdd.png";a.alt="add";a.height="16";a.width="16";a.style.display="inline";f=document.createElement("button");f.style.background="none";f.style.border="none";f.style.boxSizing="border-box";a=document.createElement("img");a.src="TableDelete.png";a.alt="delete";a.height="16";a.width="16";a.style.display="inline";a=document.createElement("span");a.style.padding="5px";a.style.margin="auto";a.style.align="center";a.innerHTML="<b>"+i+"</b>";m.appendChild(a);f=document.createElement("button");f.style.background="none";f.style.border="none";f.style.boxSizing="border-box";f.style.align="right";f.addEventListener("click",PIEtoggleTable,false);m.appendChild(f);a=document.createElement("img");a.src="TableFold.png";a.alt="delete";a.height="16";a.width="16";a.style.display="inline";f.appendChild(a);a=document.createElement("div");h=document.createElement("table");h.style.display="inline-block";h.style.border="1px solid white";h.style.borderRadius="10px";h.style.padding="0px";h.style.backgroundColor="#0040BB";PIEtables.push(h);a.appendChild(h);c.appendChild(a);for(j=0;j<n;j++){for(e=0;e<g;e++){if(j==0){k=PIEcreateTableCell(j,e,d)}else{k=PIEcreateTableCell(j,e,false)}}}PIEupdateTable(PIEtables[PIEcurrentTable])}function PIEtoggleTable(e){var g;var c;var a;var h;var f;var d;var b;e=e||window.event;e.defaultPrevented=true;g=null;if(e.target){g=e.target}else{if(e.srcElement){g=e.srcElement}}if(g!=null){if(g.nodeType==3){g=g.parentNode}a=((g.parentNode).parentNode).parentNode;h=a.children;for(d=0;(d<h.length);d++){f=h[d].children;for(b=0;(b<f.length);b++){if(f[b].nodeName=="TABLE"){c=f[b];if(c.style.display=="inline-block"){c.style.display="none"}else{c.style.display="inline-block"}}}}}}function PIEupdateTable(){var c;var d;var a;var b;PIEtables[PIEcurrentTable].innerHTML="";for(c=0;(c<PIEtableRows[PIEcurrentTable].length);c++){a=PIEtableRows[PIEcurrentTable][c];PIEtables[PIEcurrentTable].appendChild(a);for(d=0;(d<PIEtableData[PIEcurrentTable][c].length);d++){b=PIEtableData[PIEcurrentTable][c][d];a.appendChild(b)}}}function PIEexpandCell(a){if((a.target.size+6)<a.target.value.length){a.target.size=a.target.value.length-6}}function PIEcreateInputElement(b,c){var a;a=document.createElement("input");a.style.color="#FFFFFF";a.style.backgroundColor="#0060CC";a.style.border="2px solid red";if(b>=7){a.size=(b-6)}else{a.size=1}a.addEventListener("keyup",PIEexpandCell,false);if(PIEtableChangeHandlers[PIEcurrentTable]!=null){a.addEventListener("change",PIEtableInputChange,false)}a.addEventListener("change",PIEtableInputChange,false);a.value=c;return(a)}function PIEsetColumnInput(a,b,e){var d;var c;for(c=0;(c<PIEtableRows[PIEcurrentTable].length)&&(PIEtableRows[PIEcurrentTable][c]!=null);c++){if(PIEtableData[PIEcurrentTable][c].length>a){if(PIEtableData[PIEcurrentTable][c][a]!=null){PIEtableData[PIEcurrentTable][c][a].innerHTML="";PIEtableData[PIEcurrentTable][c][a].appendChild(PIEcreateInputElement(b,e))}}}}function PIEsetRowInput(e,a,d){var c;var b;if((PIEtableRows[PIEcurrentTable].length>e)&&(PIEtableRows[PIEcurrentTable][e]!=null)){for(b=0;(b<PIEtableData[PIEcurrentTable][e].length);b++){if(PIEtableData[PIEcurrentTable][e][b]!=null){PIEtableData[PIEcurrentTable][e][b].innerHTML="";PIEtableData[PIEcurrentTable][e][b].appendChild(PIEcreateInputElement(a,d))}}}}function PIEsetCellInput(e,a,b,d){var c;while(PIEtableRows[PIEcurrentTable].length<=e){PIEtableRows[PIEcurrentTable].push(null);PIEtableData[PIEcurrentTable].push(new Array(0))}if(PIEtableRows[PIEcurrentTable][e]==null){PIEtableRows[PIEcurrentTable][e]=document.createElement("tr")}while(PIEtableData[PIEcurrentTable][e].length<=a){PIEtableData[PIEcurrentTable][e].push(null)}if(PIEtableData[PIEcurrentTable][e][a]==null){PIEtableData[PIEcurrentTable][e][a]=document.createElement("td")}PIEtableData[PIEcurrentTable][e][a].innerHTML="";c=PIEcreateInputElement(b,d);PIEtableData[PIEcurrentTable][e][a].appendChild(c)}function PIEcreateTableCell(c,b,d){var a;a=(d==true)?"th":"td";while(PIEtableRows[PIEcurrentTable].length<=c){PIEtableRows[PIEcurrentTable].push(null);PIEtableData[PIEcurrentTable].push(new Array(0))}if(PIEtableRows[PIEcurrentTable][c]==null){PIEtableRows[PIEcurrentTable][c]=document.createElement("tr")}while(PIEtableData[PIEcurrentTable][c].length<=b){PIEtableData[PIEcurrentTable][c].push(null)}if(PIEtableData[PIEcurrentTable][c][b]==null){PIEtableData[PIEcurrentTable][c][b]=document.createElement(a)}else{PIEtableData[PIEcurrentTable][c][b].innerHTML=""}}function PIEupdateTableRow(c,a){var b;for(b=0;b<a.length;b++){PIEupdateTableCell(c,b,a[b])}}function PIEupdateTableColumn(b,a){var c;for(c=0;c<a.length;c++){PIEupdateTableCell(c,b,a[b])}}function PIEupdateTableCell(c,a,b){while(PIEtableRows[PIEcurrentTable].length<=c){PIEtableRows[PIEcurrentTable].push(null);PIEtableData[PIEcurrentTable].push(new Array(0))}if(PIEtableRows[PIEcurrentTable][c]==null){PIEtableRows[PIEcurrentTable][c]=document.createElement("tr")}while(PIEtableData[PIEcurrentTable][c].length<=a){PIEtableData[PIEcurrentTable][c].push(null)}if(PIEtableData[PIEcurrentTable][c][a]==null){PIEtableData[PIEcurrentTable][c][a]=document.createElement("td")}if(PIEtableData[PIEcurrentTable][c][a].children.length==0){PIEtableData[PIEcurrentTable][c][a].innerHTML=b}else{PIEtableData[PIEcurrentTable][c][a].children[0].value=b}}function PIEsetTableRowStyle(d,a,c){var b;if(d<PIEtableRows[PIEcurrentTable].length){for(b=0;(b<PIEtableData[PIEcurrentTable][d].length);b++){PIEsetTableCellStyle(d,b,a,c)}}}function PIEsetTableColumnStyle(a,b,d){var c;for(c=0;(c<PIEtableRows[PIEcurrentTable].length);c++){if(a<PIEtableData[PIEcurrentTable][c].length){PIEsetTableCellStyle(c,a,b,d)}}}function PIEsetTableCellStyle(d,a,b,c){if(d<PIEtableRows[PIEcurrentTable].length){if(a<PIEtableData[PIEcurrentTable][rowI].length){if(b=="color"){PIEtableData[PIEcurrentTable][d][a].style.color=c}else{if(b=="backgroundColor"){PIEtableData[PIEcurrentTable][d][a].style.backgroundColor=c}else{if(b=="margin"){PIEtableData[PIEcurrentTable][d][a].style.margin=c}else{if(b=="padding"){PIEtableData[PIEcurrentTable][d][a].style.padding=c}else{if(b=="border"){PIEtableData[PIEcurrentTable][d][a].style.border=c}}}}}}}};




var LearningCheck=0;
var TryItCheck=1;
var f1;                 //Dat.GUI folder object

var currentForceA=0,currentForceB=0,currentAreaA=1,currentAreaB=5;

var HOLDERA,HOLDERB;

var leftArrow;
var rightArrow;
var manometer;

var manPlane,carPlane,wBoxPlane,elephantPlane;

var formula;
var dot1;
var dot2;
var pointline1;
var pointline2;

var tries=2;

var infoContent;
function initialiseInfo() {
    infoContent =  "";
    infoContent = infoContent + "<h2>Liquid pressure – hydraulic press concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a schematic of a hydraulic press having pistons of area A1 and A2 respectively. The force applied F1 will get multiplied according to the ratio of the areas of the two pistons</p>";
    infoContent = infoContent + "<h3>Pascal's Law & Hydraulic Press</h3>";
    infoContent = infoContent + "<p>The hydraulic press depends on Pascal's principle: The pressure throughout a closed system is constant. One part of the system is a piston acting as a pump, with a modest mechanical force acting on a small cross-sectional area; the other part is a piston with a larger area which generates a correspondingly large mechanical force.Hence it is a force multiplier system. The pressure for balanced pistons is: <ul><li>P=(F1/A1)=(F2/A2)</li></ul> </p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}


var helpContent;
function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Liquid pressure – hydraulic press help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a schematic of a hydraulic press having pistons of area A1 and A2 respectively. The force applied F1 will get multiplied according to the ratio of the areas of the two pistons</p>";
    helpContent = helpContent + "<h3>Controls</h3>";
    helpContent = helpContent + "<p>The experiment can be controlled by the provided control panel. When in the TRY IT OUT mode, user can choose the forces to be applied on both piston, F1&F2 and also areas of both pistons A1&A2. START button begins the simulation.</p>";
    helpContent = helpContent + "<h3>Modes</h3>";
    helpContent = helpContent + "<p>There are two modes: <ul><li>Learning Mode</li><li>Try It Out Mode</li></ul></p><p> </p>";
    helpContent = helpContent + "<h3>Learning Mode</h3><p>The learning mode is for understanding purposes and shows how common objects with different weights can be balanced by a hydraulic press with different piston areas. The animation is started upon click of START which shows some common objects being balanced. </p>"
    helpContent = helpContent + "<h3>Try It Out Mode</h3><p>The Try It Out Mode allows the user to choose all four experiment variables (F1,A1,F2,A2) and simulate the outcome.</p>";
    //helpContent = helpContent + "<h3>Observation</h3>";
    //helpContent = helpContent + "<p>A predefined observation table is present at the top left side of the experiment which updates itself with the required readings upon the click of START. This table supports maximum of 4 readings and has to be reset afterwards by clicking the reset button. Also the learning mode has its own table which records the values and the number of attempts taken to solve it. </p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}



function loadExperimentElements(){
  PIEsetExperimentTitle("Liquid pressure – hydraulic press");
  PIEsetDeveloperName("Sreekanth T M");
  PIEsetAreaOfInterest(-16,10,16,-10);
  initialiseInfo();
  initialiseHelp();
  //PIEscene.background = new THREE.Color(0Xbc7744);
  var background = new THREE.Mesh(new THREE.BoxGeometry(150,150,0),new THREE.MeshBasicMaterial({color:"#616a6b"}));
  PIEaddElement(background);
  background.position.set(0,0,-5);
  PIErender();

  //Checkboxes
  PIEaddInputCheckbox("Learning", false, loadLearning);
  PIEaddInputCheckbox("Try It Yourself", true, loadTryIt);

  //Starting ANIMATION
  document.getElementById("start").addEventListener("click", AnimationStart);
  document.getElementById("stop").addEventListener("click", AnimationStop);

  //Custom Dat.GUI folder with sliders
  var FizzyText = function(){
    this.Force_1=0;
    this.Area_1=1;
    this.Force_2=0;
    this.Area_2=5;
    this.Remove_Weights = function(){
      handleForceA(0);
      handleForceB(0);
      this.Force_1=0;
      this.Force_2=0;
      //PIEinputGUI.__folders.f1.controllers[0].updateDisplay();
      f1.updateDisplay();
    }
  }
  text=new FizzyText();
  f1 = PIEinputGUI.addFolder("Try It Yourself Controls");
  f1.add(text,'Force_1',0,50).step(10).onFinishChange(handleForceA);
  f1.add(text,'Area_1',1,5).step(1).onFinishChange(handleAreaA);
  f1.add(text,'Force_2',0,50).step(10).onFinishChange(handleForceB);
  f1.add(text,'Area_2',1,5).step(1).onFinishChange(handleAreaB);
  f1.add(text,'Remove_Weights');



  //Loading Hydraulic Press
  HPress = loadHydraulicPress(currentAreaA,currentAreaB);
  //HPress.visible=false;
  HPressFluid = loadFluid(currentAreaA,currentAreaB);
  loadLearningObjects();
  loadLabels();
  loadManometer();

  boxpile=new THREE.Mesh();
  boxpile2=new THREE.Mesh();

  //Creating Table For Observations
  PIEcreateTable("Observations (Try It Yourself)",6,8);
  var header = ["S.No","&nbspF1","&nbspA1","&nbspF2","&nbspA2","&nbspP1","&nbspP2","H"]
  var header2=["","","","","","F1/A1","F2/A2","Diff"];
  PIEupdateTableRow(0,header);
  PIEupdateTableRow(1,header2);
  for(var i=2;i<=5;i++){
    for(var j=0;j<8;j++){
      if(j==5||j==6){
        PIEsetCellInput(i,j,7,"");
      }else if(j==7){
        PIEsetCellInput(i,j,4,"");
      }
      else{
        PIEsetCellInput(i,j,3,"");
      }
    }
  }

  document.getElementById('obt').style.visibility="hidden";
  PIErender();
  manPlane=new THREE.Mesh();
  carPlane=new THREE.Mesh();
  wBoxPlane=new THREE.Mesh();
  elephantPlane=new THREE.Mesh();
  balanced1=new THREE.Mesh();
  balanced2=new THREE.Mesh();
  f2eqtext=new THREE.Mesh();
  f1text4=new THREE.Mesh();
  f2text4=new THREE.Mesh();
  formula=new THREE.Mesh();

  loadTryIt();
}




function loadBlockPile(n,lx,ly,lz,flag){
  var box=[];
  var loader=new THREE.TextureLoader();
  loader.load('wbox3.png',function(texture){
    var x1=-1.5,x2=-1,x3=-0.5,x4=0,y=1.5;
    for(var i=0;i<n;i++){
      box[i]=new THREE.Mesh(new THREE.BoxGeometry(1,1,0),new THREE.MeshBasicMaterial({map:texture}));
      //PIEdragElement(box[i]);
      if(i<4){
        box[i].position.set(x1,y,0.2);
        x1+=1;
        PIErender();
      }
      else if(i<7){
        box[i].position.set(x2,y+1,0.2);
        x2+=1;
        PIErender();
      }
      else if(i<9){
        box[i].position.set(x3,y+2,0.2);
        x3+=1;
        PIErender();
      }
      else{
        box[i].position.set(x4,y+3,0.2);
        x4+=1;
        PIErender();
      }
      PIErender();
    }
    PIErender();

    if(flag==0){
      boxpile = new THREE.Group();
      for(var i=0;i<n;i++){
        boxpile.add(box[i]);
      }
      PIEaddElement(boxpile);
      boxpile.position.set(lx,ly,lz);
    }
    else{
      boxpile2 = new THREE.Group();
      for(var i=0;i<n;i++){
        boxpile2.add(box[i]);
      }
      PIEaddElement(boxpile2);
      boxpile2.position.set(lx,ly,lz);
    }
    PIErender();
  });
  PIErender();
  //return boxpile;
}

//CheckBox Handling functions
function loadLearning(){
  PIEchangeInputCheckbox("Try It Yourself",false);
  PIEchangeInputCheckbox("Learning",true);
  document.getElementById('obt').style.visibility="hidden";
  LearningCheck=1;
  TryItCheck=0;
  f1.close();

  HPress.visible=false;
  HPressFluid.visible=false;
  HPress = loadHydraulicPress(1,5);
  HPressFluid = loadFluid(1,5);
  boxpile.visible=false;
  boxpile2.visible=false;
  PIErender();

  balancedtry.visible=false;

  f2eqtext.visible=true;
  f1text4.visible=true;
  f2text4.visible=true;
  formula.visible=true;
  dot1.visible=true;
  dot2.visible=true;
  pointline1.visible=true;
  pointline2.visible=true;
  PIErender();
}


function loadTryIt(){
  PIEchangeInputCheckbox("Learning",false);
  PIEchangeInputCheckbox("Try It Yourself",true)
  document.getElementById('obt').style.visibility="visible";


  if(TryItCheck==0){
    boxpile.visible=false;
    boxpile2.visible=false;
    loadBlockPile(currentForceA/5,-6,3,0.2,0);
    loadBlockPile(currentForceB/5,6,3,0.2,1);
    PIErender();
  }

  TryItCheck=1;
  LearningCheck=0;
  f1.open();

  PIErender();

  //loading try it ELEMENTS
  HPress.visible=false;
  HPressFluid.visible=false;
  HPress = loadHydraulicPress(currentAreaA,currentAreaB);
  HPressFluid = loadFluid(currentAreaA,currentAreaB);


  //Hiding All Learning stuff
  manPlane.visible=false;
  carPlane.visible=false;
  wBoxPlane.visible=false;
  elephantPlane.visible=false;
  manPlane.material.opacity=1;
  carPlane.material.opacity=1;
  wBoxPlane.material.opacity=1;
  elephantPlane.material.opacity=1;
  balanced1.visible=false;
  balanced1.position.set(0,5,0.2);
  balanced1.material.opacity=1;
  balanced2.visible=false;
  balanced2.position.set(0,5,0.2);
  balanced2.material.opacity=1;

  f2eqtext.visible=false;
  f1text4.visible=false;
  f2text4.visible=false;
  formula.visible=false;
  //dot1.visible=false;
  //dot2.visible=false;
  pointline1.visible=false;
  pointline2.visible=false;

  PIErender();
}

function handleForceA(newval){
  if(LearningCheck==1){
    alert("These sliders are for Try It Out Mode.  ** You have been switched to Try It Mode! **")
  }

  currentForceA=newval;
  if(TryItCheck==1){
    boxpile.visible=false;
    loadBlockPile(currentForceA/5,-6,3,0.2,0);
    PIErender();
  }
  loadTryIt();
}

function handleForceB(newval){
  if(LearningCheck==1){
    alert("These sliders are for Try It Out Mode.  ** You have been switched to Try It Mode! **")
  }

  currentForceB=newval;
  if(TryItCheck==1){
    boxpile2.visible=false;
    loadBlockPile(currentForceB/5,6,3,0.2,1);
    PIErender();
  }
  loadTryIt();
}

function handleAreaA(newval){
  if(LearningCheck==1){
    alert("These sliders are for Try It Out Mode.  ** You have been switched to Try It Mode! **")
  }
  currentAreaA=newval;
  HPress.visible=false;
  HPressFluid.visible=false;
  HPress = loadHydraulicPress(currentAreaA,currentAreaB);
  HPressFluid = loadFluid(currentAreaA,currentAreaB);
  PIErender();
  loadTryIt();
}

function handleAreaB(newval){
  if(LearningCheck==1){
    alert("These sliders are for Try It Out Mode.  ** You have been switched to Try It Mode! **")
  }
  currentAreaB=newval;
  HPress.visible=false;
  HPressFluid.visible=false;
  HPress = loadHydraulicPress(currentAreaA,currentAreaB);
  HPressFluid = loadFluid(currentAreaA,currentAreaB);
  PIErender();
  loadTryIt();
}

//Function that renders the schematic of the hydraulic press.
function loadHydraulicPress(currentAreaA,currentAreaB){
  var leftPart = new THREE.Mesh(new THREE.BoxGeometry(currentAreaA,10,0),new THREE.MeshBasicMaterial({color:"white"}));
  PIEaddElement(leftPart);
  leftPart.position.set(-6,-3,0);

  var rightPart = new THREE.Mesh(new THREE.BoxGeometry(currentAreaB,10,0),new THREE.MeshBasicMaterial({color:"white"}));
  PIEaddElement(rightPart);
  rightPart.position.set(6,-3,0);

  var centerPart = new THREE.Mesh(new THREE.BoxGeometry(12,1,0),new THREE.MeshBasicMaterial({color:"white"}));
  PIEaddElement(centerPart);
  centerPart.position.set(0,-6,0);

  //Borders
  var leftPart2 = new THREE.Mesh(new THREE.BoxGeometry(currentAreaA+0.2,10.2,0),new THREE.MeshBasicMaterial({color:"black"}));
  PIEaddElement(leftPart2);
  leftPart2.position.set(-6,-3,-0.01);

  var rightPart2 = new THREE.Mesh(new THREE.BoxGeometry(currentAreaB+0.2,10.2,0),new THREE.MeshBasicMaterial({color:"black"}));
  PIEaddElement(rightPart2);
  rightPart2.position.set(6,-3,-0.01);

  var centerPart2 = new THREE.Mesh(new THREE.BoxGeometry(12.2,1.2,0),new THREE.MeshBasicMaterial({color:"black"}));
  PIEaddElement(centerPart2);
  centerPart2.position.set(0,-6,-0.01);

  //PISTONS & Holders
  var pistonA=new THREE.Mesh(new THREE.BoxGeometry(currentAreaA,0.5,0),new THREE.MeshBasicMaterial({color:"#101010"}));
  PIEaddElement(pistonA);
  pistonA.position.set(-6,-2,0.01);

  var pistonB=new THREE.Mesh(new THREE.BoxGeometry(currentAreaB,0.5,0),new THREE.MeshBasicMaterial({color:"#101010"}));
  PIEaddElement(pistonB);
  pistonB.position.set(6,-2,0.01);

  var holderStemA=new THREE.Mesh(new THREE.BoxGeometry(0.4,7,0),new THREE.MeshBasicMaterial({color:"#101010"}));
  PIEaddElement(holderStemA);
  holderStemA.position.set(-6,0.5,0.01);

  var holderA=new THREE.Mesh(new THREE.BoxGeometry(6,0.5,0),new THREE.MeshPhongMaterial({color:"#101010"}));
  PIEaddElement(holderA);
  holderA.position.set(-6,4,0.01);

  var holderStemB=new THREE.Mesh(new THREE.BoxGeometry(0.4,7,0),new THREE.MeshBasicMaterial({color:"#101010"}));
  PIEaddElement(holderStemB);
  holderStemB.position.set(6,0.5,0.01);

  var holderB=new THREE.Mesh(new THREE.BoxGeometry(6,0.5,0),new THREE.MeshPhongMaterial({color:"#101010"}));
  PIEaddElement(holderB);
  holderB.position.set(6,4,0.01);

  HOLDERA=new THREE.Group();
  HOLDERA.add(pistonA);
  HOLDERA.add(holderA);
  HOLDERA.add(holderStemA);
  PIEaddElement(HOLDERA);

  HOLDERB=new THREE.Group();
  HOLDERB.add(pistonB);
  HOLDERB.add(holderB);
  HOLDERB.add(holderStemB);
  PIEaddElement(HOLDERB);

  var HPress = new THREE.Group();
  HPress.add(HOLDERA);
  HPress.add(HOLDERB);
  HPress.add(leftPart);
  HPress.add(rightPart);
  HPress.add(centerPart);
  HPress.add(leftPart2);
  HPress.add(rightPart2);
  HPress.add(centerPart2);
  PIEaddElement(HPress);

  PIErender();
  return HPress;
}


function loadFluid(currentAreaA,currentAreaB){
  leftFluid = new THREE.Mesh(new THREE.BoxGeometry(currentAreaA,8,0),new THREE.MeshBasicMaterial({color:"#666600"}));
  PIEaddElement(leftFluid);
  leftFluid.position.set(-6,-6.2,0.01);

  rightFluid = new THREE.Mesh(new THREE.BoxGeometry(currentAreaB,8,0),new THREE.MeshBasicMaterial({color:"#666600"}));
  PIEaddElement(rightFluid);
  rightFluid.position.set(6,-6.2,0.01);

  var centerPart = new THREE.Mesh(new THREE.BoxGeometry(12,1,0),new THREE.MeshBasicMaterial({color:"#666600"}));
  PIEaddElement(centerPart);
  centerPart.position.set(0,-6,0.01);

  var blLine1 = new THREE.Mesh(new THREE.BoxGeometry(currentAreaA,0.1,0),new THREE.MeshBasicMaterial({color:"black"}));
  PIEaddElement(blLine1);
  blLine1.position.set(-6,-6.55,0.011);

  var blLine2 = new THREE.Mesh(new THREE.BoxGeometry(currentAreaB,0.1,0),new THREE.MeshBasicMaterial({color:"black"}));
  PIEaddElement(blLine2);
  blLine2.position.set(6,-6.55,0.011);

  var hide=new THREE.Mesh(new THREE.BoxGeometry(100,50,0),new THREE.MeshBasicMaterial({color:"#616a6b",transparent:true,opacity:1}));
  PIEaddElement(hide);
  hide.position.set(0,-31.6,0.011);

  var fluid = new THREE.Group();
  fluid.add(leftFluid);
  fluid.add(rightFluid);
  fluid.add(centerPart);
  fluid.add(blLine1);
  fluid.add(blLine2);
  fluid.add(hide);
  PIEaddElement(fluid);

  PIErender();
  return fluid;
}


function loadManometer(){
  var loader=new THREE.TextureLoader();
  loader.load('meter.png',function(texture){
    manometer=new THREE.Mesh(new THREE.BoxGeometry(4,4,0),new THREE.MeshBasicMaterial({map:texture,transparent:true}));
    PIEaddElement(manometer);
    manometer.position.set(0,-4.3,-0.011);
    PIErender();

  });
}


//Function that loads the labelling of the schematic diagram
function loadLabels(){
  leftArrow=generateArrow();
  rightArrow=generateArrow();
  rightArrow.rotation.z+=Math.PI;
  rightArrow.position.set(1.5,-4.2,0);

  var loader=new THREE.FontLoader();
  loader.load('optimer.json',function(font){
      var geometry=new THREE.TextGeometry('F1',{font:font,size:0.35,height:0});
      var material=new THREE.MeshBasicMaterial({color:"#010011"});
      var f1text=new THREE.Mesh(geometry,material);
      PIEaddElement(f1text);
      f1text.position.set(-11.3,0,0);

      var geometry=new THREE.TextGeometry('F2 = (A2/A1) F1',{font:font,size:0.35,height:0});
      var material=new THREE.MeshBasicMaterial({color:"#010011"});
      var f2text=new THREE.Mesh(geometry,material);
      PIEaddElement(f2text);
      f2text.position.set(9.5,0,0);

      var geometry=new THREE.TextGeometry('   = 5 F1',{font:font,size:0.35,height:0});
      var material=new THREE.MeshBasicMaterial({color:"#010011"});
      f2eqtext=new THREE.Mesh(geometry,material);
      PIEaddElement(f2eqtext);
      f2eqtext.position.set(11.5,-0.5,0);

      var geometry=new THREE.TextGeometry('APPLIED FORCE',{font:font,size:0.5,height:0});
      var material=new THREE.MeshBasicMaterial({color:"#070707"});
      var f1text2=new THREE.Mesh(geometry,material);
      PIEaddElement(f1text2);
      f1text2.rotation.z+=Math.PI/2;
      f1text2.position.set(-13,-4,0);

      var geometry=new THREE.TextGeometry('MULTIPLIED FORCE',{font:font,size:0.5,height:0});
      var material=new THREE.MeshBasicMaterial({color:"#070707"});
      var f2text2=new THREE.Mesh(geometry,material);
      PIEaddElement(f2text2);
      f2text2.rotation.z+=Math.PI/2;
      f2text2.position.set(15,-4,0);

      var geometry=new THREE.TextGeometry('A1',{font:font,size:0.35,height:0});
      var material=new THREE.MeshBasicMaterial({color:"#010011"});
      var f1text3=new THREE.Mesh(geometry,material);
      PIEaddElement(f1text3);
      f1text3.position.set(-9.5,-2.5,0);

      var geometry=new THREE.TextGeometry('100 cm2',{font:font,size:0.25,height:0});
      var material=new THREE.MeshBasicMaterial({color:"#010011"});
      f1text4=new THREE.Mesh(geometry,material);
      PIEaddElement(f1text4);
      f1text4.position.set(-9.8,-3,0);

      var geometry=new THREE.TextGeometry('A2',{font:font,size:0.35,height:0});
      var material=new THREE.MeshBasicMaterial({color:"#010011"});
      var f2text3=new THREE.Mesh(geometry,material);
      PIEaddElement(f2text3);
      f2text3.position.set(9,-2.5,0);

      var geometry=new THREE.TextGeometry('500 cm2',{font:font,size:0.25,height:0});
      var material=new THREE.MeshBasicMaterial({color:"#010011"});
      f2text4=new THREE.Mesh(geometry,material);
      PIEaddElement(f2text4);
      f2text4.position.set(9,-3,0);

      PIErender();
  });

  dot1=new THREE.Mesh(new THREE.CircleGeometry(0.1,12),new THREE.MeshBasicMaterial({color:"red"}));
  PIEaddElement(dot1);
  dot1.position.set(-6,-2.5,0.02);

  dot2=new THREE.Mesh(new THREE.CircleGeometry(0.1,12),new THREE.MeshBasicMaterial({color:"red"}));
  PIEaddElement(dot2);
  dot2.position.set(6,-2.5,0.02);

  var loader=new THREE.TextureLoader();
  loader.load('formula.png',function(texture){
    formula = new THREE.Mesh(new THREE.BoxGeometry(4,4,0),new THREE.MeshBasicMaterial({map:texture,transparent:true}));
    PIEaddElement(formula);
    formula.visible=false;
    formula.position.set(0,1,0);
  });

  pointline1=new THREE.Mesh(new THREE.BoxGeometry(4.5,0.1,0),new THREE.MeshBasicMaterial({color:"#110000",transparent:true,opacity:0.3}));
  PIEaddElement(pointline1);
  pointline1.rotation.z+=Math.PI/5;
  pointline1.position.set(-4.2,-1.2,0.2);
  pointline1.visible=false;

  pointline2=new THREE.Mesh(new THREE.BoxGeometry(4.5,0.1,0),new THREE.MeshBasicMaterial({color:"#110000",transparent:true,opacity:0.3}));
  PIEaddElement(pointline2);
  pointline2.rotation.z-=Math.PI/5;
  pointline2.position.set(4.2,-1.2,0.2);
  pointline2.visible=false;

  PIErender();
}

//Function that returns a custom made arrow.
function generateArrow(){
  var arrowBodyLeft=new THREE.Mesh(new THREE.BoxGeometry(0.2,3,0),new THREE.MeshLambertMaterial({color:"brown"}));
  PIEaddElement(arrowBodyLeft);
  arrowBodyLeft.position.set(-11,-2,0);

  var arrowHeadLeft1=new THREE.Mesh(new THREE.BoxGeometry(0.2,1,0),new THREE.MeshLambertMaterial({color:"brown"}));
  PIEaddElement(arrowHeadLeft1);
  arrowHeadLeft1.rotation.z+=Math.PI/4;
  arrowHeadLeft1.position.set(-11.4,-3.05,0);

  var arrowHeadLeft2=new THREE.Mesh(new THREE.BoxGeometry(0.2,1,0),new THREE.MeshLambertMaterial({color:"brown"}));
  PIEaddElement(arrowHeadLeft2);
  arrowHeadLeft2.rotation.z-=Math.PI/4;
  arrowHeadLeft2.position.set(-10.6,-3.05,0);

  var leftArrow=new THREE.Group();
  leftArrow.add(arrowBodyLeft);
  leftArrow.add(arrowHeadLeft1);
  leftArrow.add(arrowHeadLeft2);
  PIEaddElement(leftArrow);
  return leftArrow;
}


function loadLearningObjects(){
  var loader=new THREE.TextureLoader();
  loader.load('elephant2.png',function(texture){
    elephantPlane = new THREE.Mesh(new THREE.BoxGeometry(4,4,0),new THREE.MeshBasicMaterial({map:texture,transparent:true,opacity:1}));
    PIEaddElement(elephantPlane);
    elephantPlane.position.set(-13,-5,0.2);
    elephantPlane.visible=false;
    PIErender();
  });

  loader.load('wbox2.png',function(texture){
    wBoxPlane = new THREE.Mesh(new THREE.BoxGeometry(3,3,0),new THREE.MeshBasicMaterial({map:texture,transparent:true,opacity:1}));
    PIEaddElement(wBoxPlane);
    wBoxPlane.position.set(-9,-5.1,0.2);
    wBoxPlane.visible=false;
    PIErender();
  });

  loader.load('car2.png',function(texture){
    carPlane = new THREE.Mesh(new THREE.BoxGeometry(4,4,0),new THREE.MeshBasicMaterial({map:texture,transparent:true,opacity:1}));
    PIEaddElement(carPlane);
    carPlane.position.set(11.5,-5.8,0.2);
    carPlane.visible=false;
    PIErender();
  });

  loader.load('man2.png',function(texture){
    manPlane = new THREE.Mesh(new THREE.BoxGeometry(4,4,0),new THREE.MeshBasicMaterial({map:texture,transparent:true,opacity:1}));
    PIEaddElement(manPlane);
    manPlane.position.set(15,-5,0.2);
    manPlane.visible=false;
    PIErender();
  });

  loader.load('b1.png',function(texture){
    balanced1 = new THREE.Mesh(new THREE.BoxGeometry(5,2,0),new THREE.MeshBasicMaterial({map:texture,transparent:true,opacity:1}));
    PIEaddElement(balanced1);
    balanced1.position.set(0,5,0.2);
    balanced1.visible=false;
    PIErender();
  });

  loader.load('b2.png',function(texture){
    balanced2 = new THREE.Mesh(new THREE.BoxGeometry(5,2,0),new THREE.MeshBasicMaterial({map:texture,transparent:true,opacity:1}));
    PIEaddElement(balanced2);
    balanced2.position.set(0,5,0.2);
    balanced2.visible=false;
    PIErender();
  });

  loader.load('b.png',function(texture){
    balancedtry = new THREE.Mesh(new THREE.BoxGeometry(5,2,0),new THREE.MeshBasicMaterial({map:texture,transparent:true,opacity:1}));
    PIEaddElement(balancedtry);
    balancedtry.position.set(0,5,0.2);
    balancedtry.visible=false;
    PIErender();
  });

}



function AnimationStart(){
  if(LearningCheck==1){
    manPlane.visible=true;
    manPlane.position.set(-12,5.6,0.2);
    elephantPlane.visible=true;
    elephantPlane.position.set(12,5.6,0.2);
    carPlane.visible=false;
    carPlane.position.set(12,5.8,0.2);
    wBoxPlane.visible=false;
    wBoxPlane.position.set(-12,5.6,0.2);
  }

  if(TryItCheck==1){
    /*boxpile.visible=false;
    boxpile2.visible=false;
    loadBlockPile(currentForceA/10,-6,3,0.2,0);
    loadBlockPile(currentForceB/10,6,3,0.2,1);*/
    //Updating TABLE
    /*pressureA = (currentForceA/currentAreaA);
    pressureB = (currentForceB/currentAreaB);
    areaRatio=(currentAreaA/currentAreaB);
    if(pressureB>pressureA){
      netPressure=pressureB-pressureA;
    }
    else{
      netPressure=pressureA-pressureB;
    }
    var hdiff = (netPressure)*/
    PIEupdateTableCell(tries, 0, ""+(tries-1));
    PIEupdateTableCell(tries, 1, ""+currentForceA);
    PIEupdateTableCell(tries, 2, ""+currentAreaA);
    PIEupdateTableCell(tries, 3, ""+currentForceB);
    PIEupdateTableCell(tries, 4, ""+currentAreaB);
    PIEupdateTableCell(tries, 5, ""+(currentForceA/currentAreaA).toFixed(2));
    PIEupdateTableCell(tries, 6, ""+(currentForceB/currentAreaB).toFixed(2));
    PIEupdateTableCell(tries, 7, "-");
    tries++;
  }
}

function AnimationStop(){
  if(LearningCheck==1){
    manPlane.visible=false;
    carPlane.visible=false;
    wBoxPlane.visible=false;
    elephantPlane.visible=false;
    manPlane.material.opacity=1;
    carPlane.material.opacity=1;
    wBoxPlane.material.opacity=1;
    elephantPlane.material.opacity=1;
    balanced1.visible=false;
    balanced1.position.set(0,5,0.2);
    balanced1.material.opacity=1;
    balanced2.visible=false;
    balanced2.position.set(0,5,0.2);
    balanced2.material.opacity=1;
    leftFluid.position.set(-6,-6.2,0.01);
    rightFluid.position.set(6,-6.2,0.01);
    HOLDERA.position.set(0,0,0);
    HOLDERB.position.set(0,0,0);
    part1=0,echeck=0,ccheck=0;
  }

  if(TryItCheck==1){
    leftFluid.position.set(-6,-6.2,0.01);
    rightFluid.position.set(6,-6.2,0.01);
    HOLDERA.position.set(0,0,0);
    HOLDERB.position.set(0,0,0);
    boxpile.position.set(-6,3,0.2);
    boxpile2.position.set(6,3,0.2);
    PIErender();
  }
}


//ANIMATION FUNCTION. Responsible for all animation
var part1=0,echeck=0,ccheck=0;
function updateExperimentElements(t,dt){
  if(t==0){
    return;
  }
  if(LearningCheck==1){
    //MAN & ELEPHANT ANIMATION

    if(part1==0){
      elephantPlane.visible=true;
      manPlane.visible=true;
      carPlane.visible=false;
      wBoxPlane.visible=false;
      balanced2.visible=false;
      carPlane.material.opacity=1;
      wBoxPlane.material.opacity=1;
      balanced2.material.opacity=1;

      if(manPlane.position.x>=-6){
        manPlane.position.x=-6;
        netPressure=30;
        areaRatio=5;
        if(echeck==0){
          if(leftFluid.position.y<=-6.2-(netPressure*0.05)){
            leftFluid.position.y=-6.2-(netPressure*0.05);
            elephantPlane.position.y=5.6+((netPressure*0.05)/5);
            echeck=1;
          }
          else{
            leftFluid.position.y-=(dt/3000);
            rightFluid.position.y+=(dt/3000)/areaRatio;
            HOLDERA.position.y-=(dt/3000);
            HOLDERB.position.y+=(dt/3000)/areaRatio;
            manPlane.position.y-=(dt/3000);
            PIErender();
          }
        }
      }
      else{
        manPlane.position.x+=(dt/500);
      }


      //elephant movement starts
      if(echeck==1){
        if(elephantPlane.position.x<=6){
          elephantPlane.position.x=6;

          if(leftFluid.position.y>=-6.2){
            leftFluid.position.y=-6.2;
            balanced1.visible=true;

            //Slowly Fading the elements
            elephantPlane.material.opacity-=0.005;
            manPlane.material.opacity-=0.005;
            balanced1.material.opacity-=0.005;

            if(elephantPlane.material.opacity<=0){
              part1=1;
            }

          }
          else{
            leftFluid.position.y+=(dt/3000);
            rightFluid.position.y-=(dt/3000)/areaRatio;
            HOLDERA.position.y+=(dt/3000);
            HOLDERB.position.y-=(dt/3000)/areaRatio;
            elephantPlane.position.y-=(dt/3000)/areaRatio;
            manPlane.position.y+=(dt/3000);
            PIErender();
          }
        }
        else{
          elephantPlane.position.x-=(dt/500);
        }
      }
    }


    if(part1==1){
      elephantPlane.visible=false;
      manPlane.visible=false;
      carPlane.visible=true;
      wBoxPlane.visible=true;
      balanced1.visible=false;
      elephantPlane.material.opacity=1;
      manPlane.material.opacity=1;
      balanced1.material.opacity=1;

      if(wBoxPlane.position.x>=-6){
        wBoxPlane.position.x=-6;
        netPressure=30;
        areaRatio=5;
        if(ccheck==0){
          if(leftFluid.position.y<=-6.2-(netPressure*0.05)){
            leftFluid.position.y=-6.2-(netPressure*0.05);
            carPlane.position.y=5.7+((netPressure*0.05)/5);
            ccheck=1;
          }
          else{
            leftFluid.position.y-=(dt/3000);
            rightFluid.position.y+=(dt/3000)/areaRatio;
            HOLDERA.position.y-=(dt/3000);
            HOLDERB.position.y+=(dt/3000)/areaRatio;
            wBoxPlane.position.y-=(dt/3000);
            PIErender();
          }
        }
      }
      else{
        wBoxPlane.position.x+=(dt/500);
      }


      //car movement starts
      if(ccheck==1){
        if(carPlane.position.x<=6){
          carPlane.position.x=6;

          if(leftFluid.position.y>=-6.2){
            leftFluid.position.y=-6.2;
            balanced2.visible=true;

            carPlane.material.opacity-=0.005;
            wBoxPlane.material.opacity-=0.005;
            balanced2.material.opacity-=0.005;

            if(carPlane.material.opacity<=0){
              part1=0;
              PIEstopAnimation();
              ccheck=0;
              echeck=0;
              AnimationStart();
              PIEstartAnimation();
            }

          }
          else{
            leftFluid.position.y+=(dt/3000);
            rightFluid.position.y-=(dt/3000)/areaRatio;
            HOLDERA.position.y+=(dt/3000);
            HOLDERB.position.y-=(dt/3000)/areaRatio;
            carPlane.position.y-=(dt/3000)/areaRatio;
            wBoxPlane.position.y+=(dt/3000);
            PIErender();
          }
        }
        else{
          carPlane.position.x-=(dt/500);
        }
      }
    }

    /*if(manPlane.position.x>=-6){
      manPlane.position.x=-6;
      balanced1.visible=true;
      part1=1;
      manPlane.material.opacity-=0.005;
      if(manPlane.material.opacity<=0){
        balanced1.material.opacity-=0.01;
        balanced1.position.z-=0.05

      }
      PIErender();
    }
    else{
      manPlane.position.x+=(dt/1000)*2;
    }


    if(elephantPlane.position.x<=6){
      elephantPlane.position.x=6;
      part1=1;
      elephantPlane.material.opacity-=0.005;

      if(balanced1.material.opacity<=0){
        //START CAR & BLOCK ANIMATION HERE!
        carPlane.visible=true;
        wBoxPlane.visible=true;
        manPlane.visible=false;
        manPlane.material.opacity=1;
        elephantPlane.visible=false;
        elephantPlane.material.opacity=1;
        PIErender();
        if(wBoxPlane.position.x>=-6){
          wBoxPlane.position.x=-6;
          //appear balanced 2 image
          balanced2.visible=true;

          wBoxPlane.material.opacity-=0.005;
          carPlane.material.opacity-=0.005;
          PIErender();
          if(wBoxPlane.material.opacity<=0){
            balanced2.material.opacity-=0.01;
            balanced2.position.z-=0.05;
            PIErender();
            if(balanced2.material.opacity<=0){
              //REPEAT CYCLE HERE
              wBoxPlane.material.opacity=1;
              carPlane.material.opacity=1;
              wBoxPlane.visible=false;
              carPlane.visible=false;
              balanced2.material.opacity=1;
              balanced2.visible=false;
              balanced1.visible=false;
              balanced1.material.opacity=1;
              balanced1.position.set(0,5,0.2);
              balanced2.position.set(0,5,0.2);
              PIErender();
              PIEstopAnimation();
              AnimationStart();
              PIEstartAnimation();
            }
          }

        }
        else{
          wBoxPlane.position.x+=(dt/1000)*2;
          PIErender();
        }

        if(carPlane.position.x<=6){
          carPlane.position.x=6;
        }
        else{
          carPlane.position.x-=(dt/1000)*2;
          PIErender();
        }
        //End of car & block animation
      }

      PIErender();
    }
    else{
      elephantPlane.position.x-=(dt/1000)*2;
    }*/
  }


  //Animation of Try it yourself mode
  var netPressure,pressureA,pressureB,areaRatio;
  if(TryItCheck==1){
    pressureA = (currentForceA/currentAreaA);
    pressureB = (currentForceB/currentAreaB);

    if((pressureB>pressureA)&&(currentAreaB>currentAreaA)){
      balancedtry.visible=false;
      netPressure=(pressureB-pressureA);
      areaRatio=currentAreaB/currentAreaA;
      if(leftFluid.position.y>=-6.2+/*4.5*/(netPressure*0.065)){
        leftFluid.position.y=-6.2+(netPressure*0.065);
        var diff=(netPressure*0.065)*((1/areaRatio)+1);
        PIEupdateTableCell(tries-1, 7, ""+(diff).toFixed(2));
      }
      else{
        leftFluid.position.y+=(dt/3000);
        rightFluid.position.y-=(dt/3000)/areaRatio;
        HOLDERA.position.y+=(dt/3000);
        HOLDERB.position.y-=(dt/3000)/areaRatio;
        boxpile.position.y+=(dt/3000);
        boxpile2.position.y-=(dt/3000)/areaRatio;
        PIErender();
      }
    }

    if((pressureB>pressureA)&&(currentAreaB<=currentAreaA)){
      balancedtry.visible=false;
      netPressure=(pressureB-pressureA);
      areaRatio=currentAreaB/currentAreaA;
      if(rightFluid.position.y<=-6.2-(netPressure*0.065)){
        rightFluid.position.y=-6.2-(netPressure*0.065);
        var diff=(netPressure*0.065)*(1+areaRatio);
        PIEupdateTableCell(tries-1, 7, ""+(diff).toFixed(2));
      }
      else{
        leftFluid.position.y+=(dt/3000)*areaRatio;
        rightFluid.position.y-=(dt/3000);
        HOLDERA.position.y+=(dt/3000)*areaRatio;
        HOLDERB.position.y-=(dt/3000);
        boxpile.position.y+=(dt/3000)*areaRatio;
        boxpile2.position.y-=(dt/3000);
        PIErender();
      }
    }

    if((pressureA>pressureB)&&(currentAreaB>currentAreaA)){
      balancedtry.visible=false;
      netPressure=(pressureA-pressureB);
      areaRatio=currentAreaB/currentAreaA;
      if(leftFluid.position.y<=-6.2-(netPressure*0.065)){
        leftFluid.position.y=-6.2-(netPressure*0.065);
        var diff=(netPressure*0.065)*((1/areaRatio)+1);
        PIEupdateTableCell(tries-1, 7, ""+(diff).toFixed(2));
      }
      else{
        leftFluid.position.y-=(dt/3000);
        rightFluid.position.y+=(dt/3000)/areaRatio;
        HOLDERA.position.y-=(dt/3000);
        HOLDERB.position.y+=(dt/3000)/areaRatio;
        boxpile.position.y-=(dt/3000);
        boxpile2.position.y+=(dt/3000)/areaRatio;
        PIErender();
      }
    }

    if((pressureA>pressureB)&&(currentAreaB<=currentAreaA)){
      balancedtry.visible=false;
      netPressure=(pressureA-pressureB);
      areaRatio=currentAreaB/currentAreaA;
      if(rightFluid.position.y>=-6.2+(netPressure*0.065)){
        rightFluid.position.y=-6.2+(netPressure*0.065);
        var diff=(netPressure*0.065)*(1+areaRatio);
        PIEupdateTableCell(tries-1, 7, ""+(diff).toFixed(2));
      }
      else{
        leftFluid.position.y-=(dt/3000)*areaRatio;
        rightFluid.position.y+=(dt/3000);
        HOLDERA.position.y-=(dt/3000)*areaRatio;
        HOLDERB.position.y+=(dt/3000);
        boxpile.position.y-=(dt/3000)*areaRatio;
        boxpile2.position.y+=(dt/3000);
        PIErender();
      }
    }


    if(pressureA==pressureB){
        balancedtry.visible=true;
        PIEupdateTableCell(tries-1, 7, ""+(0).toFixed(2));
    }

  }


  PIErender();
}

function resetExperiment(){
  if(LearningCheck==1){
    part1=0,echeck=0,ccheck=0;
    manPlane.visible=false;
    carPlane.visible=false;
    wBoxPlane.visible=false;
    elephantPlane.visible=false;
    manPlane.material.opacity=1;
    carPlane.material.opacity=1;
    wBoxPlane.material.opacity=1;
    elephantPlane.material.opacity=1;
    balanced1.visible=false;
    balanced1.position.set(0,5,0.2);
    balanced1.material.opacity=1;
    balanced2.visible=false;
    balanced2.position.set(0,5,0.2);
    balanced2.material.opacity=1;
    leftFluid.position.set(-6,-6.2,0.01);
    rightFluid.position.set(6,-6.2,0.01);
    HOLDERA.position.set(0,0,0);
    HOLDERB.position.set(0,0,0);
    part1=0,echeck=0,ccheck=0;
  }
  if(TryItCheck==1){
    leftFluid.position.set(-6,-6.2,0.01);
    rightFluid.position.set(6,-6.2,0.01);
    HOLDERA.position.set(0,0,0);
    HOLDERB.position.set(0,0,0);
    boxpile.position.set(-6,3,0.2);
    boxpile2.position.set(6,3,0.2);
    balancedtry.visible=false;
    text.Remove_Weights();

    for(var i=2;i<=5;i++){
      PIEupdateTableCell(i, 0, "");
      PIEupdateTableCell(i, 1, "");
      PIEupdateTableCell(i, 2, "");
      PIEupdateTableCell(i, 3, "");
      PIEupdateTableCell(i, 4, "");
      PIEupdateTableCell(i, 5, "");
      PIEupdateTableCell(i, 6, "");
      PIEupdateTableCell(i, 7, "");
    }
    tries=2;
  }
}
