! function () {
	"use strict";
	class t extends Laya.Button {
		constructor() {
			super(), this.currScale = 1
		}
		onAwake() { }
		onEnable() {
			this.currScale = this.scaleX, this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), this.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp)
		}
		onMouseDown() {
			Laya.Tween.to(this, {
				scaleX: .8 * this.currScale,
				scaleY: .8 * this.currScale
			}, 100)
		}
		onMouseUp() {
			Laya.Tween.to(this, {
				scaleX: this.currScale,
				scaleY: this.currScale
			}, 100)
		}
	}
	class e {
		constructor() {
			this.projectName = "?StackBall_ttb810cead273a3849", this.gameBoxDataVersion = "20200318_v1.0.1", this.appids = ["tt411037adde3a8c53", "tt4ee83855d1c22edd", "ttce6cb8d15146a5c2", "ttd4dfa2624bf5dd5c", "tta2e5d4583dcf5807", "tt132d65908c077a36", "tt10ca66778fe04edf", "ttada1db1c328bdea0", "ttd968afd5464d3039", "tt4a563cebd57c3072"], this.gameData_ServerLink = "https://www.7cgames.cn/GameRes/byteDance/7cgames/ByteDanceMoreGameVersion/Versions/" + this.gameBoxDataVersion + "/bytedanceMoreGame.json", this.networkType = "none", this.mgBanner = null
		}
		static get instance() {
			return null == this._instance && (this._instance = new e), this._instance
		}
		init() {
			this.getNetworkType(), this.onNetworkStatusChange(), this.loadMoreGameData(), this.setMoreGamesInfo()
		}
		loadMoreGameData() {
			if (console.log("读取服务器数据,用于数据统计"), Laya.Browser.window.tt) {
				var t = Laya.LocalStorage.getItem("Data_Day");
				"" == t || null == t || null == t ? (console.log("今天未读取数据，读取一次"), Laya.loader.load(this.gameData_ServerLink + this.projectName + "_" + Laya.Browser.window.tt.getSystemInfoSync().appName), console.log(this.gameData_ServerLink, this.projectName, Laya.Browser.window.tt.getSystemInfoSync().appName), Laya.LocalStorage.setItem("Data_Day", this.AnalysisTimeStamp())) : t != this.AnalysisTimeStamp() ? (console.log("今天未读取数据，读取一次"), Laya.loader.load(this.gameData_ServerLink + this.projectName + "_" + Laya.Browser.window.tt.getSystemInfoSync().appName), Laya.LocalStorage.setItem("Data_Day", this.AnalysisTimeStamp())) : console.log("今天已读取数据，无需再次读取")
			}
		}
		getNetworkType() {
			Laya.Browser.window.tt && Laya.Browser.window.tt.getNetworkType && Laya.Browser.window.tt.getNetworkType({
				success: t => {
					console.log("当前网络类型：", t.networkType), this.networkType = t.networkType
				}
			})
		}
		onNetworkStatusChange() {
			Laya.Browser.window.tt && Laya.Browser.window.tt.onNetworkStatusChange && Laya.Browser.window.tt.onNetworkStatusChange(t => {
				console.log("是否有网络连接：", t.isConnected), console.log("当前网络类型：", t.networkType), this.networkType = t.networkType
			})
		}
		setMoreGamesInfo() {
			Laya.Browser.window.tt && Laya.Browser.window.tt.setMoreGamesInfo && Laya.Browser.window.tt.setMoreGamesInfo({
				appLaunchOptions: [{
					appId: this.appids[0]
				}, {
					appId: this.appids[1]
				}, {
					appId: this.appids[2]
				}, {
					appId: this.appids[3]
				}, {
					appId: this.appids[4]
				}, {
					appId: this.appids[5]
				}, {
					appId: this.appids[6]
				}, {
					appId: this.appids[7]
				}, {
					appId: this.appids[8]
				}, {
					appId: this.appids[9]
				}]
			})
		}
		createMoreGamesBanner() {
			if (Laya.Browser.window.tt && Laya.Browser.window.tt.createMoreGamesBanner && null == this.mgBanner) {
				let t = Laya.Browser.window.tt.getSystemInfoSync().windowWidth,
					e = Laya.Browser.window.tt.getSystemInfoSync().windowHeight;
				this.mgBanner = Laya.Browser.window.tt.createMoreGamesBanner({
					appLaunchOptions: [{
						appId: this.appids[0]
					}, {
						appId: this.appids[1]
					}, {
						appId: this.appids[2]
					}, {
						appId: this.appids[3]
					}, {
						appId: this.appids[4]
					}, {
						appId: this.appids[5]
					}, {
						appId: this.appids[6]
					}, {
						appId: this.appids[7]
					}, {
						appId: this.appids[8]
					}, {
						appId: this.appids[9]
					}],
					style: {
						left: (t - 40) / 2,
						top: e - 150,
						width: 150,
						height: 40
					}
				}), this.mgBanner.onResize(() => { }), this.mgBanner.show()
			}
		}
		showMoreGamesBanner() {
			this.mgBanner ? this.mgBanner.show() : this.createMoreGamesBanner()
		}
		hideMoreGamesBanner() {
			this.mgBanner && this.mgBanner.hide()
		}
		navigateToMiniProgramByIndex(t, e = null) {
			Laya.Browser.window.tt && Laya.Browser.window.tt.showMoreGamesModal && (Laya.Browser.window.tt.showMoreGamesModal({
				appLaunchOptions: []
			}), e && e())
		}
		navigateToMiniProgramByAppid(t, e = null) {
			Laya.Browser.window.tt && Laya.Browser.window.tt.showMoreGamesModal && Laya.Browser.window.tt.showMoreGamesModal({
				appLaunchOptions: []
			})
		}
		navigateToGameCollection() {
			Laya.Browser.window.tt && Laya.Browser.window.tt.showMoreGamesModal && Laya.Browser.window.tt.showMoreGamesModal({
				appLaunchOptions: []
			})
		}
		AnalysisTimeStamp() {
			var t = new Date(Laya.Browser.now()),
				e = String(t.getFullYear()),
				i = String(t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1),
				s = String(t.getDate() < 10 ? "0" + t.getDate() : t.getDate());
			t.getHours(), t.getHours(), t.getMinutes(), t.getMinutes(), t.getSeconds(), t.getSeconds();
			return e + i + s
		}
	}
	e._instance = null;
	class i {
		constructor() { }
		static getModelScene(t) {
			this.modelScene = t, this.getCamera(), this.getCylinder(), this.getModelBg(), this.getModelBg2(), this.getTurntable(), this.getSpringboard(), this.getBall(), this.getSpecialEffect(), this.getTrail(), this.getBurstEffect(), this.getStampEffect()
		}
		static getCamera() {
			this.camera = this.modelScene.getChildByName("Main Camera")
		}
		static getCylinder() {
			this.cylinder = this.modelScene.getChildByName("Cylinder")
		}
		static getModelBg() {
			this.gameModelBg = this.modelScene.getChildByName("Cylinder1")
		}
		static getModelBg2() {
			this.gameModelBg2 = this.modelScene.getChildByName("Cylinder2"), this.gameModelBg2.active = !1
		}
		static getTurntable() {
			this.turntable = this.modelScene.getChildByName("Turntable"), this.turntable.active = !1;
			this.turntable.getChildAt(0)
		}
		static getSpringboard() {
			this.springBoard = this.modelScene.getChildByName("Springboard"), this.springBoard.active = !1
		}
		static getBall() {
			this.ball = this.modelScene.getChildByName("Ball")
		}
		static getSpecialEffect() {
			this.specialEffect = this.ball.getChildAt(0), this.specialEffect.active = !1
		}
		static getTrail() {
			this.trail = this.modelScene.getChildByName("Trail"), this.trail.active = !1
		}
		static getBurstEffect() {
			this.burstEffect = this.modelScene.getChildByName("Burst"), this.burstEffect.active = !1
		}
		static getStampEffect() {
			this.burstStampEffect = this.modelScene.getChildByName("BurstStamp"), this.burstStampEffect.active = !1
		}
	}
	class s {
		constructor() {
			this.currScale = 0
		}
		static Instance() {
			return null == this.instance && (this.instance = new s), this.instance
		}
		AdaptiveScreen(t) {
			t.width = Laya.Browser.width, t.height = Laya.Browser.height, Laya.Browser.clientHeight / Laya.Browser.clientWidth - 1.33 <= .004 && (t.scale(.75, .75), this.currScale = .75)
		}
	}
	s.instance = null;
	class a extends Laya.Script {
		constructor() {
			super(), this.isFontMove = !1, this.fontTween = null, this.fontSize1 = 60, this.centerY1 = -100, this.hideBoxTimer = !1, a.instance = this
		}
		onAwake() {
			this.fightUI = this.owner, this.uiBox = this.fightUI.getChildAt(0), this.scoreLabel = this.uiBox.getChildByName("scoreLabel"), this.courseBg = this.uiBox.getChildByName("couseBg"), this.hintTxt1 = this.uiBox.getChildByName("hintTxt1")
		}
		onEnable() {
			s.Instance().AdaptiveScreen(this.uiBox), this.hintTxt1.text = "", this.hintTxt1.visible = !1, Laya.Browser.onIOS && (this.scoreLabel.font = "FZY4JW--GB1-0", this.hintTxt1.font = "FZY4JW--GB1-0")
		}
		onUpdate() { }
		ShowFightUI(t) {
			this.fightUI.visible = t, t ? this.updateScoreInfo(String(T.Instance().score)) : (this.hintTxt1.visible = !1, null != this.fontTween && (this.fontTween.clear(), this.fontTween = null))
		}
		updateScoreInfo(t) {
			this.scoreLabel.changeText(t)
		}
		showHintScoreLabel(t) {
			this.hintTxt1.text = "+ " + String(t), this.hintTxt1.centerY = -200, this.hintTxt1.fontSize = 60, this.hintTxt1.visible = !0, null != this.fontTween && this.fontTween.clear(), this.fontTween = Laya.Tween.to(this.hintTxt1, {
				centerY: -450,
				fontSize: 100
			}, 500, null, Laya.Handler.create(this, () => {
				this.hintTxt1.fontSize = 60, this.hintTxt1.visible = !1, this.fontTween.clear(), this.fontTween = null
			}))
		}
		showCourse(t) {
			console.log("显示教程    0"), this.courseBg.visible = !0, this.courseBg.skin = t
		}
		hideCourse() {
			console.log("影藏教程   0"), !this.hideBoxTimer && this.courseBg.visible && (this.hideBoxTimer = !0, Laya.timer.once(3e3, this, () => {
				console.log("影藏教程    1"), this.courseBg.visible = !1, this.hideBoxTimer = !1
			}))
		}
	}
	a.instance = null;
	class n {
		constructor() { }
		static ShowShareMenu(t = !1, e) {
			kt.showShareMenu(t, e)
		}
		static ShareGame(t = null, e, i = null) {
			kt.shareAppMessage("", t, e, i)
		}
		static PostMessage(t) { }
		static LoadSubpackage(t, e) {
			e && e()
		}
		static SetVibration(t = !0, e = null) {
			kt.vibrate(t)
		}
		static CreateRewardAd() { }
		static callBack_AdClosed(t) {
			this.callBack_Success && this.callBack_Success()
			/*t && t.isEnded || void 0 === t ? (this.callBack_Success && this.callBack_Success(), this.isHasAd = !1, this.CreateRewardAd()) : (this.callBack_Fail && this.callBack_Fail(), console.log("未看完广告"), this.isHasAd = !1, this.CreateRewardAd())*/
		}
		static ShowRewardAd(t, e = null) {
			/*kt.showVideoAd(t, e)*/
		}
		static CreateBanner() { }
		static ShowBanner() {
			kt.showBanner()
		}
		static HideBanner() {
			kt.hideBanner()
		}
		static CreateInterstitialAd() { }
		static showInterstitialAd() {
			kt.showInterstitialAd()
		}
		static createGridAd() { }
		static showGridAd() { }
		static hideGridAd() { }
		static playSound(t) {
			bt.getSoundData() && !T.Instance().isHide && Laya.SoundManager.playSound(t)
		}
		static playBGM(t, e = !0) {
			bt.getSoundData() ? (console.log("播放音效    2"), Laya.SoundManager.playMusic(t)) : Laya.SoundManager.stopMusic()
		}
		static loadFont(t) {
			kt.loadFont(t)
		}
		static showToast(t, e = "none", i = 2e3, s = !1, a = null) {
			kt.showToast(t, e, i)
		}
	}
	n.openDataContext = null, n.userInfo = null, n.gameListData = null, n.maxIndex = 0, n.indexQR = 0, n.rewardAd = null, n.isHasAd = !1, n.bannerAd = null, n.gridAd = null, n.wxAudio1 = null, n.wxAudio2 = null, n.wxAudio3 = null, n.wxAudio4 = null, n.wxAudio5 = null, n.wxBGMAudio = null, n.audioIndex = 0, n.callBack_Success = null, n.callBack_Fail = null, n.interstitialAd = null, n.isHasGridAd = !1;
	class o extends Laya.Script3D {
		constructor() {
			super(), this.v0 = 20, this.jumpSpeed = 20, this.moveSpeed = new Laya.Vector3(0, 0, 0), this.a_speed = .9, this.rotateV3 = new Laya.Vector3(1, .5, 0), this.specialState = 0, this.passCount = 0, this.scaleSpeed = .005, this.isDie = !1, this.gameMode = "0"
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onStart() { }
		onUpdate() {
			this.isDie || (Math.abs(this.jumpSpeed) <= 25 && (this.jumpSpeed -= this.a_speed), this.moveSpeed.setValue(0, .01 * this.jumpSpeed, 0), this.selfModel.transform.translate(this.moveSpeed, !1), this.selfModel.transform.localScaleX >= .24 && (this.scaleSpeed = -.005), this.selfModel.transform.localScaleX <= .2 && (this.scaleSpeed = .005), this.selfModel.transform.localScaleX += this.scaleSpeed, this.selfModel.transform.localScaleY -= this.scaleSpeed, "0" == T.Instance().gameMode ? T.Instance().turntableArray[0] && T.Instance().turntableArray[0].transform.position.y - this.selfModel.transform.position.y >= 1 && (T.Instance().NextTurntable(!1), this.passCount++, a.instance.showHintScoreLabel(this.passCount), this.passCount >= 3 && 1 != this.specialState && (this.specialState = 1, i.specialEffect.active = !0)) : "1" == T.Instance().gameMode && T.Instance().boardArray[0] && T.Instance().boardArray[0].transform.position.y - this.selfModel.transform.position.y >= 5 && (this.isDie = !0, n.playSound(bt.gameover), T.Instance().setGameOver()))
		}
		onTriggerEnter(t) {
			switch (T.Instance().gameMode) {
				case "0":
					if (T.Instance().turntableArray[0] && T.Instance().turntableArray[0].transform.position.y > this.selfModel.transform.position.y) return;
					if ("Turntable" == t.owner.name) {
						switch (this.specialState) {
							case 0:
								this.jumpSpeed = this.v0;
								break;
							case 1:
								this.jumpSpeed = this.v0 / 2, T.Instance().NextTurntable(!0), i.specialEffect.active = !1, this.specialState = 0
						}
						this.passCount = 0, n.playSound("subPackage/res/FallAudio/jump2.mp3"), n.SetVibration(!0), T.Instance().CreateBurstEffect(this.selfModel.transform.position, t.owner.transform.position), T.Instance().CreateStampEffect(t.owner.parent)
					} else if ("SpecialPart" == t.owner.name) {
						switch (this.specialState) {
							case 0:
								this.isDie = !0, T.Instance().setGameOver(), n.playSound(bt.gameover), n.SetVibration(!1);
								break;
							case 1:
								this.jumpSpeed = this.v0 / 2, T.Instance().NextTurntable(!0), i.specialEffect.active = !1, this.specialState = 0, n.playSound(bt.jump2), n.SetVibration(!0)
						}
						this.passCount = 0, T.Instance().CreateBurstEffect(this.selfModel.transform.position, t.owner.transform.position), T.Instance().CreateStampEffect(t.owner.parent)
					}
					break;
				case "1":
					if ("Turntable" == t.owner.name)
						if (t.owner.transform.position.y > this.selfModel.transform.position.y) Laya.Vector3.distance(t.owner.transform.position, this.selfModel.transform.position) >= .31 && (this.jumpSpeed = -this.jumpSpeed, n.playSound(bt.jump2), n.SetVibration(!0));
						else if (Laya.Vector3.distance(t.owner.transform.position, this.selfModel.transform.position) >= .451) {
							if (this.jumpSpeed > 0 && this.jumpSpeed < 30) return;
							this.jumpSpeed = this.v0, this.currTargetBoard && this.currTargetBoard != t.owner.parent && T.Instance().NextSpringBoard(), this.currTargetBoard = t.owner.parent, T.Instance().CreateBurstEffect(this.selfModel.transform.position, t.owner.transform.position), T.Instance().CreateStampEffect(t.owner.parent), n.playSound(bt.jump2), n.SetVibration(!0)
						}
			}
			"-1" != T.Instance().gameMode || "Cylinder" != t.owner.name && "Turntable" != t.owner.name || T.Instance().isGameOver && (this.jumpSpeed = this.v0, T.Instance().CreateBurstEffect(this.selfModel.transform.position, t.owner.transform.position), T.Instance().CreateStampEffect(t.owner), n.playSound(bt.jump2), n.SetVibration(!0))
		}
	}
	class r {
		constructor() { }
		static getRNFormRange(t, e, i) {
			if (t > e - i || e < i) return console.log("输入有误！请检查！"), null;
			var s = [],
				a = [],
				n = e - i;
			for (let t = 0; t < n; t++) a[t] = i + t;
			var o = a.length;
			for (let e = 0; e < t; e++) {
				var r = Math.floor(Math.random() * o);
				s[e] = a[r], a[r] = a[o - 1], a.pop(), o--
			}
			return s
		}
		static getRNFromArray(t, e) {
			if (t > e.length) return console.log("输入错误，请检查！"), null;
			var i = [],
				s = e.length;
			for (let n = 0; n < t; n++) {
				var a = Math.floor(Math.random() * s);
				i[n] = e[a], e[a] = e[s - 1], e.pop(), s--
			}
			return i
		}
		static AnalysisTimeStamp() {
			var t = new Date(Laya.Browser.now()),
				e = String(t.getFullYear()),
				i = String(t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1),
				s = String(t.getDate() < 10 ? "0" + t.getDate() : t.getDate());
			t.getHours(), t.getHours(), t.getMinutes(), t.getMinutes(), t.getSeconds(), t.getSeconds();
			return e + i + s
		}
	}
	class h {
		constructor() { }
		static getItemBySign(t, e) {
			return this._containSign(t) ? this.ItemPool[t].length >= 1 ? this.tempItem = this.ItemPool[t].shift() : this.tempItem = Laya.Sprite3D.instantiate(e) : (this._addSign(t), this.tempItem = Laya.Sprite3D.instantiate(e)), this.tempItem
		}
		static getItemByClass(t, e) {
			return this._containSign(t) ? this.ItemPool[t].length >= 1 ? this.tempItem = this.ItemPool[t].shift() : this.tempItem = new e : (this._addSign(t), this.tempItem = new e), this.tempItem
		}
		static recoveryItemBySign(t, e) {
			this._containSign(t) ? (e.active && (e.active = !1), e.visible && (e.visible = !1), e.removeSelf(), this.ItemPool[t].push(e)) : (this._addSign(t), e.active && (e.active = !1), e.visible && (e.visible = !1), e.removeSelf(), this.ItemPool[t].push(e))
		}
		static _containSign(t) {
			return t in this.ItemPool
		}
		static _addSign(t) {
			this._containSign(t) || (this.ItemPool[t] = [])
		}
	}
	h.ItemPool = {}, h.tempItem = null;
	class l extends Laya.Script3D {
		constructor() {
			super(), this.orderNum = 0, this.isClear = !1, this.tablePartSpeed = new Laya.Vector3(-.6, 0, 0), this.tableRotateSpeed = new Laya.Vector3(0, 2, 0), this.clearColor = new Laya.Vector4(.99, .99, .84, 1)
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onStart() {
			this.selfModel.transform.localPosition = new Laya.Vector3(0, 0, 0), this.selfModel.transform.localRotationEulerY = 36 * this.orderNum
		}
		onUpdate() {
			this.isClear && (this.selfModel.transform.translate(this.tablePartSpeed, !0), this.selfModel.transform.rotate(this.tableRotateSpeed, !0, !1))
		}
		setPartClear(t) {
			this.isClear = !0, t && (this.selfModel.meshRenderer.material.albedoColor = this.clearColor)
		}
	}
	class c extends Laya.Script3D {
		constructor() {
			super(), this.isMouseDown = !0, this.isMouesUp = !1, this.rotateSpeed = 0, this.rotateSpeedV3 = new Laya.Vector3(0, 0, 0), this.lastPosx = 0, this.hideNum = 0, this.specialNum = 0, this.tablePartIndexs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], this.hidePartIndexs = [], this.specialPartIndexs = [], this.isClear = !1, this.tableParts = [], this.abColor = new Laya.Vector4(.25, .53, .76, 1), this.spePartColor = new Laya.Vector4(.79, .4, .8, 1), this.rotaV3 = new Laya.Vector3(0, 0, 0), this.isFirstTable = !1, this.isTimeOnceFun = !1, this.timeOnceFun = 0, this.maxTimeOnceFun = 0
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onStart() {
			Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.OnMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.OnMouseUp), Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.OnMouseOut);
			for (let t = 0; t < 10; t++) this.tableParts.push(this.selfModel.getChildAt(t)), this.tempPartCtrl = this.selfModel.getChildAt(t).addComponent(l), this.tempPartCtrl.orderNum = t;
			this.setTurntableConfig()
		}
		onUpdate() {
			if (!this.isClear) {
				if (T.Instance().isGameOver) return;
				this.isMouseDown && !this.isMouesUp && (this.rotateSpeed = Laya.stage.mouseX - this.lastPosx, Math.abs(this.rotateSpeed) >= 40 && (this.rotateSpeed = 0), this.lastPosx = Laya.stage.mouseX, Math.abs(this.rotateSpeed) > 1 && (this.rotateSpeedV3.setValue(0, .6 * this.rotateSpeed, 0), this.selfModel.transform.rotate(this.rotateSpeedV3, !0, !1), a.instance.hideCourse()))
			}
			this.isTimeOnceFun && (this.timeOnceFun += Laya.timer.delta, this.timeOnceFun >= this.maxTimeOnceFun && (this.isTimeOnceFun = !1, this.timeOnceFun = 0, this.selfModel.active = !1, this.recoveryTable()))
		}
		setTableClear(t) {
			this.selfModel.name = "ClearTable", this.isClear = !0;
			for (let e = 0; e < 10; e++) this.tableParts[e].name = "ClearTable", t ? this.tableParts[e].getComponent(l).setPartClear(!0) : this.tableParts[e].getComponent(l).setPartClear(!1);
			this.isTimeOnceFun = !0, this.maxTimeOnceFun = 800
		}
		recoveryTable() {
			for (let t = 0; t < 10; t++) this.rotateSpeedV3.setValue(0, 0, 0), this.tableParts[t].active = !0, this.tableParts[t].meshRenderer.material.albedoColor = this.abColor, this.tableParts[t].transform.localPosition = this.rotateSpeedV3, this.tableParts[t].transform.localRotationEulerY = 36 * t, this.tableParts[t].getComponent(l) && this.tableParts[t].getComponent(l).destroy(), this.tableParts[t].name = "Turntable";
			this.selfModel.transform.position = this.rotateSpeedV3, h.recoveryItemBySign("Turntable", this.selfModel)
		}
		setTurntableConfig() {
			this.hideNum = Math.floor(6 * Math.random() + 1), this.specialNum = Math.floor(2 * Math.random() + 1), T.Instance().score <= 150 && (this.specialNum = 1), this.isFirstTable ? (this.hidePartIndexs = [3], this.selfModel.transform.rotationEuler = this.rotaV3) : this.hidePartIndexs = r.getRNFromArray(this.hideNum, this.tablePartIndexs), T.Instance().tableCount <= 8 || this.isFirstTable ? this.specialPartIndexs = [] : this.specialPartIndexs = r.getRNFromArray(this.specialNum, this.tablePartIndexs);
			for (let t = 0; t < this.hidePartIndexs.length; t++) this.selfModel.getChildAt(this.hidePartIndexs[t]).active = !1;
			for (let t = 0; t < this.specialPartIndexs.length; t++) this.tempPart = this.selfModel.getChildAt(this.specialPartIndexs[t]), this.tempPart.name = "SpecialPart", this.tempPart.meshRenderer.material.albedoColor = this.spePartColor
		}
		OnMouseDown() {
			this.lastPosx = Laya.stage.mouseX, this.isMouseDown || (this.isMouseDown = !0, this.isMouesUp = !1)
		}
		OnMouseUp() {
			this.isMouesUp || (this.isMouesUp = !0, this.isMouseDown = !1)
		}
		OnMouseOut() {
			this.isMouesUp || (this.isMouesUp = !0, this.isMouseDown = !1)
		}
	}
	class d extends Laya.Script3D {
		constructor() {
			super(), this.cameraPos = new Laya.Vector3(0, 0, 0), this.cameraSpeed = -.2, this.spV3 = new Laya.Vector3(0, 0, 0)
		}
		onAwake() {
			this.camera = this.owner
		}
		onStart() {
			this.cameraPos.setValue(this.camera.transform.position.x, this.camera.transform.position.y, this.camera.transform.position.z)
		}
		onUpdate() {
			this.camera.transform.position.y != this.cameraPos.y && (this.spV3.setValue(0, this.cameraSpeed, 0), this.camera.transform.translate(this.spV3, !1), Math.abs(this.camera.transform.position.y - this.cameraPos.y) <= .05 && (this.camera.transform.position = this.cameraPos))
		}
		setCameraMove(t) {
			this.cameraPos.setValue(this.cameraPos.x, this.cameraPos.y - t, this.cameraPos.z)
		}
		SetTweenMove(t, e, i, s) {
			switch (t) {
				case "0":
					this.cameraSpeed = -.2;
					break;
				case "1":
					this.cameraSpeed = .2
			}
			this.camera.transform.position = e, this.camera.transform.rotationEuler = i, this.cameraPos.setValue(this.camera.transform.position.x, this.camera.transform.position.y, this.camera.transform.position.z), null != s && s()
		}
		setCameraMoveMode(t) {
			switch (t) {
				case "0":
					this.cameraSpeed = -.2;
					break;
				case "1":
					this.cameraSpeed = .2
			}
		}
		setCameraPos(t) {
			this.cameraPos.setValue(this.cameraPos.x, this.cameraPos.y + t, this.cameraPos.z), this.camera.transform.position = this.cameraPos
		}
		ResetTrans() {
			this.cameraPos.setValue(-30, -90, 0), this.camera.transform.rotationEuler = this.cameraPos, this.cameraPos.setValue(-12, 10, 0), this.camera.transform.position = this.cameraPos
		}
		ResetPos_Down() {
			this.cameraPos.setValue(-12, 10, 0), this.camera.transform.position = this.cameraPos
		}
		ResetPos_Up() {
			this.cameraPos.setValue(-12, 10, 0), this.camera.transform.position = this.cameraPos
		}
	}
	class u extends Laya.Script3D {
		constructor() {
			super(), this.selfModelPos = new Laya.Vector3(0, 0, 0), this.selfModelSpeed = -.2, this.spV3 = new Laya.Vector3(0, 0, 0)
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onStart() {
			this.selfModelPos.setValue(this.selfModel.transform.position.x, this.selfModel.transform.position.y, this.selfModel.transform.position.z)
		}
		onUpdate() {
			this.selfModel.transform.position.y != this.selfModelPos.y && (this.spV3.setValue(0, this.selfModelSpeed, 0), this.selfModel.transform.translate(this.spV3, !1), Math.abs(this.selfModel.transform.position.y - this.selfModelPos.y) <= .05 && (this.selfModel.transform.position = this.selfModelPos))
		}
		setselfModelMove(t) {
			this.selfModelPos.setValue(this.selfModelPos.x, this.selfModelPos.y - t, this.selfModelPos.z), this.selfModelSpeed = t < 0 ? .2 : -.2
		}
		setCylinderPos(t) {
			this.selfModelPos.setValue(this.selfModelPos.x, this.selfModelPos.y + t, this.selfModelPos.z), this.selfModel.transform.position = this.selfModelPos
		}
		ResetTrans() {
			this.selfModelPos.setValue(0, -15, 0), this.selfModel.transform.position = this.selfModelPos
		}
	}
	class g extends Laya.Script3D {
		constructor() {
			super(), this.isMouseDown = !0, this.isMouesUp = !1, this.rotateSpeed = 0, this.rotateSpeedV3 = new Laya.Vector3(0, 0, 0), this.lastPosx = 0, this.moveV3 = new Laya.Vector3(0, -.2, 0), this.orderNum = 0, this.rotEulerY = 10, this.isTweenToEulerY = !1, this.isClear = !1, this.rotaV3 = new Laya.Vector3(0, 0, 0), this.isTimeOnceFun = !1, this.timeOnceFun = 0, this.maxTimeOnceFun = 0
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onStart() {
			Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.OnMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.OnMouseUp), Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.OnMouseOut), this.orderNum > 4 && (this.rotaV3.setValue(0, this.rotEulerY, 0), this.selfModel.transform.rotate(this.rotaV3, !0, !1))
		}
		onUpdate() {
			if (this.isClear) this.selfModel.transform.translate(this.moveV3, !1);
			else {
				if (T.Instance().isGameOver) return this.isMouseDown = !1, this.isMouesUp = !0, void (this.rotateSpeed = 0);
				T.Instance().isUpModelStart && T.Instance().isStartGame_UpMode ? this.isMouseDown && !this.isMouesUp && (this.rotateSpeed = Laya.stage.mouseX - this.lastPosx, this.rotateSpeed >= 80 && (this.rotateSpeed = 0), this.lastPosx = Laya.stage.mouseX, Math.abs(this.rotateSpeed) > 1 && (this.rotateSpeedV3.setValue(0, .5 * this.rotateSpeed, 0), this.selfModel.transform.rotate(this.rotateSpeedV3, !0, !1), a.instance.hideCourse())) : (this.isMouseDown = !1, this.isMouesUp = !0, this.rotateSpeed = 0)
			}
			T.Instance().isStartTween && this.isTweenToEulerY && (this.isTweenToEulerY = !1, this.BoardTween()), this.isTimeOnceFun && (this.timeOnceFun += Laya.timer.delta, this.timeOnceFun >= this.maxTimeOnceFun && (this.isTimeOnceFun = !1, this.timeOnceFun = 0, this.selfModel.active = !1, h.recoveryItemBySign("Springboard", this.selfModel)))
		}
		BoardTween() {
			Laya.Tween.to(this.selfModel.transform, {
				localRotationEulerY: this.rotEulerY
			}, 800, null, Laya.Handler.create(this, () => {
				T.Instance().isUpModelStart = !0
			}))
		}
		setBoardClear() {
			this.isClear = !0, this.isTimeOnceFun = !0, this.maxTimeOnceFun = 1500
		}
		OnMouseDown() {
			this.lastPosx = Laya.stage.mouseX, this.isMouseDown || (this.isMouseDown = !0, this.isMouesUp = !1)
		}
		OnMouseUp() {
			this.isMouesUp || (this.isMouesUp = !0, this.isMouseDown = !1)
		}
		OnMouseOut() {
			this.isMouesUp || (this.isMouesUp = !0, this.isMouseDown = !1)
		}
	}
	class m extends Laya.Script3D {
		constructor() {
			super(), this.isTimeOnceFun = !1, this.timeOnceFun = 0, this.maxTimeOnceFun = 0
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onStart() {
			this.isTimeOnceFun = !0, this.maxTimeOnceFun = 3e3
		}
		onUpdate() {
			this.isTimeOnceFun && (this.timeOnceFun += Laya.timer.delta, this.timeOnceFun >= this.maxTimeOnceFun && (this.isTimeOnceFun = !1, this.timeOnceFun = 0, h.recoveryItemBySign("BurstEffect", this.selfModel)))
		}
	}
	class b extends Laya.Script3D {
		constructor() {
			super(), this.isTimeOnceFun = !1, this.timeOnceFun = 0, this.maxTimeOnceFun = 0
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onStart() {
			this.isTimeOnceFun = !0, this.maxTimeOnceFun = 5e3
		}
		onUpdate() {
			this.selfModel.active && this.selfModel.transform.position.y - i.ball.transform.position.y >= 1 && (this.selfModel.active = !1, h.recoveryItemBySign("StampEffect", this.selfModel)), this.selfModel.parent && !this.selfModel.parent.active && (this.selfModel.active = !1, h.recoveryItemBySign("StampEffect", this.selfModel)), this.isTimeOnceFun && (this.timeOnceFun += Laya.timer.delta, this.timeOnceFun >= this.maxTimeOnceFun && (this.isTimeOnceFun = !1, this.timeOnceFun = 0, h.recoveryItemBySign("StampEffect", this.selfModel)))
		}
	}
	class p extends Laya.Script {
		constructor() {
			super(), p.instance = this
		}
		onAwake() {
			this.relifeUI = this.owner, this.uiBox = this.relifeUI.getChildAt(1), this.relifeBtn = this.uiBox.getChildByName("relifeBtn"), this.relifeBtn_Coin = this.uiBox.getChildByName("relifeBtn_Coin"), this.scoreLabel = this.uiBox.getChildByName("scoreLabel"), this.skipBtn = this.uiBox.getChildByName("skipBtn")
		}
		onStart() {
			this.relifeBtn.on(Laya.Event.CLICK, this, this.relifeBtnClick), this.relifeBtn_Coin.on(Laya.Event.CLICK, this, this.relifeBtn_CoinClick), this.skipBtn.on(Laya.Event.CLICK, this, this.skipBtnClick), s.Instance().AdaptiveScreen(this.uiBox)
		}
		ShowRelifeUI(t, e = "0") {
			t ? (this.relifeBtn.disabled = !1, this.relifeBtn.visible, this.relifeBtn.visible = !0, this.scoreLabel.changeText(String(T.Instance().score)), n.ShowBanner(), this.skipBtn.visible = !0, this.relifeUI.visible = t) : (this.relifeUI.visible = t, n.HideBanner(), n.hideGridAd())
		}
		relifeBtnClick() {
			switch (T.Instance().gameMode) {
				case "0":
					T.Instance().GameRelife_DownMode(), this.ShowRelifeUI(!1)
					/*n.ShowRewardAd(() => {
						T.Instance().GameRelife_DownMode(), this.ShowRelifeUI(!1)
					}, () => {
						n.showToast("Get rewarded after watching the video", "none", 1500)
					});*/
					break;
				case "1":
					T.Instance().GameRelife_UpMode(), this.ShowRelifeUI(!1)
					/*n.ShowRewardAd(() => {
						T.Instance().GameRelife_UpMode(), this.ShowRelifeUI(!1)
					}, () => {
						n.showToast("Get rewarded after watching the video", "none", 1500)
					})*/
			}
			n.playSound(bt.btnAudio)
		}
		relifeBtn_CoinClick() { }
		skipBtnClick() {
			this.ShowRelifeUI(!1), Laya.timer.once(350, this, () => {
				T.Instance().currRelifeCount = 3, T.Instance().setGameOver(), n.playSound(bt.btnAudio)
			})
		}
	}
	p.instance = null;
	class B extends Laya.Script {
		constructor() {
			super(), this.skinData = null, this.currSelectIndex = 0, this.isSelect = !1, this.skinItem_UI = "", this.isTryUseSkin = !1, this.isBtnCD_StoreItem = !1, this.btnCdTime_StoreItem = .5, this.tempSkinArrs = [], this.shadowScale = 1, this.shadowY = 45, this.skinSSign = !1, B.instance = this
		}
		onAwake() {
			this.storeUI = this.owner, this.uiBox = this.storeUI.getChildAt(1), this.storeBg = this.uiBox.getChildAt(0), this.closeBtn = this.storeBg.getChildByName("closeBtn"), this.skinLisk = this.storeBg.getChildByName("skinList"), this.buyBtn = this.storeBg.getChildByName("buyBtn"), this.useBtn = this.storeBg.getChildByName("useBtn"), this.otherBtn = this.storeBg.getChildByName("otherBtn"), this.speSkinHint = this.storeBg.getChildByName("speSkinHint"), this.speSkinTxt = this.speSkinHint.getChildAt(0), this.coinLabel = this.buyBtn.getChildByName("coinLabel"), this.showCoinImg = this.uiBox.getChildByName("coinShowImg"), this.showCoinTxt = this.showCoinImg.getChildByName("coinTxt"), this.getCoin_Test = this.storeBg.getChildByName("getCoin_Test")
		}
		onEnable() {
			this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtnClick), this.buyBtn.on(Laya.Event.CLICK, this, this.buyBtnClick), this.useBtn.on(Laya.Event.CLICK, this, this.useBtnClick), this.otherBtn.on(Laya.Event.CLICK, this, this.otherBtnClick), this.showCoinImg.getChildByName("add").on(Laya.Event.CLICK, this, this.coinBtnClick), this.getCoin_Test.on(Laya.Event.CLICK, this, this.getCoin_TestClick), Laya.Browser.clientHeight / Laya.Browser.clientWidth - 1.33 <= .004 && this.uiBox.scale(.7, .7), Laya.Browser.clientHeight / Laya.Browser.clientWidth >= 2 && (this.showCoinImg.top += 100), this.initStore()
		}
		onUpdate() {
			this.isBtnCD_StoreItem && (this.btnCdTime_StoreItem -= Laya.timer.delta / 1e3, this.btnCdTime_StoreItem <= 0 && (this.btnCdTime_StoreItem = .5, this.isBtnCD_StoreItem = !1))
		}
		getCoin_TestClick() {
			bt.addCoin(1e4)
		}
		initStore() {
			this.skinLisk.vScrollBarSkin = "", this.skinLisk.selectEnable = !0, this.skinData = bt.getSkinInfoData(), this.currSelectIndex = this.skinData.currUseIndex, this.checkCurrData_SpeDay(), T.Instance().ChangeBallSkin(String(this.currSelectIndex)), this.setStoreData(this.skinData), this.setBtnState(this.currSelectIndex)
		}
		setStoreData(t) {
			var e = [];
			for (let i = 0; i < t.skinData.length; i++) i == this.currSelectIndex ? this.isSelect = !0 : this.isSelect = !1, t.skinData[i].isOwn ? this.skinItem_UI = "UI/storeUI/kuang_has.png" : this.skinItem_UI = "UI/storeUI/kuang_No.png", 5 == t.skinData[i].speType ? this.skinSSign = !0 : this.skinSSign = !1, "4" == t.skinData[i].state && this.isTryUseSkin ? this.skinItem_UI = "UI/storeUI/kaung_try.png" : "4" == t.skinData[i].state && (t.skinData[i].state = "2"), 14 == i || 15 == i || 16 == i ? (this.shadowScale = .5, this.shadowY = 55) : (this.shadowScale = 1, this.shadowY = 45), e.push({
				selectItem: {
					visible: this.isSelect
				},
				skinItem: this.skinItem_UI,
				skinImg: "Skin/skin" + (i + 1) + ".png",
				ballShadow: {
					scaleX: this.shadowScale,
					scaleY: this.shadowScale,
					centerY: this.shadowY
				},
				skinSSign: {
					visible: this.skinSSign
				},
				itemId: i
			});
			this.skinLisk.dataSource = e, this.skinLisk.refresh()
		}
		setBtnState(t) {
			if (console.log("********", this.currSelectIndex, this.skinData.skinData[this.currSelectIndex]), !(t >= this.skinData.skinData.length || null == t) && (this.speSkinHint.centerX = -146, this.otherBtn.visible = !0, this.currSelectIndex = t, this.buyBtn.visible = !this.skinData.skinData[this.currSelectIndex].isOwn, this.useBtn.visible = this.skinData.skinData[this.currSelectIndex].isOwn, this.skinData.skinData[this.currSelectIndex].isOwn ? (this.buyBtn.visible = !1, this.useBtn.visible = !0, this.speSkinHint.visible = !1) : this.skinData.skinData[this.currSelectIndex].isSpecial ? (this.buyBtn.visible = !1, this.useBtn.visible = !1, this.speSkinHint.visible = !0) : (this.buyBtn.visible = !0, this.useBtn.visible = !1, this.speSkinHint.visible = !1), "4" == this.skinData.skinData[this.currSelectIndex].state && (this.buyBtn.visible = !1, this.useBtn.visible = !0, this.speSkinHint.visible = !1), this.buyBtn.visible ? (this.coinLabel.text = this.skinData.skinData[this.currSelectIndex].coin, this.otherBtn.skin = "UI/storeUI/ad_store.png", this.otherBtn.visible = !0, this.isTryUseSkin && (this.otherBtn.visible = !1, this.otherBtn.skin = "UI/storeUI/ad_store.png")) : (this.otherBtn.visible = !1, "2" == this.skinData.skinData[this.currSelectIndex].state ? this.useBtn.skin = "UI/storeUI/use_store.png" : "3" != this.skinData.skinData[this.currSelectIndex].state || this.isTryUseSkin ? "4" == this.skinData.skinData[this.currSelectIndex].state ? this.useBtn.skin = "UI/storeUI/tryBtn_store.png" : this.useBtn.skin = "UI/storeUI/use_store.png" : this.useBtn.skin = "UI/storeUI/using_Store.png", "UI/storeUI/ad_store.png" == this.otherBtn.skin ? this.useBtn.centerX = 0 : this.useBtn.centerX = -146), this.speSkinHint.visible)) {
				var e = bt.specialType_Profab.specTypes[this.skinData.skinData[this.currSelectIndex].speType];
				switch (this.speSkinTxt.fontSize = 30, e.type) {
					case "lv":
						-1 != e.condition ? this.speSkinTxt.changeText("Level: " + String(this.skinData.skinData[this.currSelectIndex].speCount) + "/" + String(e.condition) + " ") : this.speSkinTxt.changeText("敬请期待");
						break;
					case "day":
						-1 != e.condition ? this.speSkinTxt.changeText("Login: " + String(this.skinData.skinData[this.currSelectIndex].speCount) + "/7") : this.speSkinTxt.changeText("敬请期待");
						break;
					case "relife":
						-1 != e.condition ? this.speSkinTxt.changeText("Revive: " + String(this.skinData.skinData[this.currSelectIndex].speCount) + "/10") : this.speSkinTxt.changeText("敬请期待");
						break;
					case "coinLv":
						-1 != e.condition ? (this.speSkinTxt.changeText(String(this.skinData.skinData[this.currSelectIndex].speCount) + "/10"), this.speSkinTxt.fontSize = 50) : (this.speSkinTxt.changeText("敬请期待"), this.speSkinHint.centerX = 0, this.otherBtn.visible = !1);
						break;
					case "limit":
						-1 != e.condition ? this.speSkinTxt.text = "Limited Skin" : this.speSkinTxt.text = "敬请期待"
				}
			}
		}
		showStoreUI(t) {
			this.storeUI.visible = t, t ? (this.checkCurrData_SpeLv(), this.currSelectIndex = this.skinData.currUseIndex, this.setStoreData(this.skinData), this.setBtnState(this.currSelectIndex), this.updateCoinInfo(), this.skinLisk.scrollBar.value = .4, n.HideBanner()) : n.ShowBanner()
		}
		closeBtnClick() {
			this.showStoreUI(!1)
		}
		coinBtnClick() {
			n.playSound(bt.btnAudio),
			n.showToast("Get coins:200", "none", 2e3), bt.addCoin(200)
			/*n.ShowRewardAd(() => {
				n.showToast("Get coins:200", "none", 2e3), bt.addCoin(200)
			}, () => {
				n.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/
		}
		buyBtnClick() {
			var t = bt.getCoinData();
			t >= Number(this.coinLabel.text) ? (t -= Number(this.coinLabel.text), bt.setCoinData(t), this.skinData.skinData[this.currSelectIndex].isOwn = !0, this.skinData.skinData[this.currSelectIndex].state = "2", bt.setSkinInfoData(this.skinData), this.setStoreData(this.skinData), this.setBtnState(this.currSelectIndex)) : n.showToast("Gold coins inadequate", "none", 1500)
		}
		useBtnClick() {
			"UI/storeUI/use_store.png" == this.useBtn.skin ? (this.useBtn.skin = "UI/storeUI/using_Store.png", this.skinData.skinData[this.skinData.currUseIndex].state = "2", this.skinData.currUseIndex = this.currSelectIndex, this.skinData.skinData[this.currSelectIndex].state = "3", bt.setSkinInfoData(this.skinData), this.isTryUseSkin = !1, B.instance.setStoreData(this.skinData), T.Instance().ChangeBallSkin(String(this.currSelectIndex))) : console.log("正在使用中")
		}
		otherBtnClick() {
			if ("UI/storeUI/ad_store.png" == this.otherBtn.skin)
				T.Instance().ChangeBallSkin(String(B.instance.currSelectIndex)), n.showToast("Skin Trial Successful", "none", 1500), B.instance.otherBtn.skin = "UI/storeUI/ad_store.png", B.instance.isTryUseSkin = !0, B.instance.skinData.skinData[B.instance.currSelectIndex].state = "4", B.instance.setStoreData(B.instance.skinData), B.instance.setBtnState(B.instance.currSelectIndex)
				/*n.ShowRewardAd(() => {
				T.Instance().ChangeBallSkin(String(B.instance.currSelectIndex)), n.showToast("Skin Trial Successful", "none", 1500), B.instance.otherBtn.skin = "UI/storeUI/ad_store.png", B.instance.isTryUseSkin = !0, B.instance.skinData.skinData[B.instance.currSelectIndex].state = "4", B.instance.setStoreData(B.instance.skinData), B.instance.setBtnState(B.instance.currSelectIndex)
			}, () => {
				n.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/;
			else {
				var t = bt.getShareWord();
				n.ShareGame(bt.shareWords[t - 1], "subPackage/res/shareImg" + String(t) + ".jpg")
			}
		}
		updateCoinInfo() {
			this.showCoinTxt.text = bt.getCoinData().toString()
		}
		checkCurrData_SpeLv() {
			for (let t = 0; t < this.skinData.skinData.length; t++)
				if (this.skinData.skinData[t].isSpecial && "lv" == bt.specialType_Profab.specTypes[this.skinData.skinData[t].speType].type) {
					if (this.skinData.skinData[t].isOwn) continue;
					this.skinData.skinData[t].speCount = T.Instance().score - 1, this.skinData.skinData[t].speCount >= bt.specialType_Profab.specTypes[this.skinData.skinData[t].speType].condition && (this.skinData.skinData[t].isOwn = !0, n.showToast("Congrats on the new skin! Try it now", "none", 2e3)), bt.setSkinInfoData(this.skinData)
				}
		}
		checkCurrData_SpeDay() {
			var t = Laya.LocalStorage.getItem("FallGETSKINDAY");
			if ("" == t || null == t || null == t) {
				t = r.AnalysisTimeStamp(), Laya.LocalStorage.setItem("FallGETSKINDAY", t);
				for (let t = 0; t < this.skinData.skinData.length; t++)
					if (this.skinData.skinData[t].isSpecial && "day" == bt.specialType_Profab.specTypes[this.skinData.skinData[t].speType].type) {
						if (this.skinData.skinData[t].isOwn) continue;
						this.skinData.skinData[t].speCount += 1, this.skinData.skinData[t].speCount >= bt.specialType_Profab.specTypes[this.skinData.skinData[t].speType].condition && (this.skinData.skinData[t].isOwn = !0, n.showToast("Congrats on the new skin! Try it now", "none", 2e3)), bt.setSkinInfoData(this.skinData)
					}
			} else if (t != r.AnalysisTimeStamp()) {
				Laya.LocalStorage.setItem("FallGETSKINDAY", r.AnalysisTimeStamp());
				for (let t = 0; t < this.skinData.skinData.length; t++)
					if (this.skinData.skinData[t].isSpecial && "day" == bt.specialType_Profab.specTypes[this.skinData.skinData[t].speType].type) {
						if (this.skinData.skinData[t].isOwn) continue;
						this.skinData.skinData[t].speCount += 1, this.skinData.skinData[t].speCount >= bt.specialType_Profab.specTypes[this.skinData.skinData[t].speType].condition && (this.skinData.skinData[t].isOwn = !0, n.showToast("Congrats on the new skin! Try it now", "none", 2e3)), bt.setSkinInfoData(this.skinData)
					}
			}
		}
		checkCurrData_SpeRelife() {
			for (let t = 0; t < this.skinData.skinData.length; t++)
				if (this.skinData.skinData[t].isSpecial && "relife" == bt.specialType_Profab.specTypes[this.skinData.skinData[t].speType].type) {
					if (this.skinData.skinData[t].isOwn) continue;
					this.skinData.skinData[t].speCount += 1, !this.skinData.skinData[t].isOwn && this.skinData.skinData[t].speCount >= bt.specialType_Profab.specTypes[this.skinData.skinData[t].speType].condition && (this.skinData.skinData[t].isOwn = !0, n.showToast("Congrats on the new skin! Try it now", "none", 2e3)), bt.setSkinInfoData(this.skinData)
				}
		}
		getCoinLvSkin() {
			for (let t = 0; t < this.skinData.skinData.length; t++)
				if (this.skinData.skinData[t].isSpecial && "coinLv" == bt.specialType_Profab.specTypes[this.skinData.skinData[t].speType].type) {
					if (this.skinData.skinData[t].isOwn) continue;
					this.tempSkinArrs.push(t)
				} var t = -1;
			this.tempSkinArrs.length > 0 && (t = this.tempSkinArrs[Math.floor(Math.random() * this.tempSkinArrs.length)]);
			var e = this.tempSkinArrs.length;
			for (let t = 0; t < e; t++) this.tempSkinArrs.pop();
			return t
		}
		getNewSkinS(t, e) {
			this.skinData.skinData[t] && (this.skinData.skinData[t].speCount += e, this.skinData.skinData[t].speCount >= 10 && (this.skinData.skinData[t].isOwn = !0, n.showToast("Congrats on the new skin! Try it now", "none", 2e3)), bt.setSkinInfoData(this.skinData))
		}
		UIPos() {
			this.storeBg.top += 150, this.showCoinImg.top += 100
		}
	}
	B.instance = null;
	class k extends Laya.Script {
		constructor() {
			super(), this.infiniteCallback = null, k.instance = this
		}
		onAwake() {
			this.mySelf = this.owner, this.base = this.mySelf.getChildByName("base"), this.rate = this.base.getChildByName("rate"), this.closeBtn = this.base.getChildByName("closeBtn"), this.addBtn = this.base.getChildByName("addBtn"), this.closeBtn.on(Laya.Event.CLICK, this, this.onCloseClick), this.addBtn.on(Laya.Event.CLICK, this, this.onAddClick)
		}
		addInfiniteCallback(t) {
			this.infiniteCallback = t
		}
		setRate() {
			let t = St.getInfiniteData();
			t >= 0 ? (this.infiniteCallback && this.infiniteCallback(), this.closeMyself()) : this.rate.text = "ad:" + (t + 3) + "/3"
		}
		onCloseClick() {
			this.closeMyself()
		}
		onAddClick() {
			this.onAddSuccess()
			/*kt.showVideoAd(this.onAddSuccess.bind(this), () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/
		}
		onAddSuccess() {
			St.setInfiniteData(St.getInfiniteData() + 1), St.getInfiniteData() >= 0 ? (St.setInfiniteData(86400), this.infiniteCallback && this.infiniteCallback(), this.closeMyself()) : this.setRate()
		}
		closeMyself() {
			this.mySelf.close()
		}
		onStart() {
			this.setRate()
		}
	}
	k.instance = null;
	const C = Laya.Browser.window.tt;
	let S = {
		setButtonEvents(t, e, i, s, a) {
			C && C.reportAnalytics("button", {
				page: t,
				button_name: e,
				button_type: i,
				level: "" + s,
				model: a
			})
		},
		setLevelEvents(t, e, i) {
			C && C.reportAnalytics("level", {
				type: t,
				level: "" + e,
				model: i
			})
		},
		setPageEvents(t, e, i, s) {
			C && C.reportAnalytics("page", {
				page: t,
				level: String(i),
				model: s,
				type: e
			})
		},
		setSkinEvents(t) {
			C && C.reportAnalytics("SkinID", {
				ID: String(t)
			})
		}
	};
	class y extends Laya.Script {
		constructor() {
			super(), y.instance = this
		}
		onAwake() {
			this.gameoverUI = this.owner, this.uiBox = this.gameoverUI.getChildAt(1), this.restartBtn = this.uiBox.getChildByName("restartBtn"), this.returnGameReadyBtn = this.uiBox.getChildByName("returnGameReadyBtn"), this.currScoreTxt = this.uiBox.getChildByName("currScoreTxt"), this.shareBtn = this.uiBox.getChildByName("showoffBtn")
		}
		onStart() {
			this.restartBtn.on(Laya.Event.CLICK, this, this.restartBtnClick), this.returnGameReadyBtn.on(Laya.Event.CLICK, this, this.returnGameReadyBtnClick), this.shareBtn.on(Laya.Event.CLICK, this, this.shareBtnClick), s.Instance().AdaptiveScreen(this.uiBox)
		}
		ShowGameoverUI(t, e = !1) {
			t ? (this.gameoverUI.visible = t, T.Instance().currUIPanel = "2", bt.getMaxScore() < T.Instance().score && bt.setMaxScore(T.Instance().score), this.currScoreTxt.changeText("Score: " + String(T.Instance().score)), n.ShowBanner()) : (this.gameoverUI.visible = t, n.HideBanner(), n.hideGridAd())
		}
		restartBtnClick() {
			if (St.getInfiniteData() <= 0) {
				if (St.getPowerData() <= 0) return void Laya.View.load("GameScenes/infinitePower.scene", Laya.Handler.create(this, t => {
					t.open(!1), k.instance.addInfiniteCallback(this.restartBtnClick.bind(this))
				}));
				St.setPowerData(St.getPowerData() - 1)
			}
			this.ShowGameoverUI(!1), Laya.timer.once(150, this, () => {
				T.Instance().RestartGame()
			}), n.playSound(bt.btnAudio)
		}
		returnGameReadyBtnClick() {
			this.ShowGameoverUI(!1), Laya.timer.once(150, this, () => {
				T.Instance().ReturnGameReadyModel()
			}), n.playSound(bt.btnAudio)
		}
		shareBtnClick() {
			n.playSound(bt.btnAudio), kt.GameRecorder_Release(() => {
				S.setButtonEvents("failui", "failui_sharelp_success", 6, -1, ""), this.shareBtn.visible = !1;
				var t = St.getCoinNum();
				t += 2e3, St.setCoinNum(t)
			}, () => { }, () => { })
		}
		storeBtnClick() {
			this.ShowGameoverUI(!1), B.instance.showStoreUI(!0), n.playSound(bt.btnAudio)
		}
	}
	y.instance = null;
	class w extends Laya.Script3D {
		constructor() {
			super(), this.selfModelPos = new Laya.Vector3(0, 0, 0), this.selfModelSpeed = -.2, this.spV3 = new Laya.Vector3(0, 0, 0)
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onStart() {
			this.selfModelPos.setValue(this.selfModel.transform.position.x, this.selfModel.transform.position.y, this.selfModel.transform.position.z)
		}
		onUpdate() {
			this.selfModel.transform.position.y != this.selfModelPos.y && (this.spV3.setValue(0, this.selfModelSpeed, 0), this.selfModel.transform.translate(this.spV3, !1), Math.abs(this.selfModel.transform.position.y - this.selfModelPos.y) <= .05 && (this.selfModel.transform.position = this.selfModelPos))
		}
		setselfModelMove(t) {
			this.selfModelPos.setValue(this.selfModelPos.x, this.selfModelPos.y - t, this.selfModelPos.z), this.selfModelSpeed = t < 0 ? .2 : -.2
		}
		setCylinderPos(t) {
			this.selfModelPos.setValue(this.selfModelPos.x, this.selfModelPos.y + t, this.selfModelPos.z), this.selfModel.transform.position = this.selfModelPos
		}
		ResetTrans() {
			this.selfModelPos.setValue(455, -260, -6), this.selfModel.transform.position = this.selfModelPos
		}
	}
	class I extends Laya.Script3D {
		constructor() {
			super(), this.selfModelPos = new Laya.Vector3(0, 0, 0), this.selfModelSpeed = -.2, this.spV3 = new Laya.Vector3(0, 0, 0)
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onStart() {
			this.selfModelPos.setValue(this.selfModel.transform.position.x, this.selfModel.transform.position.y, this.selfModel.transform.position.z)
		}
		onUpdate() {
			this.selfModel.transform.position.y != this.selfModelPos.y && (this.spV3.setValue(0, this.selfModelSpeed, 0), this.selfModel.transform.translate(this.spV3, !1), Math.abs(this.selfModel.transform.position.y - this.selfModelPos.y) <= .05 && (this.selfModel.transform.position = this.selfModelPos))
		}
		setselfModelMove(t) {
			this.selfModelPos.setValue(this.selfModelPos.x, this.selfModelPos.y - t, this.selfModelPos.z), this.selfModelSpeed = t < 0 ? .2 : -.2
		}
		setCylinderPos(t) {
			this.selfModelPos.setValue(this.selfModelPos.x, this.selfModelPos.y + t, this.selfModelPos.z), this.selfModel.transform.position = this.selfModelPos
		}
		ResetTrans() {
			this.selfModelPos.setValue(455, -260, -6), this.selfModel.transform.position = this.selfModelPos
		}
	}
	class f extends Laya.Script {
		constructor() {
			super(), f.instance = this
		}
		onAwake() {
			Laya.SoundManager.useAudioMusic = !1, this.myself = this.owner
		}
		setVisible(t) {
			t ? (this.myself.visible = !0, T.Instance().isHide = !1, n.playBGM(bt.BGM), mt.instance.reSetData()) : (this.myself.visible = !1, T.Instance().isHide = !0, Laya.SoundManager.stopMusic())
		}
		onStart() {
			this.tips = this.myself.getChildByName("Tips"), this.setVisible(!0)
		}
		showTips(t) {
			console.log("show Tips " + t), this.tips.visible = !0, this.tips.getChildByName("txt").text = t, Laya.timer.clear(this, this.tipTimer), Laya.timer.once(2e3, this, this.tipTimer)
		}
		tipTimer() {
			this.tips.visible = !1
		}
	}
	f.instance = null;
	const v = "subPackage/FailingBallModelRes/Conventional/FailingBall.ls";
	class T {
		constructor() {
			this.tempTurntablePos = new Laya.Vector3(0, 0, 0), this.turntableArray = [], this.tableCount = 0, this.isStartGame_UpMode = !1, this.tempBoardPos = new Laya.Vector3(0, 0, 0), this.boardArray = [], this.boardCount = 0, this.rotEulerYs = [], this.isStartTween = !1, this.tempBurstPos = new Laya.Vector3(0, 0, 0), this.tempStampPos = new Laya.Vector3(0, 0, 0), this.maxRelifeCount = 2, this.currRelifeCount = 0, this.isCanShareRelife = !1, this.isGameOver = !0, this.score = 0, this.isUpModelStart = !1, this.gameMode = "0", this.currUIPanel = "1", this.tempV3 = new Laya.Vector3(0, 0, 0), this.isHide = !0, this.isLoad = !1, this.isLoadAll = !1, this.ttv3 = new Laya.Vector3(0, 0, 0)
		}
		static Instance() {
			return null == this.instance && (this.instance = new T), this.instance
		}
		LoadModelRes() {
			Laya.loader.create(v, Laya.Handler.create(this, () => {
				this.modelScene = Laya.loader.getRes(v), this.modelScene.active = !1, Laya.stage.getChildByName("root").addChild(this.modelScene), this.modelScene.zOrder = -1, i.getModelScene(this.modelScene), this.cameraCtrl = i.camera.addComponent(d), this.ballCtrl = i.ball.addComponent(o), this.gameMode = "-1", this.ChangeBallSkin(bt.getCurrBallSkinInfo()), this.tempV3.setValue(-2.2, 6, 0), i.ball.transform.position = this.tempV3, this.ballCtrl.a_speed = 1.1, this.ballCtrl.v0 = 23, this.ballCtrl.jumpSpeed = 23, this.trail = Laya.Sprite3D.instantiate(i.trail, i.ball), this.trail.active = !0, this.tempV3.setValue(0, 0, 0), this.trail.transform.localPosition = this.tempV3, this.CreateTurntable(6), this.cylinderCtrl = i.cylinder.addComponent(u), this.modelBgCtrl = i.gameModelBg.addComponent(w), this.modelBg2Ctrl = i.gameModelBg2.addComponent(I), this.isLoadAll = !0
			}))
		}
		showGame() {
			kt.gameScene = 2, this.isLoad ? f.instance && f.instance.owner && this.modelScene && (this.modelScene.active = !0, f.instance.setVisible(!0)) : (this.isLoad = !0, Laya.Scene.open("Scenes/GameScene.scene", !1), this.modelScene.active = !0)
		}
		hideGame() {
			this.modelScene.active = !1, f.instance.setVisible(!1)
		}
		DownMode() {
			this.gameMode = "0", i.gameModelBg.active = !0, i.gameModelBg2.active = !1, kt.GameRecorder_Start(), 1.1 == this.ballCtrl.a_speed && 23 == this.ballCtrl.v0 || (this.ballCtrl.a_speed = 1.1, this.ballCtrl.v0 = 23), this.trail && this.trail.destroy(), this.trail = Laya.Sprite3D.instantiate(i.trail, i.ball), this.trail.active = !0, this.tempV3.setValue(0, 0, 0), this.trail.transform.localPosition = this.tempV3, this.tableCount = 0, this.cameraCtrl.setCameraMoveMode("0"), this.isGameOver = !1, this.score = 0, this.currRelifeCount = 0, bt.getShareRelifeSign() ? this.isCanShareRelife = !0 : this.isCanShareRelife = !1, bt.getCourse1Sign() && a.instance.showCourse("UI/fightUI/course1.png"), a.instance.ShowFightUI(!0)
		}
		UpMode() {
			kt.GameRecorder_Start(), this.isUpModelStart = !1;
			var t = this.turntableArray.length;
			for (let e = 0; e < t; e++) this.ClearTable(this.turntableArray.pop()), this.tableCount = 0;
			this.gameMode = "1", this.isStartGame_UpMode = !1, this.trail && this.trail.destroy(), i.gameModelBg.active = !1, i.gameModelBg2.active = !0, this.boardCount = 0, this.isStartTween = !1;
			var e = this.rotEulerYs.length;
			for (let t = 0; t < e; t++) this.rotEulerYs.pop();
			this.CreateSpringboard(4), this.isGameOver = !1, this.score = 0, this.currRelifeCount = 0, bt.getShareRelifeSign() ? this.isCanShareRelife = !0 : this.isCanShareRelife = !1, i.ball.active = !1, this.cameraCtrl.SetTweenMove("1", new Laya.Vector3(-12, 10, 0), new Laya.Vector3(-30, -90, 0), () => {
				this.tempV3.setValue(-2.2, .7, 0), i.ball.transform.position = this.tempV3, Laya.timer.once(1e3, this, () => {
					i.ball.active = !0, this.ballCtrl.a_speed = .8, this.ballCtrl.v0 = 25, this.ballCtrl.jumpSpeed = 25, this.ballCtrl.currTargetBoard = null, this.trail = Laya.Sprite3D.instantiate(i.trail, i.ball), this.trail.active = !0, this.tempV3.setValue(0, 0, 0), this.trail.transform.localPosition = this.tempV3, this.isStartGame_UpMode = !0
				}), this.isStartTween = !0, bt.getCourse2Sign() && a.instance.showCourse("UI/fightUI/course2.png"), a.instance.ShowFightUI(!0)
			})
		}
		CreateTurntable(t) {
			for (let s = 0; s < t; s++) {
				this.tempTurntable = h.getItemBySign("Turntable", i.turntable), this.modelScene.addChild(this.tempTurntable), this.tempTurntable.active = !0, this.tempTurntable.getComponent(c) && this.tempTurntable.getComponent(c).destroy();
				var e = this.tempTurntable.addComponent(c);
				0 == s && t >= 3 && (e.isFirstTable = !0), this.turntableArray.length <= 0 ? this.tempTurntablePos.setValue(0, 5, 0) : this.tempTurntablePos.setValue(0, this.turntableArray[this.turntableArray.length - 1].transform.position.y - 5, 0), this.tempTurntable.transform.position = this.tempTurntablePos, this.turntableArray.push(this.tempTurntable), this.tableCount++
			}
		}
		CreateSpringboard(t, e = !1) {
			for (let e = 0; e < t; e++) {
				this.tempBoard = h.getItemBySign("Springboard", i.springBoard), this.modelScene.addChild(this.tempBoard), this.tempBoard.active = !0, this.tempBoard.getComponent(g) && this.tempBoard.getComponent(g).destroy();
				var s = this.tempBoard.addComponent(g);
				this.boardArray.length <= 0 ? this.tempBoardPos.setValue(0, 0, 0) : this.tempBoardPos.setValue(0, this.boardArray[this.boardArray.length - 1].transform.position.y + 3, 0), this.tempBoard.transform.position = this.tempBoardPos, this.boardArray.length <= 0 ? (this.tempV3.setValue(0, 10, 0), this.tempBoard.transform.rotationEuler = this.tempV3) : this.tempBoard.transform.rotationEuler = this.boardArray[this.boardArray.length - 1].transform.rotationEuler, this.boardCount++, s.orderNum = this.boardCount, this.boardCount <= 4 && this.boardCount > 1 && (s.isTweenToEulerY = !0), this.getRotEulerY(s), this.boardArray.push(this.tempBoard)
			}
		}
		getRotEulerY(t) {
			this.boardCount > 1 && this.boardCount <= 4 ? (Math.random() < .4 ? t.rotEulerY = this.rotEulerYs[this.rotEulerYs.length - 1] - (40 * Math.random() + 40) : t.rotEulerY = this.rotEulerYs[this.rotEulerYs.length - 1] + (40 * Math.random() + 40), t.rotEulerY %= 360, this.rotEulerYs.push(t.rotEulerY)) : this.boardCount > 4 ? Math.random() < .4 ? t.rotEulerY = -(40 * Math.random() + 40) : t.rotEulerY = 40 * Math.random() + 40 : (t.rotEulerY = 10, t.rotEulerY %= 360, this.rotEulerYs.push(t.rotEulerY))
		}
		NextTurntable(t) {
			this.score++, this.turntableArray.shift().getComponent(c).setTableClear(t), this.CreateTurntable(1), this.cameraCtrl.setCameraMove(5), this.cylinderCtrl.setselfModelMove(5), this.modelBgCtrl.setselfModelMove(5), a.instance.updateScoreInfo(String(this.score))
		}
		NextSpringBoard() {
			this.score++, a.instance.showHintScoreLabel(1), this.boardArray.shift().getComponent(g).setBoardClear(), this.CreateSpringboard(1), this.cameraCtrl.setCameraMove(-3), this.cylinderCtrl.setselfModelMove(-3), this.modelBg2Ctrl.setselfModelMove(-3), a.instance.updateScoreInfo(String(this.score))
		}
		CreateBurstEffect(t, e) {
			this.tempBurst = h.getItemBySign("BurstEffect", i.burstEffect), this.modelScene.addChild(this.tempBurst), this.tempBurst.active = !0, this.tempBurst.getComponent(m) && this.tempBurst.getComponent(m).destroy(), this.tempBurst.addComponent(m), this.tempBurstPos.setValue(t.x, e.y + .45, t.z), this.tempBurst.transform.position = this.tempBurstPos
		}
		CreateStampEffect(t) {
			this.tempStamp = h.getItemBySign("StampEffect", i.burstStampEffect), t.addChild(this.tempStamp), this.tempStamp.active = !0, this.tempStampPos.setValue(0, t.transform.position.y + .5, 0), this.tempStamp.transform.position = this.tempStampPos, this.tempStampPos.setValue(0, -t.transform.localRotationEulerY, 0), this.tempStamp.transform.localRotationEuler = this.tempStampPos, this.tempBoardPos.setValue(0, 180 * Math.random(), 0), this.tempStamp.getChildAt(0).transform.rotate(this.tempBoardPos, !0, !1), this.tempStamp.getComponent(b) && this.tempStamp.getComponent(b).destroy(), this.tempStamp.addComponent(b)
		}
		setGameOver() {
			if (this.isGameOver = !0, i.ball.active = !1, this.score >= 1 && this.currRelifeCount < this.maxRelifeCount) return kt.GameRecorder_Pause(), this.currRelifeCount++, void p.instance.ShowRelifeUI(!0, "1");
			switch (kt.GameRecorder_Stop(), this.gameMode) {
				case "0":
					n.PostMessage({
						cmd: "SaveData",
						dataName: "ComScore",
						dataRes: String(this.score)
					});
					break;
				case "1":
					n.PostMessage({
						cmd: "SaveData",
						dataName: "ChaScore",
						dataRes: String(this.score)
					})
			}
			a.instance.ShowFightUI(!1), bt.addCoin(Math.floor(3 * T.Instance().score)), n.showToast("Get coins:" + String(Math.floor(3 * T.Instance().score)), "none", 1500), y.instance.ShowGameoverUI(!0)
		}
		GameRelife_DownMode() {
			kt.GameRecorder_Resume(), this.tempTurntable = h.getItemBySign("Turntable", i.turntable), this.modelScene.addChild(this.tempTurntable), this.tempTurntable.active = !0, this.tempTurntable.getComponent(c) && this.tempTurntable.getComponent(c).destroy(), this.tempTableCtrl = this.tempTurntable.addComponent(c), this.tempTableCtrl.isFirstTable = !0, this.tempTurntablePos.setValue(0, this.turntableArray[0].transform.position.y + 5, 0), this.tempTurntable.transform.position = this.tempTurntablePos, this.turntableArray.unshift(this.tempTurntable), this.cameraCtrl.setCameraPos(5), this.cylinderCtrl.setCylinderPos(5), this.modelBgCtrl.setCylinderPos(5), this.tempTurntablePos.setValue(-2.2, this.tempTurntablePos.y + .7, 0), i.ball.transform.position = this.tempTurntablePos, i.ball.active = !0, this.isGameOver = !1, this.ballCtrl.isDie = !1
		}
		GameRelife_UpMode() {
			kt.GameRecorder_Resume(), this.tempBoard = h.getItemBySign("Springboard", i.springBoard), this.modelScene.addChild(this.tempBoard), this.tempBoard.active = !0, this.tempBoard.getComponent(g) && this.tempBoard.getComponent(g).destroy(), this.tempBoardCtrl = this.tempBoard.addComponent(g), this.tempBoardCtrl.orderNum = this.boardArray[0].getComponent(g).orderNum - 1, this.ballCtrl.currTargetBoard = this.tempBoard, this.tempBoardPos.setValue(0, this.boardArray[0].transform.position.y - 3, 0), this.tempBoard.transform.position = this.tempBoardPos, this.tempV3.setValue(0, 10, 0), this.tempBoard.transform.rotationEuler = this.tempV3, this.boardArray.unshift(this.tempBoard), this.cameraCtrl.setCameraPos(-3), this.cylinderCtrl.setCylinderPos(-3), this.modelBg2Ctrl.setCylinderPos(-3), this.tempBoardPos.setValue(-2.2, this.tempBoardPos.y + .7, 0), i.ball.transform.position = this.tempBoardPos, i.ball.active = !0, this.isGameOver = !1, this.ballCtrl.isDie = !1
		}
		RestartGame() {
			switch (kt.GameRecorder_Start(), this.gameMode) {
				case "0":
					var t = this.turntableArray.length;
					for (let e = 0; e < t; e++) this.ClearTable(this.turntableArray.pop());
					this.cylinderCtrl.ResetTrans(), this.modelBgCtrl.ResetTrans(), this.cameraCtrl.ResetPos_Down(), this.tableCount = 0, this.CreateTurntable(6), this.tempV3.setValue(-2.2, 5.7, 0), i.ball.transform.position = this.tempV3, i.ball.active = !0, this.ballCtrl.isDie = !1, this.trail && this.trail.destroy(), this.trail = Laya.Sprite3D.instantiate(i.trail, i.ball), this.trail.active = !0, this.tempV3.setValue(0, 0, 0), this.trail.transform.localPosition = this.tempV3, this.isGameOver = !1, this.score = 0, this.currRelifeCount = 0, bt.getShareRelifeSign() ? this.isCanShareRelife = !0 : this.isCanShareRelife = !1, a.instance.ShowFightUI(!0), bt.getCourse1Sign() && a.instance.showCourse("UI/fightUI/course1.png");
					break;
				case "1":
					this.isUpModelStart = !1;
					var e = this.boardArray.length;
					for (let t = 0; t < e; t++) h.recoveryItemBySign("Springboard", this.boardArray.pop());
					this.cylinderCtrl.ResetTrans(), this.modelBg2Ctrl.ResetTrans(), this.cameraCtrl.ResetPos_Up(), this.trail && this.trail.destroy(), this.boardCount = 0, this.isStartTween = !1, this.isStartGame_UpMode = !1;
					var s = this.rotEulerYs.length;
					for (let t = 0; t < s; t++) this.rotEulerYs.pop();
					this.CreateSpringboard(4, !0), Laya.timer.once(1e3, this, () => {
						this.ttv3.setValue(-2.2, .7, 0), i.ball.transform.position = this.ttv3, i.ball.active = !0, this.ballCtrl.isDie = !1, this.ballCtrl.currTargetBoard = null, this.trail = Laya.Sprite3D.instantiate(i.trail, i.ball), this.trail.active = !0, this.ttv3.setValue(0, 0, 0), this.trail.transform.localPosition = this.ttv3, this.isStartGame_UpMode = !0
					}), this.isStartTween = !0, this.isGameOver = !1, this.score = 0, this.currRelifeCount = 0, bt.getShareRelifeSign() ? this.isCanShareRelife = !0 : this.isCanShareRelife = !1, a.instance.ShowFightUI(!0), bt.getCourse2Sign() && a.instance.showCourse("UI/fightUI/course2.png")
			}
		}
		ReturnGameReadyModel() {
			switch (this.gameMode) {
				case "0":
					var t = this.turntableArray.length;
					for (let e = 0; e < t; e++) this.ClearTable(this.turntableArray.pop());
					this.modelBgCtrl.ResetTrans();
					break;
				case "1":
					var e = this.boardArray.length;
					for (let t = 0; t < e; t++) h.recoveryItemBySign("Springboard", this.boardArray.pop());
					this.modelBg2Ctrl.ResetTrans()
			}
			this.tableCount = 0, this.CreateTurntable(6), this.gameMode = "-1", this.ballCtrl.a_speed = 1.1, this.ballCtrl.jumpSpeed = 25, this.ballCtrl.v0 = 25, i.ball.active = !0, this.tempV3.setValue(-2.2, 5.7, 0), i.ball.transform.position = this.tempV3, this.cylinderCtrl.ResetTrans(), i.gameModelBg.active = !0, i.gameModelBg2.active = !1, this.cameraCtrl.ResetTrans(), this.ballCtrl.isDie = !1, this.score = 0, mt.instance.ShowStartUI(!0)
		}
		ChangeBallSkin(t) {
			switch (t) {
				case "0":
					i.ball.meshRenderer.material.albedoColor = new Laya.Vector4(.05, .81, .92, 1), i.ball.meshRenderer.material.albedoTexture = null;
					break;
				case "1":
					i.ball.meshRenderer.material.albedoColor = new Laya.Vector4(1, 0, 0, 1), i.ball.meshRenderer.material.albedoTexture = null;
					break;
				case "2":
					i.ball.meshRenderer.material.albedoColor = new Laya.Vector4(.63, .17, .76, 1), i.ball.meshRenderer.material.albedoTexture = null;
					break;
				default:
					i.ball.meshRenderer.material.albedoColor = new Laya.Vector4(1, 1, 1, 1), Laya.Texture2D.load("subPackage/res/SkinTexture/skin" + t + ".jpg", Laya.Handler.create(this, t => {
						var e = t;
						i.ball.meshRenderer.material.albedoTexture = e
					}))
			}
		}
		ClearTable(t) {
			for (let e = 0; e < 10; e++) this.clearTablePart = t.getChildAt(e), this.clearTablePart.active = !0, this.clearTablePart.meshRenderer.material.albedoColor = new Laya.Vector4(.25, .53, .76, 1), this.tempV3.setValue(0, 0, 0), this.clearTablePart.transform.localPosition = this.tempV3, this.clearTablePart.getComponent(l) && this.clearTablePart.getComponent(l).destroy(), this.clearTablePart.transform.localRotationEulerY = 36 * e, this.clearTablePart.name = "Turntable";
			h.recoveryItemBySign("Turntable", t)
		}
		getLockSkinByRandom() {
			var t = [];
			for (let e = 0; e < B.instance.skinData.skinData.length; e++) B.instance.skinData.skinData[e].isOwn || "1" != B.instance.skinData.skinData[e].state || t.push(e);
			var e = Math.floor(Math.random() * t.length);
			return t.length <= 0 ? -1 : t[e]
		}
	}
	T.instance = null;
	class L extends Laya.Script3D {
		constructor() {
			super(), this.myTime = 2
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onEnable() {
			this.myTime = 2
		}
		onUpdate() {
			this.myTime -= Laya.timer.delta / 1e3, this.myTime <= 0 && (this.selfModel.active = !1)
		}
	}
	class _ {
		constructor() { }
		static setModelScene(t, e) {
			switch (e) {
				case "modelScene":
					this.modelScene = t, this.getCamera(), this.getBg(), this.getZhuZi(), this.getBall(), this.getTurnTable_0(), this.getTurnTable_1(), this.getTurnTable_2(), this.getTurnTable_3(), this.getTurnTable_4(), this.getTurnTable_5(), this.getTurnTable_6(), this.getTurnTable_7(), this.getTurnTable_8(), this.getTurnTable_9(), this.getTurnTable_10(), this.getGround(), this.getBurstEffect(), this.getStampBurst(), this.getWDEffect(), this.getPassEffect(), this.getTrail(), this.getCoinModel(), this.getBoxModel(), this.getCoinEffect();
					break;
				case "balanceModelScene":
					this.balanceModelScene = t, this.getBalanceCamera(), this.getBalanceDriLights(), this.getBalanceBeizi(), this.getBalanceTables(), this.getBalanceGround()
			}
		}
		static getCamera() {
			this.camera = this.modelScene.getChildByName("Main Camera")
		}
		static getBg() {
			this.bg = this.modelScene.getChildByName("Bg")
		}
		static getZhuZi() {
			this.zhuzi = this.modelScene.getChildByName("zhuzi")
		}
		static getBall() {
			this.ball = this.modelScene.getChildByName("ballModel"), this.ball.active = !1, this.ball_Type1 = this.ball.getChildByName("ball_Type1"), this.ball_Type1.active = !0, this.ball_Type2 = this.ball.getChildByName("ball_Type2"), this.ball_Type2.active = !1, this.ball_Type3 = this.ball.getChildByName("ball_Type3"), this.ball_Type3.active = !1, this.ball_Type4 = this.ball.getChildByName("ball_Type4"), this.ball_Type4.active = !1, this.ball_Type5 = this.ball.getChildByName("ball_Type5"), this.ball_Type5.active = !1, this.ball_Type6 = this.ball.getChildByName("ball_Type6"), this.ball_Type6.active = !1, this.ball_Type7 = this.ball.getChildByName("ball_Type7"), this.ball_Type7.active = !1, this.ball_Type8 = this.ball.getChildByName("ball_Type8"), this.ball_Type8.active = !1, this.ball_Type9 = this.ball.getChildByName("ball_Type9"), this.ball_Type9.active = !1, this.ball_Type10 = this.ball.getChildByName("ball_Type10"), this.ball_Type10.active = !1, this.ball_Type11 = this.ball.getChildByName("ball_Type11"), this.ball_Type11.active = !1, this.ball_Type12 = this.ball.getChildByName("ball_Type12"), this.ball_Type12.active = !1
		}
		static getTurnTable_0() {
			this.turnTable_0 = this.modelScene.getChildByName("TurnTable_0"), this.turnTable_0.active = !1, this.turnTable_0.removeSelf(), this.turnTableArray.push(this.turnTable_0)
		}
		static getTurnTable_1() {
			this.turnTable_1 = this.modelScene.getChildByName("TurnTable_1"), this.turnTable_1.active = !1, this.turnTable_1.removeSelf(), this.turnTableArray.push(this.turnTable_1)
		}
		static getTurnTable_2() {
			this.turnTable_2 = this.modelScene.getChildByName("TurnTable_2"), this.turnTable_2.active = !1, this.turnTable_2.removeSelf(), this.turnTableArray.push(this.turnTable_2)
		}
		static getTurnTable_3() { }
		static getTurnTable_4() {
			this.turnTable_4 = this.modelScene.getChildByName("TurnTable_4"), this.turnTable_4.active = !1, this.turnTable_4.removeSelf(), this.turnTableArray.push(this.turnTable_4)
		}
		static getTurnTable_5() {
			this.turnTable_5 = this.modelScene.getChildByName("TurnTable_5"), this.turnTable_5.active = !1, this.turnTable_5.removeSelf(), this.turnTableArray.push(this.turnTable_5)
		}
		static getTurnTable_6() {
			this.turnTable_6 = this.modelScene.getChildByName("TurnTable_6"), this.turnTable_6.active = !1, this.turnTable_6.removeSelf(), this.turnTableArray.push(this.turnTable_6)
		}
		static getTurnTable_7() {
			this.turnTable_7 = this.modelScene.getChildByName("TurnTable_7"), this.turnTable_7.active = !1, this.turnTable_7.removeSelf(), this.turnTableArray.push(this.turnTable_7)
		}
		static getTurnTable_8() {
			this.turnTable_8 = this.modelScene.getChildByName("TurnTable_8"), this.turnTable_8.active = !1, this.turnTable_8.removeSelf(), this.turnTableArray.push(this.turnTable_8)
		}
		static getTurnTable_9() {
			this.turnTable_9 = this.modelScene.getChildByName("TurnTable_9"), this.turnTable_9.active = !1, this.turnTable_9.removeSelf(), this.turnTableArray.push(this.turnTable_9)
		}
		static getTurnTable_10() {
			this.turnTable_10 = this.modelScene.getChildByName("TurnTable_10"), this.turnTable_10.active = !1, this.turnTable_10.removeSelf()
		}
		static getGround() {
			this.ground = this.modelScene.getChildByName("Ground")
		}
		static getBurstEffect() {
			this.burstEffect = this.modelScene.getChildByName("Burst"), this.burstEffect.active = !1, this.burstEffect.removeSelf()
		}
		static getStampBurst() {
			this.stampBurst = this.modelScene.getChildByName("BurstStamp"), this.stampBurst.active = !1, this.stampBurst.removeSelf()
		}
		static getWDEffect() {
			this.wudiEffect = this.ball.getChildByName("Trail_Special"), this.wudiEffect.active = !1
		}
		static getPassEffect() {
			this.passEffect = this.modelScene.getChildByName("passEffect"), this.passEffect.addComponent(L), this.passEffect.active = !1
		}
		static getTrail() {
			this.trail = this.ball.getChildByName("Trail")
		}
		static getCoinModel() {
			this.coinModel = this.modelScene.getChildByName("coinModel"), this.coinModel.active = !1
		}
		static getBoxModel() {
			this.boxModel = this.modelScene.getChildByName("boxModel"), this.boxModel.active = !1
		}
		static getCoinEffect() {
			this.coinEffect = this.modelScene.getChildByName("coinEffect"), this.coinEffect.active = !1
		}
		static getBalanceCamera() {
			this.balanceCamera = this.balanceModelScene.getChildByName("Main Camera")
		}
		static getBalanceDriLights() {
			this.balanceDriLight1 = this.balanceModelScene.getChildByName("Directional Light-1"), this.balanceDriLight2 = this.balanceModelScene.getChildByName("Directional Light-2"), console.log("灯光：", this.balanceDriLight1, this.balanceDriLight2)
		}
		static getBalanceBeizi() {
			this.balanceBeizi = this.balanceModelScene.getChildByName("Balance").getChildByName("Bei&Qiu").getChildByName("beizi"), console.log("杯子位置：", this.balanceBeizi.transform.position)
		}
		static getBalanceTables() {
			this.balanceTable0_0 = this.balanceModelScene.getChildByName("Balance").getChildByName("Examples").getChildByName("Sanjiao"), this.balanceTable0_0.active = !1, this.balanceTable0_0.removeSelf(), this.balanceTableArray.push(this.balanceTable0_0), this.balanceTable0_1 = this.balanceModelScene.getChildByName("Balance").getChildByName("Examples").getChildByName("Sanjiao_Xie"), this.balanceTable0_1.active = !1, this.balanceTable0_1.removeSelf(), this.balanceTableArray.push(this.balanceTable0_1), this.balanceTable1_0 = this.balanceModelScene.getChildByName("Balance").getChildByName("Examples").getChildByName("Wubianxing"), this.balanceTable1_0.active = !1, this.balanceTable1_0.removeSelf(), this.balanceTableArray.push(this.balanceTable1_0), this.balanceTable1_1 = this.balanceModelScene.getChildByName("Balance").getChildByName("Examples").getChildByName("Wubianxing_Xie"), this.balanceTable1_1.active = !1, this.balanceTable1_1.removeSelf(), this.balanceTableArray.push(this.balanceTable1_1), this.balanceTable2_0 = this.balanceModelScene.getChildByName("Balance").getChildByName("Examples").getChildByName("Yuan"), this.balanceTable2_0.active = !1, this.balanceTable2_0.removeSelf(), this.balanceTableArray.push(this.balanceTable2_0), this.balanceTable2_1 = this.balanceModelScene.getChildByName("Balance").getChildByName("Examples").getChildByName("Yuan_Xie"), this.balanceTable2_1.active = !1, this.balanceTable2_1.removeSelf(), this.balanceTableArray.push(this.balanceTable2_1), this.balanceTable3_0 = this.balanceModelScene.getChildByName("Balance").getChildByName("Examples").getChildByName("Zhengfang"), this.balanceTable3_0.active = !1, this.balanceTable3_0.removeSelf(), this.balanceTableArray.push(this.balanceTable3_0), this.balanceTable3_1 = this.balanceModelScene.getChildByName("Balance").getChildByName("Examples").getChildByName("Zhengfang_Xie"), this.balanceTable3_1.active = !1, this.balanceTable3_1.removeSelf(), this.balanceTableArray.push(this.balanceTable3_1)
		}
		static getBalanceGround() {
			this.balanceGround = this.balanceModelScene.getChildByName("Balance").getChildByName("Ground")
		}
	}
	_.turnTableArray = [], _.balanceTableArray = [];
	class x {
		constructor() { }
		static getItemBySign(t, e) {
			return this._containSign(t) ? this.ItemPool[t].length >= 1 ? this.tempItem = this.ItemPool[t].shift() : this.tempItem = Laya.Sprite3D.instantiate(e) : (this._addSign(t), this.tempItem = Laya.Sprite3D.instantiate(e)), this.tempItem
		}
		static getItemByClass(t, e) {
			return this._containSign(t) ? this.ItemPool[t].length >= 1 ? this.tempItem = this.ItemPool[t].shift() : this.tempItem = new e : (this._addSign(t), this.tempItem = new e), this.tempItem
		}
		static recoveryItemBySign(t, e) {
			this._containSign(t) ? (e.active && (e.active = !1), e.visible && (e.visible = !1), e.removeSelf(), this.ItemPool[t].push(e)) : (this._addSign(t), e.active && (e.active = !1), e.visible && (e.visible = !1), e.removeSelf(), this.ItemPool[t].push(e))
		}
		static clearPoolBySign(t) {
			if (this._containSign(t)) {
				var e = this.ItemPool[t].length;
				for (let s = 0; s < e; s++) {
					var i = this.ItemPool[t].pop();
					i && i.destroy && i.destroy()
				}
			}
		}
		static _containSign(t) {
			return t in this.ItemPool
		}
		static _addSign(t) {
			this._containSign(t) || (this.ItemPool[t] = [])
		}
	}
	x.ItemPool = {}, x.tempItem = null;
	class M extends Laya.Script3D {
		constructor() {
			super(), this.moveSpeed = new Laya.Vector3(-.1, .1, .05), this.rotateSpeed = new Laya.Vector3(0, 0, 0), this.isClear = !1, this.rotateEulerY = 0, this.originSpeed = .06, this.speedX = .06, this.speedZ = .06
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onStart() {
			this.rotateEulerY = this.selfModel.transform.localRotationEulerY, this.selfModel.transform.localRotationEulerY < 0 && (this.rotateEulerY = this.selfModel.transform.localRotationEulerY + 360), this.rotateEulerY < 90 || this.rotateEulerY > 270 ? this.speedX = this.originSpeed : this.speedX = -this.originSpeed, this.rotateEulerY > 180 ? this.speedZ = this.originSpeed : this.speedZ = -this.originSpeed, this.moveSpeed.setValue(this.speedX * Math.sin(this.selfModel.transform.localRotationEulerY), .08, this.speedZ * Math.cos(this.selfModel.transform.localRotationEulerY)), Laya.Browser.onIOS && "iPhone 6" == kt.getSystemInfo().model.substring(0, 8) && this.moveSpeed.setValue(3 * this.moveSpeed.x, 3 * this.moveSpeed.y, 3 * this.moveSpeed.z)
		}
		onUpdate() {
			this.isClear && this.selfModel.transform.translate(this.moveSpeed, !1)
		}
		setModelClear() {
			this.isClear = !0, this.rotateSpeed.setValue(90 * Math.random() - 45, 0, 0), this.selfModel.transform.rotate(this.rotateSpeed, !0, !1)
		}
	}
	class D {
		constructor() { }
		static getRNFormRange(t, e, i) {
			if (t > e - i || e < i) return console.log("输入有误！请检查！"), null;
			var s = [],
				a = [],
				n = e - i;
			for (let t = 0; t < n; t++) a[t] = i + t;
			var o = a.length;
			for (let e = 0; e < t; e++) {
				var r = Math.floor(Math.random() * o);
				s[e] = a[r], a[r] = a[o - 1], a.pop(), o--
			}
			return s
		}
		static getRNFromArray(t, e) {
			if (t > e.length) return console.log("输入错误，请检查！"), null;
			var i = [],
				s = e.length;
			for (let n = 0; n < t; n++) {
				var a = Math.floor(Math.random() * s);
				i[n] = e[a], e[a] = e[s - 1], e.pop(), s--
			}
			return i
		}
		static AnalysisTimeStamp() {
			var t = new Date(Laya.Browser.now()),
				e = String(t.getFullYear()),
				i = String(t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1),
				s = String(t.getDate() < 10 ? "0" + t.getDate() : t.getDate());
			t.getHours(), t.getHours(), t.getMinutes(), t.getMinutes(), t.getSeconds(), t.getSeconds();
			return e + i + s
		}
	}
	class U extends Laya.Script3D {
		constructor() {
			super(), this.rotateSpeedV3 = new Laya.Vector3(0, -.64, 0), this.tableParts = [], this.tablePartCtrls = [], this.funTime = 0, this.maxFunTime = 0, this.isFunTime = !1, this.isClear = !1, this.tempV3 = new Laya.Vector3(0, 0, 0), this.configInfo = "", this.configArray = [], this.specialColor = new Laya.Vector4(.247, .251, .255, 1), this.comColor = new Laya.Vector4(1, 1, 1, 1), this.switchTargetTime = 1
		}
		onAwake() {
			this.selfModel = this.owner, Laya.Browser.onIOS && "iPhone 6" == kt.getSystemInfo().model.substring(0, 8) && this.rotateSpeedV3.setValue(0, -3, 0)
		}
		onStart() {
			for (let t = 0; t < this.selfModel.numChildren; t++) this.tableParts.push(this.selfModel.getChildAt(t)), this.tableParts[t].meshRenderer.material.albedoColor = this.comColor, null != this.selfModel.getChildAt(t).getComponent(M) && this.selfModel.getChildAt(t).getComponent(M).destroy(), this.tablePartCtrls[t] = this.selfModel.getChildAt(t).addComponent(M);
			if (this.configInfo.length <= 1) this.configArray = D.getRNFormRange(Math.floor(Math.random() * this.selfModel.numChildren - 1), this.selfModel.numChildren, 1);
			else
				for (let t = 0; t < this.configInfo.length; t++) "1" == this.configInfo.substring(t, t + 1) && this.selfModel.getChildAt(t) && (this.selfModel.getChildAt(t).meshRenderer.material.albedoColor = this.specialColor, this.selfModel.getChildAt(t).name = "SpecialPart2")
		}
		onUpdate() {
			ct.instance.isCoursePause || (this.isClear || this.selfModel.transform.rotate(this.rotateSpeedV3, !0, !1), this.targetTable && this.switchTargetTime > 0 && (this.switchTargetTime -= Laya.timer.delta / 1e3, this.selfModel.transform.localRotationEulerY = this.targetTable.transform.localRotationEulerY + 3), this.selfModel.transform.position.y - _.ball.transform.position.y >= 1 && (this.isClear || this.setTurnTableClear()), this.isFunTime && (this.funTime += Laya.timer.delta / 1e3, this.funTime >= this.maxFunTime && (this.funTime = 0, this.isFunTime = !1, this.recoveryTable())))
		}
		refreshColor() {
			for (let t = 0; t < this.selfModel.numChildren; t++) this.tableParts.push(this.selfModel.getChildAt(t)), this.tableParts[t].meshRenderer.material.albedoColor = this.comColor, null != this.selfModel.getChildAt(t).getComponent(M) && this.selfModel.getChildAt(t).getComponent(M).destroy(), this.tablePartCtrls[t] = this.selfModel.getChildAt(t).addComponent(M);
			if (this.configInfo.length <= 1) this.configArray = D.getRNFormRange(Math.floor(Math.random() * this.selfModel.numChildren - 1), this.selfModel.numChildren, 1);
			else
				for (let t = 0; t < this.configInfo.length; t++) "1" == this.configInfo.substring(t, t + 1) && this.selfModel.getChildAt(t) && (this.selfModel.getChildAt(t).meshRenderer.material.albedoColor = this.specialColor, this.selfModel.getChildAt(t).name = "SpecialPart2")
		}
		setTurnTableClear() {
			this.isClear = !0;
			for (let t = 0; t < this.tablePartCtrls.length; t++) this.tableParts[t].name = "ClearPart", this.tablePartCtrls[t].setModelClear();
			this.maxFunTime = .8, this.isFunTime = !0
		}
		recoveryTable() {
			for (let t = 0; t < this.selfModel.numChildren; t++) this.tempV3.setValue(0, 0, 0), this.tableParts[t].transform.localPosition = this.tempV3, this.tableParts[t].transform.localRotationEulerY = 360 / this.selfModel.numChildren * t, this.tableParts[t].meshRenderer.material.albedoColor = this.comColor, this.tablePartCtrls[t].destroy && this.tablePartCtrls[t].destroy(), this.tableParts[t].name = "TurnTable";
			this.tempV3.setValue(0, 0, 0), this.selfModel.transform.position = this.tempV3, this.selfModel.transform.localRotationEuler = this.tempV3, x.recoveryItemBySign(this.selfModel.name, this.selfModel)
		}
		setScaleChange() {
			this.ToBig()
		}
		ToBig() {
			this.selfModel.transform.localScale, Laya.Tween.to(this.selfModel.transform, {
				localScaleX: 1.2,
				localScaleY: 1.7,
				localScaleZ: 1.2
			}, 100, null, Laya.Handler.create(this, () => {
				this.ToSmall()
			}))
		}
		ToSmall() {
			Laya.Tween.to(this.selfModel.transform, {
				localScaleX: 1,
				localScaleY: 1.5,
				localScaleZ: 1
			}, 100)
		}
	}
	class A {
		constructor() {
			this.currScale = 0
		}
		static get instance() {
			return null == this._instance && (this._instance = new A), this._instance
		}
		AdaptiveScreen(t) {
			t.width = Laya.Browser.width, t.height = Laya.Browser.height, Laya.Browser.clientHeight / Laya.Browser.clientWidth - 1.33 <= .004 && (t.scale(.7, .7), this.currScale = .7)
		}
	}
	A._instance = null;
	class P extends Laya.Script {
		constructor() {
			super(), this.callBack_UIClose = null, this.skinIndex_onTrial1 = 0, this.skinIndex_onTrial2 = 0, this.isForceAd = !1, this.scaleNum1 = .02, this.scaleNum2 = .02, this.topNum1 = 5, this.topNum2 = 5, P.instance = this
		}
		onAwake() {
			this.skinOnTrialUI = this.owner, this.uiBox = this.skinOnTrialUI.getChildAt(0), this.skinOnTrialBg = this.uiBox.getChildByName("skinOnTrialBg"), this.skinImg1 = this.skinOnTrialBg.getChildByName("skinBg1").getChildByName("skinImg"), this.skinImg2 = this.skinOnTrialBg.getChildByName("skinBg2").getChildByName("skinImg"), this.skinTryBtn1 = this.skinOnTrialBg.getChildByName("skinBg1").getChildByName("skinTryBtn1"), this.skinTryBtn2 = this.skinOnTrialBg.getChildByName("skinBg2").getChildByName("skinTryBtn2"), this.yinYingImg1 = this.skinOnTrialBg.getChildByName("skinBg1").getChildByName("yinYingImg"), this.yinYingImg2 = this.skinOnTrialBg.getChildByName("skinBg2").getChildByName("yinYingImg"), this.mainBtn = this.skinOnTrialBg.getChildByName("mainBtn"), this.skipBtn = this.skinOnTrialBg.getChildByName("skipBtn"), this.upBtn = this.skinOnTrialBg.getChildByName("upBtn"), this.check = this.upBtn.getChildAt(0), this.downBtn = this.skinOnTrialBg.getChildByName("downBtn"), this.start_ad = this.skinOnTrialBg.getChildByName("start_ad"), this.start_noAd = this.skinOnTrialBg.getChildByName("start_noAd")
		}
		onEnable() {
			this.uiBox.on(Laya.Event.CLICK, this, this.trySkinUI_Click), A.instance.AdaptiveScreen(this.uiBox), Laya.Browser.clientHeight / Laya.Browser.clientWidth >= 2 && (this.skinOnTrialBg.top += 200)
		}
		onUpdate() {
			this.skinOnTrialUI.visible && (this.skinImg1.scaleX >= 1.1 && (this.scaleNum1 = -.015), this.skinImg1.scaleX <= .9 && (this.scaleNum1 = .015), this.skinImg1.scaleX += this.scaleNum1, this.skinImg1.scaleY -= this.scaleNum1, this.skinImg1.top >= 280 && (this.topNum1 = -7), this.skinImg1.top <= 180 && (this.topNum1 = 7), this.topNum1 *= .99, this.skinImg1.top += this.topNum1, this.yinYingImg1.scaleX = (this.skinImg1.top - 100) / 100 * 1.2, this.yinYingImg1.scaleY = (this.skinImg1.top - 100) / 100 * 1.2, this.skinImg2.scaleX >= 1.1 && (this.scaleNum2 = -.015), this.skinImg2.scaleX <= .9 && (this.scaleNum2 = .015), this.skinImg2.scaleX += this.scaleNum2, this.skinImg2.scaleY -= this.scaleNum2, this.skinImg2.top >= 280 && (this.topNum2 = -7), this.skinImg2.top <= 180 && (this.topNum2 = 7), this.topNum2 *= .99, this.skinImg2.top += this.topNum2, this.yinYingImg2.scaleX = (this.skinImg2.top - 100) / 100 * 1.2, this.yinYingImg2.scaleY = (this.skinImg2.top - 100) / 100 * 1.2)
		}
		moveUp(t) {
			Laya.Tween.to(t, {
				top: 100
			}, 300, null, Laya.Handler.create(this, () => {
				this.skinOnTrialUI.visible && this.moveDown(t)
			}))
		}
		moveDown(t) {
			Laya.Tween.to(t, {
				top: 200
			}, 300, null, Laya.Handler.create(this, () => {
				this.skinOnTrialUI.visible && this.moveUp(t)
			}))
		}
		showTrySkinUI(t, e, i, s) {
			this.skinOnTrialUI.visible = t, t ? (this.skinIndex_onTrial1 = e, this.skinIndex_onTrial2 = i, this.callBack_UIClose = s, this.initUI(this.skinIndex_onTrial1, this.skinImg1, this.yinYingImg1), this.initUI(this.skinIndex_onTrial2, this.skinImg2, this.yinYingImg2), ct.instance.isOnline ? (this.skipBtn.visible = !1, this.upBtn.visible = !1, this.check.visible = !0, this.mainBtn.visible = !0, this.mainBtn.skin = "UI/trySkinUI/ad_store_noSign.png", this.downBtn.visible = !1, Laya.timer.once(3e3, this, () => {
				this.upBtn.visible = !0, this.downBtn.visible = !0
			}), this.start_ad.visible = !1, this.start_noAd.visible = !1, this.isForceAd = !0, this.isForceAd && console.log("即将强拉广告")) : (this.mainBtn.visible = !1, this.upBtn.visible = !1, this.downBtn.visible = !1, this.skipBtn.visible = !1, this.start_ad.visible = !0, this.start_noAd.visible = !0), kt.showBanner()) : (kt.hideBanner(), "UI/trySkinUI/hint2.png" == this.upBtn.skin ? (this.downBtn.skin = "UI/trySkinUI/tryBtn_Y.png", this.upBtn.skin = "UI/trySkinUI/hint3.png") : (this.downBtn.skin = "UI/trySkinUI/tryBtn_N.png", this.upBtn.skin = "UI/trySkinUI/hint2.png"), this.callBack_UIClose && this.callBack_UIClose())
		}
		initUI(t, e, i) {
			e.skin = Ct.instance.skinData.skinData[t].skinUrl, 14 == t || 15 == t || 16 == t ? i.scale(.8, .8) : i.scale(1.2, 1.2)
		}
		trySkinUI_Click(t) {
			switch (console.log("trySkinUI click target: ", t.target.name), t.target.name) {
				case "skinTryBtn1":
					this.skinTryBtnClick(1);
					break;
				case "skinTryBtn2":
					this.skinTryBtnClick(2);
					break;
				case "upBtn":
					this.upBtnClick();
					break;
				case "mainBtn":
					this.mainBtnClick();
					break;
				case "skipBtn":
					this.skipBtnClick();
					break;
				case "downBtn":
					this.downBtnClick();
					break;
				case "start_ad":
					this.mainBtnClick();
					break;
				case "start_noAd":
					this.skipBtnClick()
			}
		}
		skinTryBtnClick(t) {
			switch (t) {
				case 1:
					ct.instance.changeBallSkin(this.skinIndex_onTrial1);
					break;
				case 2:
					ct.instance.changeBallSkin(this.skinIndex_onTrial2)
			}
			kt.showToast("Skin Trial Successful", "none", 2e3), this.showTrySkinUI(!1, 0, 0, null)
			/*kt.showVideoAd(() => {
				switch (t) {
					case 1:
						ct.instance.changeBallSkin(this.skinIndex_onTrial1);
						break;
					case 2:
						ct.instance.changeBallSkin(this.skinIndex_onTrial2)
				}
				kt.showToast("Skin Trial Successful", "none", 2e3), this.showTrySkinUI(!1, 0, 0, null)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/
		}
		mainBtnClick() {
			S.setButtonEvents("tryskinui", "tryskinui_tryskin_video_start", 1, St.getCurrLvInfo(), ""),
			Math.random() >= .5 ? ct.instance.changeBallSkin(this.skinIndex_onTrial1) : ct.instance.changeBallSkin(this.skinIndex_onTrial2), S.setButtonEvents("tryskinui", "tryskinui_tryskin_video_success", 5, St.getCurrLvInfo(), ""), kt.showToast("Skin Trial Successful", "none", 2e3), this.showTrySkinUI(!1, 0, 0, null)
			/*kt.showVideoAd(() => {
				Math.random() >= .5 ? ct.instance.changeBallSkin(this.skinIndex_onTrial1) : ct.instance.changeBallSkin(this.skinIndex_onTrial2), S.setButtonEvents("tryskinui", "tryskinui_tryskin_video_success", 5, St.getCurrLvInfo(), ""), kt.showToast("Skin Trial Successful", "none", 2e3), this.showTrySkinUI(!1, 0, 0, null)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/
		}
		skipBtnClick() {
			this.showTrySkinUI(!1, 0, 0, null)
		}
		upBtnClick() {
			this.isForceAd && "UI/trySkinUI/hint2.png" == this.upBtn.skin ? (this.isForceAd = !1, 
				Math.random() >= .5 ? ct.instance.changeBallSkin(this.skinIndex_onTrial1) : ct.instance.changeBallSkin(this.skinIndex_onTrial2), kt.showToast("Skin Trial Successful", "none", 2e3), this.showTrySkinUI(!1, 0, 0, null)
			/*kt.showVideoAd(() => {
				Math.random() >= .5 ? ct.instance.changeBallSkin(this.skinIndex_onTrial1) : ct.instance.changeBallSkin(this.skinIndex_onTrial2), kt.showToast("Skin Trial Successful", "none", 2e3), this.showTrySkinUI(!1, 0, 0, null)
			}, () => { })*/) : this.check.visible ? (this.check.visible = !1, "UI/trySkinUI/hint3.png" == this.upBtn.skin ? this.downBtn.skin = "UI/trySkinUI/tryBtn_N.png" : this.downBtn.skin = "UI/trySkinUI/tryBtn_Y.png") : (this.check.visible = !0, "UI/trySkinUI/hint3.png" == this.upBtn.skin ? this.downBtn.skin = "UI/trySkinUI/tryBtn_Y.png" : this.downBtn.skin = "UI/trySkinUI/tryBtn_N.png")
		}
		downBtnClick() {
			"UI/trySkinUI/tryBtn_Y.png" == this.downBtn.skin || this.isForceAd ? (this.isForceAd = !1, 
				Math.random() >= .5 ? ct.instance.changeBallSkin(this.skinIndex_onTrial1) : ct.instance.changeBallSkin(this.skinIndex_onTrial2), kt.showToast("Skin Trial Successful", "none", 2e3), this.showTrySkinUI(!1, 0, 0, null)
			/*kt.showVideoAd(() => {
				Math.random() >= .5 ? ct.instance.changeBallSkin(this.skinIndex_onTrial1) : ct.instance.changeBallSkin(this.skinIndex_onTrial2), kt.showToast("Skin Trial Successful", "none", 2e3), this.showTrySkinUI(!1, 0, 0, null)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/) : this.skipBtnClick()
		}
	}
	P.instance = null;
	class N extends Laya.Script {
		constructor() {
			super(), this.isRewardType = -1, this.skinIndex = 0, this.isForceAd = !1, this.callBack_close = null, N.instance = this
		}
		onAwake() {
			this.rewardUI = this.owner, this.uiBox = this.rewardUI.getChildAt(0), this.boxBg = this.uiBox.getChildByName("boxBg"), this.openBoxBtn = this.boxBg.getChildByName("openBoxBtn"), this.closeBtn_box = this.boxBg.getChildByName("closeBtn"), this.rewardBg = this.uiBox.getChildByName("rewardBg"), this.rewardImg = this.rewardBg.getChildByName("rewardImg"), this.rewardHintTxt = this.rewardBg.getChildByName("rewardBotImg").getChildAt(0), this.getRewardBtn = this.rewardBg.getChildByName("getRewardBtn"), this.closeBtn_reward = this.rewardBg.getChildByName("closeBtn"), this.doubleBtn = this.rewardBg.getChildByName("doubleBtn"), this.checkOnImg = this.doubleBtn.getChildAt(0)
		}
		onStart() {
			this.openBoxBtn.on(Laya.Event.CLICK, this, this.openBoxBtn_Click), this.closeBtn_box.on(Laya.Event.CLICK, this, this.closeBtn_box_Click), this.getRewardBtn.on(Laya.Event.CLICK, this, this.getRewardBtn_Click), this.closeBtn_reward.on(Laya.Event.CLICK, this, this.closeBtn_reward_Click), this.doubleBtn.on(Laya.Event.CLICK, this, this.doubleBtn_Click)
		}
		showRewardUI(t, e = null) {
			this.rewardUI.visible = t, t ? (this.callBack_close = e, this.showBoxUI(!0), kt.showBanner()) : (kt.hideBanner(), this.callBack_close && this.callBack_close())
		}
		showBoxUI(t, e = !0) {
			t ? (this.boxBg.visible = !1, this.openBoxBtn_Click()) : Laya.Tween.to(this.boxBg, {
				scaleX: 0,
				scaleY: 0
			}, 300, Laya.Ease.backIn, Laya.Handler.create(this, () => {
				this.boxBg.visible = !1, e ? this.showRewardBg(!0) : this.showRewardUI(!1)
			}))
		}
		openBoxBtn_Click() {
			var t = Math.random();
			this.isRewardType = t < .15 ? 0 : t < .35 ? 1 : t < .5 ? 2 : t < .7 ? 3 : 2, this.showBoxUI(!1)
		}
		closeBtn_box_Click() {
			this.showBoxUI(!1, !1)
		}
		showRewardBg(t) {
			if (t) {
				switch (this.rewardBg.visible = !0, ct.instance.isOnline && (this.isForceAd = !0, console.log("即将强拉广告")), this.isRewardType) {
					case 0:
						this.rewardImg.skin = "UI/boxUI/coinLogo.png", this.rewardHintTxt.text = "50";
						break;
					case 1:
						this.rewardImg.skin = "UI/boxUI/coinLogo.png", this.rewardHintTxt.text = "100";
						break;
					case 2:
						this.rewardImg.skin = "UI/boxUI/coinLogo.png", this.rewardHintTxt.text = "150";
						break;
					case 3:
						this.rewardImg.skin = "UI/boxUI/coinLogo.png", this.rewardHintTxt.text = "200";
						break;
					case 4:
						this.rewardHintTxt.text = "限时", this.skinIndex = ct.instance.getLockSkinByRandom(), this.skinIndex <= -1 ? (this.rewardImg.skin = "UI/boxUI/coinLogo.png", this.rewardHintTxt.text = "150", this.isRewardType = 2) : this.rewardImg.skin = "SkinUI/ballSkin" + String(this.skinIndex + 1) + ".png"
				}
				4 == this.isRewardType ? this.doubleBtn.visible = !1 : (this.doubleBtn.visible = !1, this.checkOnImg.visible = !0);
				let t = this.closeBtn_reward.centerY;
				this.closeBtn_reward.centerY = this.getRewardBtn.centerY, this.getRewardBtn.centerY = t, this.closeBtn_reward.visible = !0, Laya.Tween.to(this.rewardBg, {
					scaleX: 1,
					scaleY: 1
				}, 300, Laya.Ease.backOut, Laya.Handler.create(this, () => {
					Laya.timer.once(2e3, this, () => {
						this.closeBtn_reward.visible = !0, 4 == this.isRewardType && (this.closeBtn_reward.visible = !1)
					})
				})), St.updateTaskData(3)
			} else Laya.Tween.to(this.rewardBg, {
				scaleX: 0,
				scaleY: 0
			}, 300, Laya.Ease.backIn, Laya.Handler.create(this, () => {
				this.rewardBg.visible = !1, this.showRewardUI(!1)
			}))
		}
		getRewardBtn_Click() {
			"UI/boxUI/getBtn_Box.png" == this.getRewardBtn.skin ? ("UI/boxUI/coinLogo.png" == this.rewardImg.skin ? (St.setCoinNum(St.getCoinNum() + Number(this.rewardHintTxt.text)), kt.showToast("Get coins:" + this.rewardHintTxt.text, "none", 2e3)) : (Laya.LocalStorage.setItem("TRYSKIN_" + String(this.skinIndex), String(Laya.Browser.now())), Ct.instance.skinData.skinData[this.skinIndex].isTime = !0, Ct.instance.skinData.skinData[this.skinIndex].state = "2", Ct.instance.skinData.skinData[Ct.instance.skinData.currUseIndex].state = "2", Ct.instance.skinData.currUseIndex = this.skinIndex, Ct.instance.skinData.skinData[this.skinIndex].state = "3", Ct.instance.setStoreData(Ct.instance.skinData), ct.instance.changeBallSkin(this.skinIndex), St.setSkinData(Ct.instance.skinData)), this.showRewardBg(!1)) :
			(St.setCoinNum(St.getCoinNum() + Number(this.rewardHintTxt.text)), kt.showToast("Get coins:" + String(Number(this.rewardHintTxt.text)), "none", 2e3), this.showRewardBg(!1))
			/*kt.showVideoAd(() => {
			St.setCoinNum(St.getCoinNum() + Number(this.rewardHintTxt.text)), kt.showToast("Get coins:" + String(Number(this.rewardHintTxt.text)), "none", 2e3), this.showRewardBg(!1)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/
		}
		closeBtn_reward_Click() {
			this.isForceAd && (this.isForceAd = !1, kt.showVideoAd_test(() => {
				St.setCoinNum(St.getCoinNum() + Number(this.rewardHintTxt.text)), kt.showToast("Get coins:" + String(Number(this.rewardHintTxt.text)), "none", 2e3), this.showRewardBg(!1)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			}, !1, !0, 0)), this.showRewardBg(!1)
		}
		doubleBtn_Click() {
			this.checkOnImg.visible ? (this.checkOnImg.visible = !1, this.getRewardBtn.skin = "UI/boxUI/getBtn_Box.png") : (this.checkOnImg.visible = !0, this.getRewardBtn.skin = "UI/boxUI/two_Ad.png")
		}
	}
	N.instance = null;
	class R extends Laya.Script {
		constructor() {
			super(), this.coinNum_reward = 0, this.angle = 0, this.isStartTurn = !1, this.callBack_close = null, R.instance = this
		}
		onAwake() {
			this.turnTableUI = this.owner, this.uiBox = this.turnTableUI.getChildAt(0), this.turnTableBg = this.uiBox.getChildAt(0), this.tableImg = this.turnTableBg.getChildByName("tableImg"), this.textImage = this.turnTableBg.getChildByName("textImage"), this.bar = this.turnTableBg.getChildByName("barBg").getChildByName("bar"), this.upBtn = this.turnTableBg.getChildByName("upBtn"), this.check = this.upBtn.getChildByName("check"), this.mainBtn = this.turnTableBg.getChildByName("mainBtn"), this.skipBtn = this.turnTableBg.getChildByName("skipBtn")
		}
		onStart() {
			this.upBtn.on(Laya.Event.CLICK, this, this.upBtn_Click), this.mainBtn.on(Laya.Event.CLICK, this, this.mainBtn_Click), this.skipBtn.on(Laya.Event.CLICK, this, this.skipBtn_Click)
		}
		onUpdate() {
			this.isStartTurn && (this.tableImg.rotation += 20, this.tableImg.rotation %= 360)
		}
		showTurnTableUI(t, e = null) {
			t ? (this.callBack_close = e, this.turnTableUI.visible = !0, this.tableImg.rotation = 0, this.setImage(this.getTurnNum()), ct.instance.isOnline ? (this.upBtn.visible = !0, this.check.visible = !0, this.mainBtn.visible = !0, this.skipBtn.visible = !1, this.skipBtn.bottom = 30) : (this.upBtn.visible = !1, this.mainBtn.visible = !0, this.skipBtn.visible = !0, this.skipBtn.bottom = -90), this.getFreeSign() ? this.mainBtn.skin = "UI/turnTableUI/turnnow.png" : this.mainBtn.skin = "UI/turnTableUI/freeturn.png", ct.instance.isOnline && (this.isForceAd = !0, console.log("点击勾选框即将强拉广告")), this.turnTableBg.scale(0, 0), Laya.Tween.to(this.turnTableBg, {
				scaleX: 1,
				scaleY: 1
			}, 300), kt.hideBanner()) : (Laya.Tween.to(this.turnTableBg, {
				scaleX: 0,
				scaleY: 0
			}, 300, null, Laya.Handler.create(this, () => {
				this.turnTableUI.visible = !1
			})), this.callBack_close && this.callBack_close())
		}
		upBtn_Click() {
			this.isForceAd ? (this.isForceAd = !1, 
			this.startTurnTable(), this.mainBtn.skin = "UI/turnTableUI/turnagain.png"
				/*kt.showVideoAd(() => {
				this.startTurnTable(), this.mainBtn.skin = "UI/turnTableUI/turnagain.png"
			}, () => { })*/) : this.check.visible ? (this.check.visible = !1, this.skipBtn.visible = !0) : (this.check.visible = !0, this.skipBtn.visible = !1)
		}
		getAngleAndReward() {
			if (console.log("TurnNum == ", this.getTurnNum()), this.getTurnNum() % 4 == 1) return this.coinNum_reward = -1, this.isGetSkin = !0, void (this.angle = 46 * Math.random() + 156);
			var t = Math.random();
			t <= .3 ? (this.coinNum_reward = 50, this.isGetSkin = !1, this.angle = 44 * Math.random() - 22, this.angle < 0 && (this.angle = 360 + this.angle)) : t <= .55 ? (this.coinNum_reward = 100, this.isGetSkin = !1, this.angle = 44 * Math.random() + 292) : t <= .75 ? (this.coinNum_reward = 200, this.isGetSkin = !1, this.angle = 44 * Math.random() + 248) : t <= .9 ? (this.coinNum_reward = 300, this.isGetSkin = !1, this.angle = 46 * Math.random() + 202) : t <= .95 ? (this.coinNum_reward = -1, this.isGetSkin = !0, this.angle = 46 * Math.random() + 156) : t <= .99 ? (this.coinNum_reward = 1e3, this.isGetSkin = !1, this.angle = 46 * Math.random() + 110) : t <= .9999 ? (this.coinNum_reward = 888, this.isGetSkin = !1, this.angle = 44 * Math.random() + 66) : (this.coinNum_reward = 500, this.isGetSkin = !1, this.angle = 44 * Math.random() + 22)
		}
		closeBtn_Click() {
			this.showTurnTableUI(!1)
		}
		mainBtn_Click() {
			switch (this.mainBtn.skin) {
				case "UI/turnTableUI/freeturn.png":
					this.setFreeSign(), this.startTurnTable(), this.mainBtn.skin = "UI/turnTableUI/turnagain.png";
					break;
				default:
					S.setButtonEvents("zhuanpanui", "zhuanpanui_video_start", 1, St.getCurrLvInfo(), ""),
					S.setButtonEvents("zhuanpanui", "zhuanpanui_video_success", 1, St.getCurrLvInfo(), ""),
					this.startTurnTable(), this.mainBtn.skin = "UI/turnTableUI/turnagain.png"
					/*kt.showVideoAd(() => {
						S.setButtonEvents("zhuanpanui", "zhuanpanui_video_success", 1, St.getCurrLvInfo(), ""), this.startTurnTable(), this.mainBtn.skin = "UI/turnTableUI/turnagain.png"
					}, () => {
						kt.showToast("Get rewarded after watching the video", "none", 2e3)
					})*/
			}
		}
		skipBtn_Click() {
			this.showTurnTableUI(!1)
		}
		startTurnTable() {
			this.refreshTurnNum(), this.isStartTurn = !0, this.mainBtn.disabled = !0, this.skipBtn.disabled = !0, this.getAngleAndReward(), Laya.timer.once(1500, this, () => {
				if (this.isStartTurn = !1, this.mainBtn.disabled = !1, this.skipBtn.disabled = !1, this.tableImg.rotation = this.angle, this.isGetSkin) {
					var t = ct.instance.getLockSkinByRandom();
					Ct.instance.getNewSkin(t)
				} else {
					var e = St.getCoinNum();
					e += this.coinNum_reward, St.setCoinNum(e), console.log("Get coins:" + String(this.coinNum_reward)), kt.showToast("Get coins:" + String(this.coinNum_reward), "none", 2e3)
				}
				St.updateTaskData(2)
			}), this.setImage(this.getTurnNum())
		}
		getFreeSign() {
			var t = Laya.LocalStorage.getItem("TABLE_FREESIGN");
			return null == t || null == t || "" == t || t != D.AnalysisTimeStamp()
		}
		setFreeSign() {
			Laya.LocalStorage.setItem("TABLE_FREESIGN", D.AnalysisTimeStamp())
		}
		getTurnNum() {
			var t = Laya.LocalStorage.getItem("TABLE_TURN_NUM");
			return null == t || null == t || "" == t ? (Laya.LocalStorage.setItem("TABLE_TURN_NUM", "0"), 0) : Number(t)
		}
		refreshTurnNum() {
			var t = Laya.LocalStorage.getItem("TABLE_TURN_NUM");
			if (null == t || null == t || "" == t) return Laya.LocalStorage.setItem("TABLE_TURN_NUM", "1"), 1;
			var e = Number(t);
			return e++, Laya.LocalStorage.setItem("TABLE_TURN_NUM", e.toString()), e
		}
		setImage(t) {
			0 == t ? (this.textImage.skin = "UI/turnTableUI/1left.png", this.bar.skin = "UI/turnTableUI/bar100.png") : t % 4 == 1 ? (this.textImage.skin = "UI/turnTableUI/4left.png", this.bar.skin = "UI/turnTableUI/bar0.png") : t % 4 == 2 ? (this.textImage.skin = "UI/turnTableUI/3left.png", this.bar.skin = "UI/turnTableUI/bar25.png") : t % 4 == 3 ? (this.textImage.skin = "UI/turnTableUI/2left.png", this.bar.skin = "UI/turnTableUI/bar50.png") : t % 4 == 0 && (this.textImage.skin = "UI/turnTableUI/1left.png", this.bar.skin = "UI/turnTableUI/bar75.png")
		}
	}
	R.instance = null;
	class E extends Laya.Script {
		constructor() {
			super(), this.callBack_Close = null, this.skinIndex = 0, this.isForceAd = !1, E.instance = this
		}
		onAwake() {
			this.limitSkinUI = this.owner, this.uiBox = this.limitSkinUI.getChildAt(0), this.closeBtn = this.uiBox.getChildByName("closeBtn"), this.skinImg = this.uiBox.getChildByName("skinImg"), this.pro1 = this.uiBox.getChildByName("pro1"), this.pro2 = this.uiBox.getChildByName("pro2"), this.pro3 = this.uiBox.getChildByName("pro3"), this.getLimitSkinBtn = this.uiBox.getChildByName("getSkinBtn_Ad"), this.cancelBtn = this.uiBox.getChildByName("cancel")
		}
		onStart() {
			this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtn_Click), this.getLimitSkinBtn.on(Laya.Event.CLICK, this, this.getLimitSkinBtn_Click), this.cancelBtn.on(Laya.Event.CLICK, this, this.closeBtn_Click)
		}
		showLimitSkinUI(t, e, i = null) {
			t ? (this.callBack_Close = i, this.limitSkinUI.visible = !0, this.skinIndex = e, ct.instance.isOnline && (this.isForceAd = !0, console.log("即将强拉广告")), this.initLimitSkinUI()) : (kt.hideBanner(), this.limitSkinUI.visible = !1, this.callBack_Close && this.callBack_Close())
		}
		initLimitSkinUI() {
			switch (this.skinImg.skin = "SkinUI/ballSkin" + String(this.skinIndex + 1) + ".png", Ct.instance.skinData.skinData[this.skinIndex].speCount) {
				case 0:
					this.pro1.skin = "UI/limitSkinUI/proBot.png", this.pro2.skin = "UI/limitSkinUI/proBot.png", this.pro3.skin = "UI/limitSkinUI/proBot.png";
					break;
				case 1:
					this.pro1.skin = "UI/limitSkinUI/proTop.png", this.pro2.skin = "UI/limitSkinUI/proBot.png", this.pro3.skin = "UI/limitSkinUI/proBot.png";
					break;
				case 2:
					this.pro1.skin = "UI/limitSkinUI/proTop.png", this.pro2.skin = "UI/limitSkinUI/proTop.png", this.pro3.skin = "UI/limitSkinUI/proBot.png"
			}
			ct.instance.isOnline ? (this.closeBtn.visible = !1, Laya.timer.once(3e3, this, () => {
				this.closeBtn.visible = !0
			})) : this.cancelBtn.visible = !0, this.cancelBtn.visible = !1, kt.showBanner()
		}
		closeBtn_Click() {
			this.isForceAd ? (this.isForceAd = !1, S.setButtonEvents("xiandingpifu", "xiandingpifu_video_start", 1, St.getCurrLvInfo(), ""), () => {
				S.setButtonEvents("xiandingpifu", "xiandingpifu_video_success", 5, St.getCurrLvInfo(), "");
				var t = Ct.instance.skinData.skinData[this.skinIndex].speCount;
				++t >= 3 ? (Ct.instance.skinData.skinData[this.skinIndex].speCount = 3, Ct.instance.skinData.skinData[this.skinIndex].isOwn = !0, kt.showToast("Congrats on getting the limited skin", "none", 2e3), this.closeBtn_Click()) : (Ct.instance.skinData.skinData[this.skinIndex].speCount = t, this.initLimitSkinUI())
			}, () => {
				this.showLimitSkinUI(!1, 0)
			}) : this.showLimitSkinUI(!1, 0)
		}
		getLimitSkinBtn_Click() {
			S.setButtonEvents("xiandingpifu", "xiandingpifu_video_start", 1, St.getCurrLvInfo(), ""),
				S.setButtonEvents("xiandingpifu", "xiandingpifu_video_success", 5, St.getCurrLvInfo(), "");
			var t = Ct.instance.skinData.skinData[this.skinIndex].speCount;
			++t >= 3 ? (Ct.instance.skinData.skinData[this.skinIndex].speCount = 3,
			Ct.instance.skinData.skinData[this.skinIndex].isOwn = !0, 
			kt.showToast("Congrats on getting the limited skin", "none", 2e3), this.closeBtn_Click()) : 
			(Ct.instance.skinData.skinData[this.skinIndex].speCount = t, this.initLimitSkinUI())
			/*kt.showVideoAd(() => {
				S.setButtonEvents("xiandingpifu", "xiandingpifu_video_success", 5, St.getCurrLvInfo(), "");
				var t = Ct.instance.skinData.skinData[this.skinIndex].speCount;
				++t >= 3 ? (Ct.instance.skinData.skinData[this.skinIndex].speCount = 3, Ct.instance.skinData.skinData[this.skinIndex].isOwn = !0, kt.showToast("Congrats on getting the limited skin", "none", 2e3), this.closeBtn_Click()) : (Ct.instance.skinData.skinData[this.skinIndex].speCount = t, this.initLimitSkinUI())
			}, () => {
				kt.showToast("Get a permanent limited-skin after 3 ad", "none", 2e3)
			})*/
		}
	}
	E.instance = null;
	class V extends Laya.Script {
		constructor() {
			super(), this.callBack_close = null, this.isOpen = !0, V.instance = this
		}
		onAwake() {
			this.goldEggUI = this.owner, this.uiBox = this.goldEggUI.getChildAt(0), this.bg = this.uiBox.getChildAt(0), this.goldEggBg = this.bg.getChildAt(0), this.proBot = this.goldEggBg.getChildAt(1), this.proTop = this.proBot.getChildAt(0), this.breakEggBtn = this.goldEggBg.getChildAt(3), this.videoRewardBtn = this.breakEggBtn.getChildAt(0), this.closeBtn = this.goldEggBg.getChildAt(4)
		}
		onStart() {
			this.breakEggBtn.on(Laya.Event.CLICK, this, this.breakEggBtnClick), this.videoRewardBtn.on(Laya.Event.CLICK, this, this.videoRewardBtnClick), this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtnClick), this.isOpen = !0
		}
		onUpdate() {
			this.isOpen || (this.proTop.width -= 1, this.proTop.width < .001 && (this.proTop.width = .001))
		}
		showGoldEggUI(t, e = null) {
			t ? (this.callBack_close = e, Laya.Browser.clientHeight / Laya.Browser.clientWidth < 2 && kt.hideBanner(), this.goldEggUI.visible = !0, this.proBot.visible = !0, this.proTop.width = .001, this.breakEggBtn.visible = !0, this.videoRewardBtn.visible = !1, this.closeBtn.visible = !1, this.isOpen = !1, kt.showBanner()) : (this.goldEggUI.visible = !1, kt.hideBanner(), this.isOpen = !0, this.callBack_close && this.callBack_close())
		}
		breakEggBtnClick() {
			this.proTop.width += 25, this.proTop.width >= 390 && (this.isOpen = !0, this.videoRewardBtn.visible = !0, Laya.timer.once(2e3, this, () => {
				this.closeBtn.visible = !0
			})), this.proTop.width >= 435 && (this.proTop.width = 435)
		}
		videoRewardBtnClick() {
			var t = St.getCoinNum();
			t += 300, St.setCoinNum(t), kt.showToast("Get coins:300", "none", 2e3), this.showGoldEggUI(!1)
			/*kt.showVideoAd(() => {
				var t = St.getCoinNum();
				t += 300, St.setCoinNum(t), kt.showToast("Get coins:300", "none", 2e3), this.showGoldEggUI(!1)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/
		}
		closeBtnClick() {
			this.showGoldEggUI(!1)
		}
	}
	V.instance = null;
	class O extends Laya.Script {
		constructor() {
			super(), this.call_back = null, O.instance = this
		}
		onAwake() {
			this.SuperStartUI = this.owner, this.bg = this.SuperStartUI.getChildByName("bg"), this.btn_video = this.bg.getChildByName("btn_video"), this.btn_close = this.bg.getChildByName("btn_close")
		}
		onStart() {
			this.btn_video.on(Laya.Event.CLICK, this, () => {
				S.setButtonEvents("wudikaijuui", "wudikaijuui_wudikaiju_video_start", 1, St.getCurrLvInfo(), ""),
				S.setButtonEvents("wudikaijuui", "wudikaijuui_wudikaiju_video_uccess", 5, St.getCurrLvInfo(), ""), ct.instance.isSuperStart = !0, this.ShowUI(!1)
					/*kt.showVideoAd(() => {
					S.setButtonEvents("wudikaijuui", "wudikaijuui_wudikaiju_video_uccess", 5, St.getCurrLvInfo(), ""), ct.instance.isSuperStart = !0, this.ShowUI(!1)
				}, () => { })*/
			}), this.btn_close.on(Laya.Event.CLICK, this, () => {
				ct.instance.isSuperStart = !1, this.ShowUI(!1)
			})
		}
		ShowUI(t, e) {
			this.SuperStartUI.visible = t, t ? this.call_back = e : this.call_back && this.call_back()
		}
	}
	O.instance = null;
	class G extends Laya.Script {
		constructor() {
			super(), this.isAdGetCoin = !1, this.nextLvCD = !1, this.lastSkin = "", G.instance = this
		}
		onAwake() {
			this.passUI = this.owner, this.uiBox = this.passUI.getChildAt(0), this.title = this.uiBox.getChildByName("title"), this.currLvTxt = this.uiBox.getChildByName("currLvLabel"), this.returnMainBtn = this.uiBox.getChildByName("returnMainBtn"), this.getRewardBtn_Ad = this.uiBox.getChildByName("getRewardBtn_Ad"), this.nextLvBtn = this.uiBox.getChildByName("nextLvBtn"), this.getRewardBtn_LP = this.uiBox.getChildByName("getRewardBtn_LP"), this.coinHintImg = this.uiBox.getChildByName("coin_getHintImg"), this.coinHintTxt = this.coinHintImg.getChildAt(0), this.showCoinImg = this.uiBox.getChildByName("coinShowImg"), this.showCoinTxt = this.showCoinImg.getChildAt(0), this.addCoinBtn = this.showCoinImg.getChildByName("addCoinBtn"), this.rewardSkinPanel = this.uiBox.getChildByName("rewardSkinPanel"), this.rewardSkinBg = this.rewardSkinPanel.getChildByName("rewardSkinBg"), this.skinImg = this.rewardSkinBg.getChildByName("skinImg"), this.numTxt_reward = this.rewardSkinBg.getChildByName("numTxt_reward"), this.proBot_skin = this.rewardSkinBg.getChildByName("proBot_skin"), this.proTop_skin = this.proBot_skin.getChildByName("proTop_skin"), this.proTxt_skin = this.proBot_skin.getChildByName("proTxt_skin"), this.mainBtn = this.rewardSkinBg.getChildByName("mainBtn"), this.doubleBtn = this.rewardSkinBg.getChildByName("doubleBtn"), this.check = this.doubleBtn.getChildAt(0), this.downBtn = this.rewardSkinBg.getChildByName("downBtn"), this.closeBtn = this.rewardSkinBg.getChildByName("closeBtn")
		}
		onEnable() {
			this.uiBox.on(Laya.Event.CLICK, this, this.passUIClick), A.instance.AdaptiveScreen(this.uiBox)
		}
		showPassUI(t) {
			if (t) {
				switch (this.passUI.visible = !0, ct.instance.gameMode) {
					case "level":
					case "infinite":
						x.clearPoolBySign(ct.instance.currTableModel.name), this.returnMainBtn.visible = !1, this.nextLvBtn.visible = !1, ct.instance.isOnline && Number(St.getCurrLvInfo()) > 1 ? Number(St.getCurrLvInfo()) % 2 == 1 ? R.instance.showTurnTableUI(!0, () => {
							N.instance.showRewardUI(!0, () => {
								G.instance.showBtn()
							})
						}) : V.instance.showGoldEggUI(!0, () => {
							var t = ct.instance.getUnlockLimitSkinByRandom(); - 1 != t ? E.instance.showLimitSkinUI(!0, t, () => {
								G.instance.showBtn()
							}) : G.instance.showBtn()
						}) : G.instance.showBtn(), this.currLvTxt.text = "Level " + String(St.getCurrLvInfo()), this.getRewardBtn_Ad.visible = !0, ct.instance.score <= 0 && (this.getRewardBtn_Ad.visible = !1), this.updateCoinInfo(St.getCoinNum()), kt.GameRecorder_Stop(), this.coinHintTxt.text = "+" + String(2 * ct.instance.score), ct.instance.isRewardLv && (this.coinHintTxt.text = "+" + String(2 * ct.instance.score + ct.instance.currRewardCount)), this.isAdGetCoin = !1, ct.instance.changeBallSkin(Ct.instance.skinData.currUseIndex, !1), Ct.instance.isTryUseSkin = !1, Number(St.getCurrLvInfo()) >= 2 && this.getNewSkin();
						break;
					case "balance":
						break;
					default:
						console.warn("显示过关页面：游戏模式异常，请检查！", ct.instance.gameMode)
				}
				kt.showBanner(), kt.showInterstitialAd()
			} else this.passUI.visible = !1, kt.hideBanner(), this.isAdGetCoin || this.getCoin(Number(G.instance.coinHintTxt.text.substring(1)))
		}
		showBtn() {
			Number(St.getCurrLvInfo()) <= 5 || !ct.instance.isOnline ? (this.returnMainBtn.visible = !0, this.nextLvBtn.visible = !0) : Laya.timer.once(3e3, this, () => {
				this.returnMainBtn.visible = !0, this.nextLvBtn.visible = !0
			})
		}
		passUIClick(t) {
			switch (console.log("passUI click target: ", t.target.name), t.target.name) {
				case "returnMainBtn":
					this.returnMainBtnClick();
					break;
				case "getRewardBtn_Ad":
					this.getRewardBtn_AdClick();
					break;
				case "nextLvBtn":
					this.nextLvBtnClick();
					break;
				case "getRewardBtn_LP":
					this.getRewardBtn_LPClick();
					break;
				case "addCoinBtn":
					this.addCoinBtnClick();
					break;
				case "mainBtn":
					this.mainBtnClick();
					break;
				case "doubleBtn":
					this.doubleBtnClick();
					break;
				case "downBtn":
					this.downBtnClick();
					break;
				case "closeBtn":
					this.closeBtnClick();
					break;
				case "btn_try":
					this.tryskin()
			}
		}
		tryskin() {
			S.setButtonEvents("pifusuipian", "pifusuipian_tryskin_video_start", 1, St.getCurrLvInfo(), ""),
			S.setButtonEvents("pifusuipian", "pifusuipian_tryskin_video_success", 5, St.getCurrLvInfo(), ""), this.nextLvBtnClick(!1), S.setSkinEvents("pifusuipian_try-" + ct.instance.rewardSkinIndex), ct.instance.changeBallSkin(ct.instance.rewardSkinIndex)
				/*kt.showVideoAd(() => {
				S.setButtonEvents("pifusuipian", "pifusuipian_tryskin_video_success", 5, St.getCurrLvInfo(), ""), this.nextLvBtnClick(!1), S.setSkinEvents("pifusuipian_try-" + ct.instance.rewardSkinIndex), ct.instance.changeBallSkin(ct.instance.rewardSkinIndex)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/
		}
		returnMainBtnClick() {
			this.showPassUI(!1), ct.instance.returnMain(), kt.showInterstitialAd()
		}
		nextLvBtnClick(t = !0) {
			if (St.getInfiniteData() <= 0 || !t) {
				if (St.getPowerData() <= 0) return void Laya.View.load("GameScenes/infinitePower.scene", Laya.Handler.create(this, t => {
					t.open(!1), k.instance.addInfiniteCallback(this.nextLvBtnClick.bind(this))
				}));
				St.setPowerData(St.getPowerData() - 1)
			}
			this.showPassUI(!1), ct.instance.nextLvTableModel(), 2 == Number(St.getCurrLvInfo()) && ct.instance.isOnline ? P.instance.isForceAd = !0 : P.instance.isForceAd = !1;
			ct.instance.getLockSkinByRandom(), ct.instance.getLockSkinByRandom();
			O.instance.ShowUI(!0, () => {
				ct.instance.restartGame("level")
			})
		}
		getRewardBtn_AdClick() {
			S.setButtonEvents("winui", "winui_getfivecoin_video_start", 1, St.getCurrLvInfo(), ""),
			S.setButtonEvents("winui", "winui_getfivecoin_video_success", 5, St.getCurrLvInfo(), ""), G.instance.getRewardBtn_Ad.visible = !1;
			var t = St.getCoinNum();
			t += 5 * Number(G.instance.coinHintTxt.text.substring(1)), St.setCoinNum(t), G.instance.isAdGetCoin = !0, kt.showToast("Get coins:" + String(5 * Number(G.instance.coinHintTxt.text.substring(1))), "none", 2e3)
				/*kt.showVideoAd(() => {
				S.setButtonEvents("winui", "winui_getfivecoin_video_success", 5, St.getCurrLvInfo(), ""), G.instance.getRewardBtn_Ad.visible = !1;
				var t = St.getCoinNum();
				t += 5 * Number(G.instance.coinHintTxt.text.substring(1)), St.setCoinNum(t), G.instance.isAdGetCoin = !0, kt.showToast("Get coins:" + String(5 * Number(G.instance.coinHintTxt.text.substring(1))), "none", 2e3)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/
		}
		getRewardBtn_LPClick() {
			S.setButtonEvents("winui", "winui_sharelp_start", 2, St.getCurrLvInfo(), ""), kt.GameRecorder_Release(() => {
				S.setButtonEvents("winui", "winui_sharelp_success", 6, St.getCurrLvInfo(), ""), G.instance.getRewardBtn_LP.visible = !1;
				var t = St.getCoinNum();
				t += 200, St.setCoinNum(t), kt.showToast("Get coins：200", "none", 2e3)
			}, () => {
				kt.showToast("录屏不足3秒，无法发布", "none", 2e3)
			}, () => {
				kt.showToast("成功发布录屏即可获得奖励", "none", 2e3)
			})
		}
		storeBtnClick() {
			Ct.instance.showStoreUI(!0)
		}
		addCoinBtnClick() {
			S.setButtonEvents("winui", "winui_addcoin_video_start", 1, St.getCurrLvInfo(), ""),
			S.setButtonEvents("winui", "winui_addcoin_video_success", 5, St.getCurrLvInfo(), ""), this.getCoin(200)
			/*kt.showVideoAd(() => {
				S.setButtonEvents("winui", "winui_addcoin_video_success", 5, St.getCurrLvInfo(), ""), this.getCoin(200)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/
		}
		updateCoinInfo(t) {
			this.showCoinTxt.text = String(t)
		}
		getCoin(t) {
			var e = St.getCoinNum();
			e += t, St.setCoinNum(e), kt.showToast("Get coins:" + String(t), "none", 2e3)
		}
		getNewSkin() {
			Laya.timer.once(300, this, () => {
				this.showRewardSkinPanel(!0)
			})
		}
		showRewardSkinPanel(t) {
			this.rewardSkinPanel.visible = t, t && (ct.instance.isOnline ? (this.doubleBtn.visible = !0, this.check.visible = !0, this.downBtn.visible = !1, this.closeBtn.visible = !1, Laya.timer.once(2e3, this, () => {
				this.closeBtn.visible = !0
			}), this.numTxt_reward.text = "x2") : (this.doubleBtn.visible = !1, this.downBtn.visible = !0, this.downBtn.skin = "UI/passUI/one_P.png", this.closeBtn.visible = !0, this.numTxt_reward.text = "x1"), this.mainBtn.visible = !0, this.mainBtn.skin = "UI/passUI/two_Ad.png", this.skinImg.skin = Ct.instance.skinData.skinData[ct.instance.rewardSkinIndex].skinUrl, this.lastSkin = this.mainBtn.skin, this.proTxt_skin.text = String(Ct.instance.skinData.skinData[ct.instance.rewardSkinIndex].speCount) + "/10", this.proTop_skin.width = 392 * Ct.instance.skinData.skinData[ct.instance.rewardSkinIndex].speCount / 10 < 1 ? 1 : 392 * Ct.instance.skinData.skinData[ct.instance.rewardSkinIndex].speCount / 10, console.log(392 * Ct.instance.skinData.skinData[ct.instance.rewardSkinIndex].speCount / 10))
		}
		mainBtnClick() {
			switch (this.mainBtn.skin) {
				case "UI/passUI/one_P.png":
					Ct.instance.getNewSkinS(ct.instance.rewardSkinIndex, 1), this.showRewardSkinPanel(!1);
					break;
				case "UI/passUI/two_S.png":
					var t = St.getShareWord();
					kt.shareAppMessage("", St.shareWords[t - 1], "subPackage/res/shareImg" + String(t) + ".jpg", "", null, () => {
						Ct.instance.getNewSkinS(ct.instance.rewardSkinIndex, 2), G.instance.showRewardSkinPanel(!1)
					}, () => { }, () => {
						kt.showToast("分享成功即可获得奖励", "none", 2e3)
					});
					break;
				case "UI/passUI/two_Ad.png":
					S.setButtonEvents("pifusuipian", "pifusuipian_doubleget_video_start", 1, St.getCurrLvInfo(), ""),
						S.setButtonEvents("pifusuipian", "pifusuipian_doubleget_video_success", 5, St.getCurrLvInfo(), ""), Ct.instance.getNewSkinS(ct.instance.rewardSkinIndex, 2), G.instance.showRewardSkinPanel(!1)
					/*kt.showVideoAd(() => {
						S.setButtonEvents("pifusuipian", "pifusuipian_doubleget_video_success", 5, St.getCurrLvInfo(), ""), Ct.instance.getNewSkinS(ct.instance.rewardSkinIndex, 2), G.instance.showRewardSkinPanel(!1)
					}, () => {
						kt.showToast("Get rewarded after watching the video", "none", 2e3)
					})*/
			}
		}
		doubleBtnClick() {
			this.check.visible ? (this.check.visible = !1, this.lastSkin = this.mainBtn.skin, this.mainBtn.skin = "UI/passUI/one_P.png", this.numTxt_reward.text = "x1") : (this.check.visible = !0, this.mainBtn.skin = this.lastSkin, this.numTxt_reward.text = "x2")
		}
		downBtnClick() {
			Ct.instance.getNewSkinS(ct.instance.rewardSkinIndex, 1), this.showRewardSkinPanel(!1)
		}
		closeBtnClick() {
			this.showRewardSkinPanel(!1)
		}
	}
	G.instance = null;
	class F extends Laya.Script {
		constructor() {
			super(), this.isShowCourse = !0, this.isShowCourse2 = !0, this.tempV3 = new Laya.Vector3(0, 0, 0), this.isBossLvTime = !1, this.lastTime = 0, this.hideBoxTimer = !1, F.instance = this
		}
		onAwake() {
			this.fightUI = this.owner, this.uiBox = this.fightUI.getChildAt(0), this.scoreLabel = this.uiBox.getChildByName("scoreLabel"), this.lvProBot = this.uiBox.getChildByName("lvProBot"), this.lvProTop = this.lvProBot.getChildByName("lvProTop"), this.currLvTxt = this.lvProBot.getChildByName("currLvBg").getChildAt(0), this.nextLvTxt = this.lvProBot.getChildByName("nextLvBg").getChildAt(0), this.highestScore = this.uiBox.getChildByName("highestScore"), this.scoreDelete = this.uiBox.getChildByName("scoreDelete"), this.jcBox = this.uiBox.getChildByName("jcBox"), this.jcTxt1 = this.jcBox.getChildByName("jcTxt1"), this.jcTxt2 = this.jcBox.getChildByName("jcTxt2"), this.bossLvBox = this.uiBox.getChildByName("bossLvBox"), this.proTop_boss = this.bossLvBox.getChildAt(1).getChildAt(0), this.rewardLvBox = this.uiBox.getChildByName("rewardLvBox"), this.proTop_reward = this.rewardLvBox.getChildAt(1).getChildAt(0), this.ballStateBot = this.uiBox.getChildByName("ballStateBot"), this.ballStateTop = this.ballStateBot.getChildByName("ballStateTop")
		}
		onEnable() {
			A.instance.AdaptiveScreen(this.uiBox), "" != Laya.LocalStorage.getItem("Course") && null != Laya.LocalStorage.getItem("Course") || (this.isShowCourse = !0)
		}
		onUpdate() {
			ct.instance.isBossLv && this.isBossLvTime && "level" == ct.instance.gameMode && (ct.instance.time_BossLv -= Laya.timer.delta / 1e3 > .04 ? .02 : Laya.timer.delta / 1e3, ct.instance.time_BossLv < 0 && (ct.instance.time_BossLv = 0), this.proTop_boss.width = ct.instance.time_BossLv / 30 * 445, ct.instance.time_BossLv <= 0 && (this.isBossLvTime = !1, ct.instance.ballCtrl.isDie = !0, ct.instance.setGameover(), console.log("Boss关卡未在规定时间内完成，通关失败！")))
		}
		showFightUI(t) {
			if (this.fightUI.visible = t, t) switch (this.scoreLabel.text = String(ct.instance.score), this.lvProTop.scaleX = ct.instance.passCount / ct.instance.currLvLength, this.onUpdateLvInfo(), this.ballStateTop.height = .001, this.ballStateBot.skin = "UI/fightUI/ballStateCom.png", ct.instance.gameMode) {
				case "level":
					ct.instance.isBossLv ? (this.lvProBot.visible = !1, this.bossLvBox.visible = !0, this.rewardLvBox.visible = !1, this.isBossLvTime = !0, this.proTop_boss.width = 445, F.instance.showJcBox(!0, "Tips", "You only have 30s")) : ct.instance.isRewardLv ? (this.lvProBot.visible = !1, this.bossLvBox.visible = !1, this.rewardLvBox.visible = !0, this.proTop_reward.width = 1, this.showJcBox(!0, "Bonus level open", "Come and win the coins!")) : (this.lvProBot.visible = !0, this.bossLvBox.visible = !1, this.rewardLvBox.visible = !1, St.getCurrLvInfo() <= 3 && this.showJcBox(!0, "Press and hold", "Avoid black obstacles")), this.highestScore.visible = !1, this.scoreDelete.visible = !1;
					break;
				case "infinite":
					this.lvProBot.visible = !1, this.bossLvBox.visible = !1, this.rewardLvBox.visible = !1, 0 != St.getHighestScore() ? (this.highestScore.visible = !0, this.highestScore.text = "Best Record:" + St.getHighestScore()) : this.highestScore.visible = !1, this.scoreDelete.visible = !1, St.getGameCountInfo() <= 3 && this.showJcBox(!0, "Press and hold", "Avoid black obstacles");
					break;
				case "balance":
					this.lvProBot.visible = !1, this.bossLvBox.visible = !1, this.rewardLvBox.visible = !1, this.highestScore.visible = !1, this.scoreDelete.visible = !1, St.getBalanceLvInfo() <= 3 && this.showJcBox(!0, "Click to remove a layer.", "Be careful not to fall.")
			} else this.isBossLvTime = !1, this.showJcBox(!1, "", "")
		}
		courseBtnClick() {
			ct.instance.isCoursePause = !1
		}
		showJcBox(t, e, i) {
			null != this.jcBox && (0 == t ? !this.hideBoxTimer && this.jcBox.visible && (this.hideBoxTimer = !0, Laya.timer.once(3e3, this, () => {
				console.log("显示教程 " + t), this.jcBox.visible = !1, this.hideBoxTimer = !1
			})) : (this.jcBox.visible = t, this.jcTxt1.text = e, this.jcTxt2.text = i))
		}
		updateSocreLabel(t) {
			this.scoreLabel.text = String(t), "infinite" == ct.instance.gameMode && 0 != St.getHighestScore() && t > St.getHighestScore() && (this.scoreDelete.visible = !0)
		}
		onUpdateLvPro(t) {
			this.lvProTop.scaleX = t / ct.instance.currLvLength, this.lvProTop.scaleX >= .5 && this.tempV3.setValue(0, 60.3 + _.ground.transform.position.y, 0), this.rewardLvBox.visible && (this.proTop_reward.width = t / ct.instance.currLvLength * 445 < 1 ? 1 : t / ct.instance.currLvLength * 445)
		}
		onUpdateLvInfo() {
			switch (ct.instance.gameMode) {
				case "level":
				case "infinite":
					this.currLvTxt.text = String(St.getCurrLvInfo()), this.nextLvTxt.text = String(St.getCurrLvInfo() + 1);
					break;
				case "balance":
					break;
				default:
					console.warn("更新关卡信息：游戏模式异常，请检查！", ct.instance.gameMode)
			}
		}
		updateBallStateBar(t, e) {
			switch (e) {
				case j.FAIL_COM:
					"UI/fightUI/ballStateCom.png" != this.ballStateBot.skin && (this.ballStateBot.skin = "UI/fightUI/ballStateCom.png"), this.showJcBox(!1, "Invincibility", "Go on! Faster!");
					break;
				case j.FAIL_WD:
					"UI/fightUI/ballStateWU.png" != this.ballStateBot.skin && (this.ballStateBot.skin = "UI/fightUI/ballStateWU.png"), this.showJcBox(!0, "Invincibility", "Go on! Faster!")
			}
			t <= .01 && (t = .001), this.ballStateTop.height = 312 * t
		}
	}
	F.instance = null;
	class H extends Laya.Script3D {
		constructor() {
			super(), this.rotateSpeedV3 = new Laya.Vector3(0, -.64, 0), this.rotateSp_self = new Laya.Vector3(0, 1, 0), this.offsetAngle = 0
		}
		onAwake() {
			this.selfModel = this.owner, this.childModel = this.selfModel.getChildByName("coinModel")
		}
		onStart() { }
		onUpdate() {
			this.targetb && this.targetb.active && !this.targettbc.isClear ? this.selfModel.transform.localRotationEulerY = this.targetb.transform.localRotationEulerY + this.offsetAngle : this.selfModel.transform.rotate(this.rotateSpeedV3, !0, !1)
		}
		setTargetTable(t, e) {
			this.targetb = t, this.targettbc = this.targetb.getComponent(U), this.offsetAngle = e
		}
	}
	class Y extends Laya.Script3D {
		constructor() {
			super(), this.rotateSpeedV3 = new Laya.Vector3(0, -.64, 0), this.rsV3 = new Laya.Vector3(0, 2, 0), this.offsetAngle = 0, this.myPosY = 0, this.traV3 = new Laya.Vector3(0, .01, 0)
		}
		onAwake() {
			this.selfModel = this.owner, this.childModel = this.selfModel.getChildByName("boxModel")
		}
		onStart() {
			this.myPosY = this.childModel.transform.position.y
		}
		onUpdate() {
			this.targetb && this.targetb.active && !this.targettbc.isClear ? this.selfModel.transform.localRotationEulerY = this.targetb.transform.localRotationEulerY + this.offsetAngle : this.selfModel.transform.rotate(this.rotateSpeedV3, !0, !1), this.childModel.transform.rotate(this.rsV3, !1, !1), this.childModel.transform.position.y - this.myPosY >= .1 && this.traV3.setValue(0, -.003, 0), this.childModel.transform.position.y - this.myPosY <= -.1 && this.traV3.setValue(0, .003, 0), this.childModel.transform.translate(this.traV3, !1)
		}
		setTargetTable(t, e) {
			this.targetb = t, this.targettbc = this.targetb.getComponent(U), this.offsetAngle = e
		}
	}
	class K extends Laya.Script {
		constructor() {
			super(), this.bxBg = [], this.bx_open = [], this.bx_close = [], this.bx_video = [], this.coin_num = [], this.bigReward = [], this.currentKeyCount = 0, this.isBaoxiangOpen = [0, 0, 0, 0, 0, 0, 0, 0, 0], this.bx_reward = [0, 0, 0, 0, 0, 0, 0, 0, 0], this.bx_coin_count = [100, 200, 500, 1e3], this.bx_position = [], this.bx_position_new = [], this.randomChange = [], this.bx_reward_index1 = [1, 1, 2, 1, 2, 3, 1, 2, 4], this.bx_reward_index2 = [1, 1, 2, 3, 2, 3, 1, 2, 1], this.openBaoxiangTimes = 0, this.isBxReward = [50, 50, 100, 50, 50, 100, 50, 100], this.isCantouch = !1, this.isHaveBigReward_index = 0, K.instance = this
		}
		onAwake() {
			this._ui = this.owner, this._bg = this._ui.getChildByName("bg"), this._title = this._bg.getChildByName("title"), this._btn_close = this._bg.getChildByName("btn_close"), this._nine_box = this._bg.getChildByName("nineBox");
			for (let t = 0; t < 9; t++) this.bxBg[t] = this._nine_box.getChildAt(t), this.bx_open[t] = this.bxBg[t].getChildByName("open"), this.coin_num[t] = this.bx_open[t].getChildByName("num"), this.bigReward[t] = this.bxBg[t].getChildByName("bigReward"), this.bx_close[t] = this.bxBg[t].getChildByName("close"), this.bx_video[t] = this.bxBg[t].getChildByName("video"), this.bx_open[t].visible = !1, this.bigReward[t].visible = !1, this.bx_video[t].visible = !1, this.bx_close[t].visible = !0
		}
		onStart() {
			this._btn_close.on(Laya.Event.CLICK, this, this._close_click);
			for (var t = 0; t < 9; t++) this.bxBg[t].on(Laya.Event.CLICK, this, this.BaoxiangBoxClick);
			this.AdaptScene()
		}
		AdaptScene() {
			Laya.Browser.height / Laya.Browser.width <= 1.8 ? (this._title.centerY -= 50, this._nine_box.centerY -= 60, this._btn_close.centerY -= 60) : Laya.Browser.height / Laya.Browser.width <= 2 && (this._title.centerY -= 30, this._nine_box.centerY -= 30, this._btn_close.centerY -= 30)
		}
		BaoxiangBoxClick(t) {
			var e = Number(t.target.name.substring(3)) - 1;
			if (this.isCantouch)
				if (this._btn_close.visible = !0, this.currentKeyCount > 0) {
					console.log("nhay vao if di");
					if (0 == this.isBaoxiangOpen[e]) {
						if (this.currentKeyCount--, this.bx_open[e].visible = !0, this.bigReward[e].visible = !1, this.bx_video[e].visible = !1, this.bx_close[e].visible = !1, console.log("--------", e, this.bx_reward[e]), 4 == this.bx_reward[e]) switch (this.Change_bigReward_smallReward(e), this.isBaoxiangOpen[e] = this.bx_reward[e], this.bx_reward[e]) {
							case 1:
								this.getCoin(100);
								break;
							case 2:
								this.getCoin(200);
								break;
							case 3:
								this.getCoin(500)
						} else switch (this.isBaoxiangOpen[e] = this.bx_reward[e], this.bx_reward[e]) {
							case 1:
								this.getCoin(100);
								break;
							case 2:
								this.getCoin(200);
								break;
							case 3:
								this.getCoin(500)
						}
						this.changeBaoxiangSkin()
					} else kt.showToast("The treasure chest opened");
				}
				else {					
					var i = this;					
					0 == i.isBaoxiangOpen[e] && (S.setButtonEvents("xingyunbaoxiang", "xingyunbaoxiang_open_video_start", 1, -1, ""))
					console.log("khong biet co nhay vao day ko");
					if (S.setButtonEvents("xingyunbaoxiang", "xingyunbaoxiang_open_video_start", 1, -1, ""),
						this.bx_video[e].visible = !1,
						this.bx_close[e].visible = !1,
						this.bigReward[e].visible = !1,
						this.bx_open[e].visible = !0,
						i.isBaoxiangOpen[e] = i.bx_reward[e],
						4 == i.bx_reward[e])
						this.bigReward[e].visible = !0,
							this.bx_open[e].visible = !1,
							localStorage.setItem("Fall_dzq_data_isHave_nineBox_bigreward", "1"),
							console.log(this.spSkinId+"id skin limit lucky shiet"),
							B.instance.skinData.skinData[this.spSkinId].isOwn = !0,
							B.instance.skinData.skinData[this.spSkinId].state = 2,
							bt.setSkinInfoData(B.instance.skinData),
							n.showToast("Congrats on getting the limited skin");
					else
						switch (this.bx_reward[e]) {
							case 1:
								this.getCoin(100);
								break;
							case 2:
								this.getCoin(200);
								break;
							case 3:
								this.getCoin(500)
						}
					i.changeBaoxiangSkin()					
				}
		}
		bypassAdsLucky()
		{
			console.log("vao day di zzz")			
		}
		getCoin(t) {
			var e = St.getCoinNum();
			e += t, St.setCoinNum(e), kt.showToast("Get coins:" + t, "none", 2e3)
		}
		changeBaoxiangSkin() {
			if (this.currentKeyCount > 0)
				for (let t = 0; t < 9; t++) 0 == this.isBaoxiangOpen[t] && (this.bx_video[t].visible = !1, this.bx_close[t].visible = !0, this.bigReward[t].visible = !1, this.bx_open[t].visible = !1);
			else {
				for (let t = 0; t < 9; t++) 0 == this.isBaoxiangOpen[t] && (this.bx_video[t].visible = !0, this.bx_close[t].visible = !1, 4 == this.bx_reward[t] ? (this.bigReward[t].visible = !0, this.bx_open[t].visible = !1) : (this.bigReward[t].visible = !1, this.bx_open[t].visible = !0));
				this._btn_close.visible = !0
			}
		}
		ShowUi(t, e) {
			if (t) {
				Laya.Browser.height / Laya.Browser.width >= 2 && kt.showBanner(), Laya.timer.once(500, this, () => {
					kt.showInterstitialAd()
				}), this.isCantouch = !1;
				let s = Math.random();
				this.currentKeyCount = s <= .6 ? 3 : 2, this._btn_close.visible = !1;
				for (var i = 0; i < 9; i++) this.isBaoxiangOpen[i] = 0;
				this.openBaoxiangTimes = 0, this.InitBxUI(), this.call_back = e, this._ui.visible = t, this._ui.scaleX = 0, this._ui.scaleY = 0, Laya.Tween.to(this._ui, {
					scaleX: 1,
					scaleY: 1
				}, 400, Laya.Ease.circOut)
			} else kt.hideBanner(), Laya.Tween.to(this._ui, {
				scaleX: 0,
				scaleY: 0
			}, 400, Laya.Ease.backIn, Laya.Handler.create(this, () => {
				this._ui.visible = t, this.call_back && this.call_back()
			}))
		}
		getRandNumForRange(t, e, i) {
			let s, a = [],
				n = [];
			for (let i = t; i <= e; i++) a.push(i);
			for (let t = 0; t < i; t++) s = Math.floor(Math.random() * a.length), n.push(a[s]), a.splice(s, 1);
			return n
		}
		InitBxUI() {
			let t = localStorage.getItem("dzq_data_isHave_nineBox_bigreward");
			if (Ct.instance.skinData.skinData[9].isOwn || "" != t && null != t && null != t) {
				let t = this.getRandNumForRange(0, 8, 9);
				for (let e = 0; e < t.length; e++) this.bx_reward[e] = this.bx_reward_index2[t[e]];
				this.isHaveBigReward_index = -1, console.log("---当前奖励顺序--", this.bx_reward)
			} else {
				let t = this.getRandNumForRange(0, 8, 9);
				for (let e = 0; e < t.length; e++) this.bx_reward[e] = this.bx_reward_index1[t[e]], 4 == this.bx_reward[e] && (this.isHaveBigReward_index = e);
				console.log("---当前奖励顺序--", this.bx_reward)
			}
			this.bx_position = [];
			for (let t = 0; t <= 8; t++) this.bx_position.push(new Laya.Vector2(this.bxBg[t].centerX, this.bxBg[t].centerY)), this.coin_num[t].value = "" + this.bx_coin_count[this.bx_reward[t] - 1];
			this.showBxAnim()
		}
		Change_bigReward_smallReward(t) {
			this.randomChange = [];
			for (let e = 0; e <= 8; e++) 0 == this.isBaoxiangOpen[e] && t != e && this.randomChange.push(e);
			let e = this.GetRandomInt(0, this.randomChange.length);
			console.log("----大奖换的位置---", this.randomChange, this.randomChange[e]);
			let i = 0;
			i = this.bx_reward[t], this.bx_reward[t] = this.bx_reward[this.randomChange[e]], this.bx_reward[this.randomChange[e]] = i, this.InitbxCoin()
		}
		InitbxCoin() {
			for (let t = 0; t <= 8; t++) this.coin_num[t].value = "" + this.bx_coin_count[this.bx_reward[t] - 1]
		}
		GetRandomInt(t, e) {
			var i = e - t,
				s = Math.random();
			return t + Math.floor(s * i)
		}
		showBxAnim() {
			this.bx_position_new = [];
			let t = this.getRandNumForRange(0, 8, 9);
			for (let e = 0; e < t.length; e++) this.bx_position_new.push(this.bx_position[t[e]]);
			if (console.log("---交换之后的位置---", t, this.bx_position, this.bx_position_new), this.isHaveBigReward_index > 0)
				for (let t = 0; t <= 8; t++) this.bx_close[t].visible = !1, this.bx_video[t].visible = !1, t == this.isHaveBigReward_index ? (this.bigReward[t].visible = !0, this.bx_open[t].visible = !1) : (this.bigReward[t].visible = !1, this.bx_open[t].visible = !0), Laya.timer.once(100 * t + 500, this, () => {
					Laya.Tween.to(this.bxBg[t], {
						centerX: 0,
						centerY: 0
					}, 500, null, Laya.Handler.create(this, () => {
						this.bx_video[t].visible = !1, this.bx_close[t].visible = !0, this.bigReward[t].visible = !1, this.bx_open[t].visible = !1, Laya.timer.once(500 + 100 * (9 - t), this, () => {
							Laya.Tween.to(this.bxBg[t], {
								centerX: this.bx_position_new[t].x,
								centerY: this.bx_position_new[t].y
							}, 500, null, Laya.Handler.create(this, () => {
								8 == t && (this.isCantouch = !0)
							}))
						})
					}))
				});
			else
				for (let t = 0; t <= 8; t++) {
					this.bx_video[t].visible = !1, this.bx_close[t].visible = !1, this.bigReward[t].visible = !1, this.bx_open[t].visible = !0;
					Laya.timer.once(100 * t + 500, this, () => {
						Laya.Tween.to(this.bxBg[t], {
							centerX: 0,
							centerY: 0
						}, 500, null, Laya.Handler.create(this, () => {
							this.bx_video[t].visible = !1, this.bx_close[t].visible = !0, this.bigReward[t].visible = !1, this.bx_open[t].visible = !1, Laya.timer.once(500 + 100 * (9 - t), this, () => {
								Laya.Tween.to(this.bxBg[t], {
									centerX: this.bx_position_new[t].x,
									centerY: this.bx_position_new[t].y
								}, 500, null, Laya.Handler.create(this, () => {
									8 == t && (this.isCantouch = !0)
								}))
							})
						}))
					})
				}
		}
		_yes_click() { }
		_close_click() {
			this.ShowUi(!1)
		}
	}
	class z extends Laya.Script3D {
		constructor() {
			super(), this.initV = 25, this.ballSpeed = 25, this.ballSpeedV3 = new Laya.Vector3(0, 0, 0), this.aSpeed = 1.5, this.scaleSpeed = .01, this.scaleSpeed_X = .01, this.movePause = !1, this.isFirstGround = !0, this.ballMaxSpeed = 25, this.ballMaxFallSpeed = -30, this.isDie = !1, this.ballState = j.COM, this.dieTime = 0, this.isTimeDie = !1, this.isMouseDown = !1, this.isMouesUp = !1, this.downTime = 0, this.wuTime = 0, this.isPlayPassSound = !1, z.instance = this
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onStart() {
			Laya.Browser.onIOS && "iPhone 6" == kt.getSystemInfo().model.substring(0, 8) && (this.ballSpeed = 75, this.initV = 75, this.aSpeed = 9, this.scaleSpeed_X = .03, this.ballMaxSpeed = 90, this.ballMaxFallSpeed = -60)
		}
		onUpdate() {
			ct.instance.isLoadUIClose && (this.isDie || ct.instance.isCoursePause || (this.movePause || (this.isMouseDown && ct.instance.isInGame ? (this.ballSpeed = this.ballMaxFallSpeed, this.ballState == j.COM && (this.ballState = j.FAIL_COM)) : (this.ballSpeed -= this.aSpeed, Math.abs(this.ballSpeed) >= Math.abs(this.ballMaxSpeed) && (this.ballSpeed = Math.abs(this.ballMaxSpeed) * (this.ballSpeed / Math.abs(this.ballSpeed)))), this.ballSpeedV3.setValue(0, .002 * this.ballSpeed, 0), this.selfModel.transform.translate(this.ballSpeedV3, !1), this.ballState != j.COM || _.ball_Type9.active || _.ball_Type8.active || _.ball_Type7.active || _.ball_Type10.active || _.ball_Type12.active || (this.selfModel.transform.localScaleX >= 1.1 && (this.scaleSpeed = -this.scaleSpeed_X), this.selfModel.transform.localScaleX <= .9 && (this.scaleSpeed = this.scaleSpeed_X), this.selfModel.transform.localScaleX += this.scaleSpeed, this.selfModel.transform.localScaleY -= this.scaleSpeed), _.ball_Type6.active && (this.ballState != j.COM ? _.trail.active = !0 : _.trail.active = !1)), ct.instance.isGameover || (this.isMouseDown && ct.instance.isInGame ? (this.downTime <= 2.2 && (this.downTime += Laya.timer.delta / 1e3), this.downTime >= 0 && this.ballState == j.COM && (this.ballState = j.FAIL_COM), this.downTime >= 2.2 && this.ballState == j.FAIL_COM && (this.ballState = j.FAIL_WD), this.downTime >= .2 && this.ballState != j.FAIL_WD && F.instance.updateBallStateBar((this.downTime - .2) / 2, j.FAIL_COM)) : (0 != this.wuTime && this.wuTime < 2 ? (this.wuTime += Laya.timer.delta / 1e3, F.instance.updateBallStateBar((2 - this.wuTime) / 2, j.FAIL_WD), this.wuTime >= 2 && (this.wuTime = 0, this.downTime = 0)) : this.downTime >= 0 && this.ballState != j.FAIL_WD && (F.instance.updateBallStateBar((this.downTime - .2) / 2, j.FAIL_COM), this.downTime -= Laya.timer.delta / 1e3), ct.instance.isSuperStart || this.ballState == j.COM ? Laya.timer.once(3e3, this, () => {
				ct.instance.isSuperStart = !1
			}) : this.ballState = j.COM), ct.instance.tableArray[0] && ct.instance.tableArray[0].transform.position.y - this.selfModel.transform.position.y >= .5 && ct.instance.recoveryTable(ct.instance.tableArray.shift()), ct.instance.isInGame && (this.ballState == j.FAIL_WD ? _.wudiEffect.active || (_.wudiEffect.active = !0, _.trail.active = !1) : (_.trail.active || _.ball_Type1.active && (_.trail.active = !0), _.wudiEffect.active && (_.wudiEffect.active = !1)), this.ballState != j.COM ? _.ball_Type2.active && (_.ball_Type2.getChildAt(0).active = !0) : _.ball_Type2.active && (_.ball_Type2.getChildAt(0).active = !1)), ct.instance.isInGame && (this.ballState == j.COM ? this.isPlayPassSound && (this.isPlayPassSound = !1, kt.BGM_Stop()) : this.isPlayPassSound || (this.isPlayPassSound = !0, kt.BGM_Play())), this.ballState == j.FAIL_WD && (this.wuTime += Laya.timer.delta / 1e3, F.instance.updateBallStateBar((2 - this.wuTime) / 2, j.FAIL_WD), this.wuTime >= 2 && (this.ballState = j.FAIL_COM, this.wuTime = 0, this.downTime = 0)), this.isTimeDie && (this.dieTime += Laya.timer.delta / 1e3, this.dieTime >= .08 && (this.isTimeDie = !1, this.dieTime = 0, this.setBallDie())))))
		}
		SuperStartCall() {
			this.ballState = j.FAIL_WD, this.wuTime = 1
		}
		setTime() {
			this.downTime = 0, this.wuTime = 0, this.ballState = j.COM, this.isMouseDown = !1, this.isMouesUp = !0, ct.instance.isGameover = !1
		}
		onTriggerEnter(t) {
			"TurnTable" != t.owner.name && -1 == t.owner.name.search("SpecialPart") || this.ballState == j.COM && kt.playSound(St.jump), "Ground" == t.owner.name && kt.playSound(St.jump), "collider_Coin" == t.owner.name && ct.instance.isInGame && (null != t.owner.parent.getComponent(H) && t.owner.parent.getComponent(H).destroy(), x.recoveryItemBySign(t.owner.parent.name, t.owner.parent), ct.instance.currRewardCount++, ct.instance.createCoinEffect(t.owner.parent.getChildByName("coinModel").transform.position), kt.playSound(St.coin)), "collider_Box" == t.owner.name && (null != t.owner.parent.getComponent(Y) && t.owner.parent.getComponent(Y).destroy(), x.recoveryItemBySign(t.owner.name, t.owner.parent), ct.instance.isGetRewardSkin = !0)
		}
		onTriggerStay(t) {
			if ("TurnTable" == t.owner.name || -1 != t.owner.name.search("SpecialPart")) switch (this.ballState) {
				case j.COM:
					this.ballSpeed = this.initV, ct.instance.CreateBurstEffect(this.selfModel.transform.position, t.owner.transform.position), ct.instance.CreateStampEffect(t.owner.parent), kt.vibrate();
					break;
				case j.FAIL_COM:
					"TurnTable" == t.owner.name ? (t.owner.parent && t.owner.parent.getComponent(U).setTurnTableClear(), ct.instance.nextTurnTable()) : (this.isTimeDie = !0, console.log("已死亡！"), this.movePause = !0), kt.vibrate();
					break;
				case j.FAIL_WD:
					t.owner.parent && t.owner.parent.getComponent(U).setTurnTableClear(), ct.instance.nextTurnTable(), kt.vibrate();
					break;
				default:
					console.log("****")
			}
			"Ground" == t.owner.name && (this.ballSpeed = this.initV, this.isFirstGround && (this.isFirstGround = !1, this.ballState = j.COM, ct.instance.isInGame = !1, ct.instance.isGameover = !0, ct.instance.groundCtrl.setScaleChange(), kt.GameRecorder_Stop(), Laya.timer.once(300, this, () => {
				ct.instance.nextLvTableModel(), F.instance.showFightUI(!1), K.instance.ShowUi(!0, () => {
					G.instance.showPassUI(!0)
				})
			}), _.passEffect.transform.position = this.selfModel.transform.position, _.passEffect.active = !0, kt.BGM_Stop()))
		}
		setBallDie() {
			this.isMouseDown ? (this.isDie = !0, this.selfModel.active = !1, this.resetConfigData(), ct.instance.setGameover(), console.log("遇到障碍，通关失败！"), kt.BGM_Stop()) : (this.ballSpeed = this.initV, this.movePause = !1, ct.instance.tableArray[0] && ct.instance.tableArray[0].getComponent(U).setScaleChange())
		}
		resetConfigData() {
			this.downTime = 0, this.ballState = j.COM, this.wuTime = 0, this.movePause = !1, this.isMouesUp = !0, this.isMouseDown = !1, this.isFirstGround = !0
		}
		TurnOnStageEvent() {
			Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.OnMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.OnMouseUp), Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.OnMouseOut)
		}
		OnMouseDown(t) {
			"gameRecorderBtn" != t.target.name && (this.isMouseDown || (this.isMouseDown = !0, this.isMouesUp = !1, St.getCurrLvInfo() <= 3 && F.instance && F.instance.showJcBox(!1, "", ""), ct.instance.isBossLv && F.instance && F.instance.showJcBox(!1, "", "")))
		}
		OnMouseUp() {
			this.isMouesUp || (this.isMouesUp = !0, this.isMouseDown = !1, ("level" == ct.instance.gameMode && St.getCurrLvInfo() <= 3 || "infinite" == ct.instance.gameMode && St.getGameCountInfo() <= 3) && F.instance && F.instance.showJcBox(!0, "Press and hold", "Avoid black obstacles"))
		}
		OnMouseOut() {
			this.isMouesUp || (this.isMouesUp = !0, this.isMouseDown = !1, ("level" == ct.instance.gameMode && St.getCurrLvInfo() <= 3 || "infinite" == ct.instance.gameMode && St.getGameCountInfo() <= 3) && F.instance && F.instance.showJcBox(!0, "Press and hold", "Avoid black obstacles"))
		}
	}
	var j;
	z.instance = null,
		function (t) {
			t[t.COM = 0] = "COM", t[t.FAIL_COM = 1] = "FAIL_COM", t[t.FAIL_WD = 2] = "FAIL_WD"
		}(j || (j = {}));
	class X extends Laya.Script3D {
		constructor() {
			super(), this.cameraPos = new Laya.Vector3(0, 0, 0), this.cameraSpeed = -.04, this.spV3 = new Laya.Vector3(0, 0, 0), this.originPosY = 0
		}
		onAwake() {
			this.selfCamera = this.owner
		}
		onStart() {
			this.cameraPos.setValue(this.selfCamera.transform.position.x, this.selfCamera.transform.position.y, this.selfCamera.transform.position.z), this.originPosY = this.selfCamera.transform.position.y - ct.instance.currTableModel.transform.position.y
		}
		onUpdate() {
			ct.instance.isGameover || (ct.instance.tableArray.length > 0 && this.selfCamera.transform.position.y - ct.instance.tableArray[0].transform.position.y != this.originPosY && (Laya.Browser.onIOS && "iPhone 6" == kt.getSystemInfo().model.substring(0, 8) && (this.cameraSpeed *= 2), this.spV3.setValue(0, this.cameraSpeed, 0), (this.selfCamera.transform.position.y - _.ground.transform.position.y >= 2.3 || "infinite" == ct.instance.gameMode) && (this.selfCamera.transform.translate(this.spV3, !1), _.zhuzi.transform.translate(this.spV3, !1)), this.selfCamera.transform.position.y - ct.instance.tableArray[0].transform.position.y <= this.originPosY && (this.cameraPos.setValue(this.cameraPos.x, ct.instance.tableArray[0].transform.position.y + this.originPosY, this.cameraPos.z), this.selfCamera.transform.position = this.cameraPos)), _.ball.active ? (this.selfCamera.transform.position.y - _.ball.transform.position.y >= 1.2 && (this.cameraSpeed = -.06), this.selfCamera.transform.position.y - _.ball.transform.position.y <= .8 && (this.cameraSpeed = -.04)) : this.cameraSpeed = -.04)
		}
		resetPos() {
			this.cameraPos.setValue(0, 4.5, -4.3), this.selfCamera.transform.position = this.cameraPos
		}
	}
	class J extends Laya.Script3D {
		constructor() {
			super(), this.rotateSpeed = new Laya.Vector3(0, -1, 0)
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onStart() {
			Laya.Browser.onIOS && "iPhone 6" == kt.getSystemInfo().model.substring(0, 8) && this.rotateSpeed.setValue(0, -3, 0)
		}
		onUpdate() {
			this.selfModel.transform.rotate(this.rotateSpeed, !0, !1)
		}
		setScaleChange() {
			this.ToBig()
		}
		ToBig() {
			this.selfModel.transform.localScale, Laya.Tween.to(this.selfModel.transform, {
				localScaleX: 1.2,
				localScaleY: 1.2,
				localScaleZ: 1.2
			}, 100, null, Laya.Handler.create(this, () => {
				this.ToSmall()
			}))
		}
		ToSmall() {
			Laya.Tween.to(this.selfModel.transform, {
				localScaleX: 1,
				localScaleY: 1,
				localScaleZ: 1
			}, 100)
		}
	}
	class W extends Laya.Script {
		constructor() {
			super(), this.drawOfPro = 0, this.drawLength = 0, this.drawWidth = 0, this.isStartLoad = !1, this.isReday = !1, this.isLoadAllRes = !1, this.isMouseDown = !1, this.mainLoadOver = !1, W.instance = this
		}
		onAwake() {
			this.loadUI = this.owner, this.uiBox = this.loadUI.getChildAt(0), this.loadProBot = this.uiBox.getChildByName("loadProBot"), this.loadProTop = this.loadProBot.getChildByName("loadProTop"), this.loadProHint = this.uiBox.getChildByName("loadProHint")
		}
		onEnable() {
			Laya.SoundManager.useAudioMusic = !1, this.loadProTop.width = 0, this.drawWidth = 60, this.drawLength = 600, this.isReday = !0, this.loadProBot.visible = !1, this.loadProHint.visible = !1, this.StartLoadPro(), this.isMouseDown = !0
		}
		onUpdate() {
			this.isReday && this.isStartLoad && this.DrawPrograssBar()
		}
		onStageClick() {
			this.isMouseDown || (this.isMouseDown = !0, this.StartLoadPro())
		}
		StartLoadPro() {
			T.Instance().LoadModelRes(), this.loadProBot.visible = !0, this.loadProHint.visible = !0, Laya.Browser.clientHeight / Laya.Browser.clientWidth - 1.33 <= .004 && Laya.Browser.onIOS && (this.loadProBot.top -= 200, this.loadProHint.top -= 200), this.isStartLoad = !0, ct.instance.activeGame(), Laya.Scene.load("GameScenes/GameScene.scene", Laya.Handler.create(this, () => {
				this.mainLoadOver = !0
			})), kt.playBGM(St.pass), kt.BGM_Stop(), St.getOffTime(), St.startTick()
		}
		DrawPrograssBar() {
			if (console.log("加载进度  " + this.drawOfPro / this.drawLength, kt.loadOver, this.mainLoadOver), !(this.drawOfPro / this.drawLength >= .9) || kt.loadOver && this.mainLoadOver) {
				if (this.drawOfPro >= this.drawLength) return this.isLoadAllRes = !1, this.isStartLoad = !1, void Laya.timer.once(500, this, () => {
					Laya.Scene.open("GameScenes/GameScene.scene", !1), Laya.Scene.close("GameScenes/LoadScene.scene", "LoadScene"), ct.instance.isLoadUIClose = !0, ct.instance.resetModels("start"), kt.playBGM1(St.BGM)
				});
				this.drawOfPro += Laya.timer.delta / 5, this.loadProHint.text = "Loading..." + String(this.drawOfPro / this.drawLength * 100).substring(0, 2) + "%", this.drawOfPro / this.drawLength < .1 && (this.loadProHint.text = "Loading..." + String(this.drawOfPro / this.drawLength * 100).substring(0, 1) + "%"), this.drawOfPro >= this.drawLength && (this.loadProHint.text = "Loading...100%"), this.loadProTop.width = this.drawOfPro
			}
		}
		SetLoadResComplete() {
			console.log("loadUI 加载资源完成  0"), this.drawOfPro += 10, this.isLoadAllRes = !0
		}
	}
	W.instance = null;
	class q extends Laya.Script {
		constructor() {
			super(), this.days = [], this.currDay = 0, q.instance = this
		}
		onAwake() {
			this.signInUI = this.owner, this.uiBox = this.signInUI.getChildAt(0), this.bg = this.uiBox.getChildAt(0), this.mainBtn = this.bg.getChildByName("mainBtn"), this.doubleBtn = this.bg.getChildByName("doubleBtn"), this.check = this.doubleBtn.getChildAt(0), this.downBtn = this.bg.getChildByName("downBtn"), this.closeBtn = this.bg.getChildByName("closeBtn"), this.day1 = this.bg.getChildByName("day1"), this.day2 = this.bg.getChildByName("day2"), this.day3 = this.bg.getChildByName("day3"), this.day4 = this.bg.getChildByName("day4"), this.day5 = this.bg.getChildByName("day5"), this.day6 = this.bg.getChildByName("day6"), this.day7 = this.bg.getChildByName("day7"), this.days.push(this.day1, this.day2, this.day3, this.day4, this.day5, this.day6, this.day7)
		}
		onStart() {
			this.mainBtn.on(Laya.Event.CLICK, this, this.mainBtn_Click), this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtn_Click), this.doubleBtn.on(Laya.Event.CLICK, this, this.doubleBtn_Click), this.downBtn.on(Laya.Event.CLICK, this, this.downBtn_Click)
		}
		showSignInUI(t) {
			t ? (this.signInUI.visible = !0, this.bg.scale(0, 0), this.currDay = this.getSignInDay(), this.initSignUI(), ct.instance.isOnline ? (this.doubleBtn.visible = !0, this.check.visible = !0, this.downBtn.visible = !1, this.closeBtn.visible = !1, Laya.timer.once(3e3, this, () => {
				this.closeBtn.visible = !0
			})) : (this.doubleBtn.visible = !1, this.downBtn.visible = !0, this.downBtn.skin = "UI/signInUI/getRewardBtn.png", this.closeBtn.visible = !0), this.mainBtn.visible = !0, this.mainBtn.skin = "UI/signInUI/getRewardBtn_Ad.png", Laya.Tween.to(this.bg, {
				scaleX: 1,
				scaleY: 1
			}, 300), kt.showBanner()) : Laya.Tween.to(this.bg, {
				scaleX: 0,
				scaleY: 0
			}, 300, null, Laya.Handler.create(this, () => {
				this.signInUI.visible = !1
			}))
		}
		initSignUI() {
			for (let t = 1; t <= 7; t++) t < this.currDay ? this.days[t - 1].visible = !0 : this.days[t - 1].visible = !1
		}
		mainBtn_Click() {
			"UI/signInUI/getRewardBtn_Ad.png" == this.mainBtn.skin ? (S.setButtonEvents("signui", "signui_doubleget_video_start", 1, St.getCurrLvInfo(), ""), 
			S.setButtonEvents("signui", "signui_doubleget_video_success", 5, St.getCurrLvInfo(), ""), this.getRward(2)
				/*kt.showVideoAd(() => {
				S.setButtonEvents("signui", "signui_doubleget_video_success", 5, St.getCurrLvInfo(), ""), this.getRward(2)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/) : this.getRward(1)
		}
		getRward(t) {
			var e = St.getCoinNum();
			e += this.getCoinNum() * t, St.setCoinNum(e), kt.showToast("Get coins:" + String(this.getCoinNum() * t), "none", 2e3), this.setSignInDate(), this.setSignInDay(this.currDay + 1 > 7 ? 7 : this.currDay + 1), St.updateTaskData(0), this.showSignInUI(!1)
		}
		getCoinNum() {
			var t = 0;
			switch (this.currDay) {
				case 1:
					t = 100;
					break;
				case 2:
					t = 200;
					break;
				case 3:
					t = 300;
					break;
				case 4:
					t = 500;
					break;
				case 5:
					t = 800;
					break;
				case 6:
				case 7:
					t = 1e3
			}
			return t
		}
		closeBtn_Click() {
			this.showSignInUI(!1)
		}
		doubleBtn_Click() {
			this.check.visible ? (this.check.visible = !1, this.mainBtn.skin = "UI/signInUI/getRewardBtn.png") : (this.check.visible = !0, this.mainBtn.skin = "UI/signInUI/getRewardBtn_Ad.png")
		}
		downBtn_Click() {
			S.setButtonEvents("signui", "signui_get_start", 0, St.getCurrLvInfo(), ""), this.getRward(1)
		}
		setSignInDate() {
			Laya.LocalStorage.setItem("SIGNINDATE_JUMPROPE", this.AnalysisTimeStamp())
		}
		getSignInDate() {
			return Laya.LocalStorage.getItem("SIGNINDATE_JUMPROPE")
		}
		getSignInDay() {
			var t = Laya.LocalStorage.getItem("SIGNINDAY_JUMPROPE");
			return "" != t && null != t && null != t || (t = "1", Laya.LocalStorage.setItem("SIGNINDAY_JUMPROPE", t)), Number(t)
		}
		setSignInDay(t) {
			console.log("保存签到天数", t), Laya.LocalStorage.setItem("SIGNINDAY_JUMPROPE", String(t))
		}
		setOffLineTime(t) {
			Laya.LocalStorage.setItem("OFFLINETIME_JUMPROPE", String(t))
		}
		getOffLineTime() {
			var t = Laya.LocalStorage.getItem("OFFLINETIME_JUMPROPE");
			return "" != t && null != t && null != t || (t = String(Laya.Browser.now()), Laya.LocalStorage.setItem("OFFLINETIME_JUMPROPE", String(t))), Number(t)
		}
		AnalysisTimeStamp() {
			var t = new Date(Laya.Browser.now()),
				e = String(t.getFullYear()),
				i = String(t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1),
				s = String(t.getDate() < 10 ? "0" + t.getDate() : t.getDate());
			t.getHours(), t.getHours(), t.getMinutes(), t.getMinutes(), t.getSeconds(), t.getSeconds();
			return e + i + s
		}
	}
	q.instance = null;
	class Z extends Laya.Script {
		constructor() {
			super(), this.taskData = null, this.getBtnSkin = "", this.getBtnDisable = !1, Z.instance = this
		}
		onAwake() {
			this.taskUI = this.owner, this.uiBox = this.taskUI.getChildAt(0), this.taskBg = this.uiBox.getChildAt(0), this.closeBtn = this.taskBg.getChildByName("closeBtn"), this.taskList = this.taskBg.getChildByName("taskList")
		}
		onStart() {
			this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtn_Click), this.taskList.vScrollBarSkin = "", this.initTaskUI(), St.addTaskCallbacks(this.onTaskUpdate.bind(this), "Task" + this.id)
		}
		showTaskUI(t) {
			t ? (this.taskUI.visible = !0, this.initTaskUI(), this.taskBg.scale(0, 0), Laya.Tween.to(this.taskBg, {
				scaleX: 1,
				scaleY: 1
			}, 300), kt.showBanner()) : Laya.Tween.to(this.taskBg, {
				scaleX: 0,
				scaleY: 0
			}, 300, null, Laya.Handler.create(this, () => {
				this.taskUI.visible = !1
			}))
		}
		initTaskUI() {
			St.getTaskDate() == D.AnalysisTimeStamp() ? this.taskData = St.getTaskData() : (this.taskData = St.taskData_Profab, St.setTaskData(this.taskData), St.setTaskDate()), this.setTaskList()
		}
		setTaskList() {
			var t = [];
			for (let e = 0; e < this.taskData.taskNum; e++)
				if (3 != e && 1 != e) {
					switch (this.taskData.taskData[e].taskState) {
						case 0:
							this.getBtnSkin = "UI/taskUI/get.png", this.getBtnDisable = !0;
							break;
						case 1:
							St.taskRedPoint = !0, Q.instance.setTaskBtnPointer(), this.getBtnSkin = "UI/taskUI/get.png", this.getBtnDisable = !1;
							break;
						case 2:
							St.taskRedPoint = !0, Q.instance.setTaskBtnPointer(), this.getBtnSkin = "UI/taskUI/get_Ad.png", this.getBtnDisable = !1;
							break;
						case 3:
							this.getBtnSkin = "UI/taskUI/got.png", this.getBtnDisable = !0
					}
					t.push({
						taskItem: {
							skin: "UI/taskUI/task" + String(e + 1) + ".png"
						},
						getRewardBtn: {
							skin: this.getBtnSkin,
							disabled: this.getBtnDisable
						},
						taskProTop: {
							width: this.taskData.taskData[e].taskCount / this.taskData.taskData[e].maxTaskCount * 273 <= 0 ? .001 : this.taskData.taskData[e].taskCount / this.taskData.taskData[e].maxTaskCount * 273
						},
						taskProTxt: {
							text: String(this.taskData.taskData[e].taskCount) + "/" + String(this.taskData.taskData[e].maxTaskCount)
						}
					})
				} this.taskList.dataSource = t, this.taskList.refresh()
		}
		closeBtn_Click() {
			this.showTaskUI(!1)
		}
		onTaskUpdate() {
			this.taskData = St.getTaskData(), this.setTaskList()
		}
		getTaskReward(t) {
			console.log("Get reowrd of " + String(t + 1)), St.taskRedPoint = !1, Q.instance.setTaskBtnPointer();
			var e = St.getCoinNum();
			e += this.taskData.taskData[t].taskRewardNum, St.setCoinNum(e), kt.showToast("Get coins:" + String(this.taskData.taskData[t].taskRewardNum), "none", 2e3)
		}
		setTaskState(t, e) {
			this.taskData.taskData[t].taskState = e, St.setTaskData(this.taskData), this.setTaskList()
		}
	}
	Z.instance = null;
	class Q extends Laya.Script {
		constructor() {
			super(), this.isShowLuckyBoxUI = !1, Q.instance = this
		}
		onAwake() {
			this.startUI = this.owner, this.uiBox = this.startUI.getChildAt(0), this.startBtn = this.uiBox.getChildByName("startBtn"), this.shareBtn = this.uiBox.getChildByName("shareBtn"), this.audioBtn = this.uiBox.getChildByName("audioBtn"), this.vibrationBtn = this.uiBox.getChildByName("vibrationBtn"), this.storeBtn = this.uiBox.getChildByName("storeBtn"), this.taskBtn = this.uiBox.getChildByName("taskBtn"), this.taskBtnPointer = this.taskBtn.getChildAt(0), this.tableBtn = this.uiBox.getChildByName("tableBtn"), this.infiniteStart = this.uiBox.getChildByName("infiniteStart"), this.showCoinImg = this.uiBox.getChildByName("coinShowImg"), this.showCoinTxt = this.showCoinImg.getChildAt(0), this.addCoinBtn = this.showCoinImg.getChildByName("addCoinBtn"), this.uiBox.getChildByName("FallModel").on(Laya.Event.CLICK, this, () => {
				T.Instance().isLoadAll && (ct.instance.hideGame(), T.Instance().showGame())
			})
		}
		onEnable() {
			this.uiBox.on(Laya.Event.CLICK, this, this.startUIClick), A.instance.AdaptiveScreen(this.uiBox), this.setTaskBtnPointer()
		}
		onStart() {
			this.showStartUI(!0), this.reSetData()
		}
		reSetData() {
			St.setCoinNum(St.getCoinNum()), this.setAudioBtn(), this.setVibrateBtn(), this.setTaskBtnPointer()
		}
		showStartUI(t) {
			this.startUI.visible = t, console.log("显示主页"), t ? (this.isShowLuckyBoxUI ? q.instance.AnalysisTimeStamp() != q.instance.getSignInDate() ? (console.log("判断显示签到界面：显示"), q.instance.showSignInUI(!0)) : console.log("判断显示签到界面：不显示") : (this.isShowLuckyBoxUI = !0, K.instance.ShowUi(!0)), this.updateCoinInfo(St.getCoinNum())) /*, kt.showBanner())*/ : kt.hideBanner()
		}
		startBtnClick() {
			if (St.getInfiniteData() <= 0) {
				if (St.getPowerData() <= 0) return void Laya.View.load("GameScenes/infinitePower.scene", Laya.Handler.create(this, t => {
					t.open(!1), k.instance.addInfiniteCallback(this.startBtnClick.bind(this))
				}));
				St.setPowerData(St.getPowerData() - 1)
			}
			this.showStartUI(!1);
			ct.instance.getLockSkinByRandom(), ct.instance.getLockSkinByRandom();
			Number(St.getCurrLvInfo()) > 1 ? O.instance.ShowUI(!0, () => {
				ct.instance.restartGame("level")
			}) : ct.instance.startGame("level"), S.setLevelEvents("level_putongmoshi_enter", St.getCurrLvInfo(), "")
		}
		startUIClick(t) {
			switch (console.log("startUI click target: ", t.target.name), t.target.name) {
				case "startUIBox":
				case "startUIPanel":
				case "startBtn":
					this.startBtnClick();
					break;
				case "shareBtn":
					this.shareBtnClick();
					break;
				case "audioBtn":
					this.audioBtnClick();
					break;
				case "vibrationBtn":
					this.vibrationBtnClick();
					break;
				case "storeBtn":
					this.storeBtnClick();
					break;
				case "taskBtn":
					this.taskBtnClick();
					break;
				case "tableBtn":
					this.tableBtnClick();
					break;
				case "infiniteStart":
					this.infiniteStartClick();
					break;
				case "addCoinBtn":
					this.addCoinBtnClick();
					break;
				case "balanceStart":
					this.balanceStartClick()
			}
		}
		shareBtnClick() {
			S.setButtonEvents("mainui", "mainui_sharebtn", 0, St.getCurrLvInfo(), ""), kt.shareAppMessage("", "超爽的关卡体验，全场最佳就是你！", "subPckage/res/shareImg1.jpg")
		}
		audioBtnClick() {
			console.log("----------audioBtnClick---------"), St.getSoundData() ? (St.setSoundData(!1), kt.BGM_Pause1()) : (St.setSoundData(!0), kt.BGM_Play1()), this.setAudioBtn()
		}
		setAudioBtn() {
			St.getSoundData() ? this.audioBtn.skin = "UI/startUI/audioOn.png" : this.audioBtn.skin = "UI/startUI/audioOff.png"
		}
		vibrationBtnClick() {
			St.getVibrateData() ? (St.setVibrateData(!1), this.vibrationBtn.skin = "UI/startUI/vibrationOff.png") : (St.setVibrateData(!0), this.vibrationBtn.skin = "UI/startUI/vibrationOn.png"), this.setVibrateBtn()
		}
		setVibrateBtn() {
			St.getVibrateData() ? this.vibrationBtn.skin = "UI/startUI/vibrationOn.png" : this.vibrationBtn.skin = "UI/startUI/vibrationOff.png"
		}
		storeBtnClick() {
			Ct.instance.showStoreUI(!0)
		}
		taskBtnClick() {
			Z.instance.showTaskUI(!0)
		}
		setTaskBtnPointer() {
			console.log("显示任务红点", St.taskRedPoint), this.taskBtnPointer.visible = St.taskRedPoint
		}
		tableBtnClick() {
			R.instance.showTurnTableUI(!0)
		}
		addCoinBtnClick() {
			S.setButtonEvents("mainui", "mainui_addcoin_video_start", 1, St.getCurrLvInfo(), ""),
			S.setButtonEvents("mainui", "mainui_addcoin_video_success", 5, St.getCurrLvInfo(), ""), this.getCoin(200)
			/*kt.showVideoAd(() => {
				S.setButtonEvents("mainui", "mainui_addcoin_video_success", 5, St.getCurrLvInfo(), ""), this.getCoin(200)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/
		}
		infiniteStartClick() {
			if (St.getInfiniteData() <= 0) {
				if (St.getPowerData() <= 0) return void Laya.View.load("GameScenes/infinitePower.scene", Laya.Handler.create(this, t => {
					t.open(!1), k.instance.addInfiniteCallback(this.infiniteStartClick.bind(this))
				}));
				St.setPowerData(St.getPowerData() - 1)
			}
			this.showStartUI(!1);
			ct.instance.getLockSkinByRandom(), ct.instance.getLockSkinByRandom();
			Number(St.getCurrLvInfo()) > 1 ? O.instance.ShowUI(!0, () => {
				ct.instance.restartGame("infinite")
			}) : ct.instance.startGame("infinite"), S.setLevelEvents("level_wujin_enter", St.getCurrLvInfo(), "")
		}
		balanceStartClick() {
			this.showStartUI(!1), ct.instance.startGame("balance"), S.setLevelEvents("level_pingheng_enter", St.getCurrLvInfo(), "")
		}
		updateCoinInfo(t) {
			this.showCoinTxt.text = String(t)
		}
		getCoin(t) {
			var e = St.getCoinNum();
			e += t, St.setCoinNum(e), kt.showToast("Get coins:" + String(t), "none", 2e3)
		}
	}
	Q.instance = null;
	class $ extends Laya.Script {
		constructor() {
			super(), this.isAdGetCoin = !1, $.instance = this
		}
		onAwake() {
			this.overUI = this.owner, this.uiBox = this.overUI.getChildAt(0), this.overTitle = this.uiBox.getChildByName("overTitle"), this.returnMainBtn = this.uiBox.getChildByName("returnMainBtn"), this.restartBtn = this.uiBox.getChildByName("restartBtn"), this.ad_getCoinBtn = this.uiBox.getChildByName("ad_getCoinBtn"), this.luPingReleaseBtn = this.uiBox.getChildByName("luPingReleaseBtn"), this.coinHintImg = this.uiBox.getChildByName("coin_getHintImg"), this.coinHintTxt = this.coinHintImg.getChildAt(0), this.showCoinImg = this.uiBox.getChildByName("coinShowImg"), this.showCoinTxt = this.showCoinImg.getChildAt(0), this.addCoinBtn = this.showCoinImg.getChildByName("addCoinBtn")
		}
		onEnable() {
			this.uiBox.on(Laya.Event.CLICK, this, this.overUIClick), A.instance.AdaptiveScreen(this.uiBox)
		}
		showOverUI(t) {
			if (this.overUI.visible = t, t) {
				if (console.log("in showOverUI - true"), this.updateCoinInfo(St.getCoinNum()), this.ad_getCoinBtn.visible = !0, this.returnMainBtn.visible = !1, this.restartBtn.visible = !1, ct.instance.score <= 0 ? (this.ad_getCoinBtn.visible = !1, this.restartBtn.centerY = 235) : this.restartBtn.centerY = 130, this.showBtn(), this.coinHintTxt.text = "+" + String(2 * ct.instance.score), this.isAdGetCoin = !1, ct.instance.changeBallSkin(Ct.instance.skinData.currUseIndex, !1), Ct.instance.isTryUseSkin = !1, kt.showBanner(), kt.showInterstitialAd(), ct.instance.isBossLv) {
					ct.instance.isBossLv = !1;
					let t = St.getCurrLvInfo();
					t++, St.setCurrLvInfo(t)
				}
				ct.instance.isGameover = !0
			} else kt.hideBanner(), this.isAdGetCoin || this.getCoin(2 * ct.instance.score)
		}
		showBtn() {
			Number(St.getCurrLvInfo()) <= 5 || !ct.instance.isOnline ? (this.returnMainBtn.visible = !0, this.restartBtn.visible = !0) : Laya.timer.once(3e3, this, () => {
				this.returnMainBtn.visible = !0, this.restartBtn.visible = !0
			})
		}
		returnMainBtnClick() {
			this.showOverUI(!1), ct.instance.returnMain(), kt.showInterstitialAd()
		}
		restartBtnClick() {
			if (St.getInfiniteData() <= 0) {
				if (St.getPowerData() <= 0) return void Laya.View.load("GameScenes/infinitePower.scene", Laya.Handler.create(this, t => {
					t.open(!1), k.instance.addInfiniteCallback(this.restartBtnClick.bind(this))
				}));
				St.setPowerData(St.getPowerData() - 1)
			}
			this.showOverUI(!1);
			ct.instance.getLockSkinByRandom(), ct.instance.getLockSkinByRandom();
			O.instance.ShowUI(!0, () => {
				ct.instance.restartGame()
			})
		}
		overUIClick(t) {
			switch (console.log("overUI click target:", t.target.name), t.target.name) {
				case "returnMainBtn":
					this.returnMainBtnClick();
					break;
				case "restartBtn":
					this.restartBtnClick();
					break;
				case "ad_getCoinBtn":
					this.ad_getCoinBtnClick();
					break;
				case "luPingReleaseBtn":
					this.luPingReleaseBtnClick();
					break;
				case "addCoinBtn":
					this.addCoinBtnClick()
			}
		}
		ad_getCoinBtnClick() {
			S.setButtonEvents("failui", "failui_getcoin_video_start", 1, St.getCurrLvInfo(), ""),
			S.setButtonEvents("failui", "failui_getcoin_video_success", 5, St.getCurrLvInfo(), ""), this.ad_getCoinBtn.visible = !1;
			var t = St.getCoinNum();
			t += 5 * Number(this.coinHintTxt.text.substring(1)), St.setCoinNum(t), this.isAdGetCoin = !0, kt.showToast("Get coins:" + String(5 * Number(this.coinHintTxt.text.substring(1))), "none", 2e3)
				/*kt.showVideoAd(() => {
				S.setButtonEvents("failui", "failui_getcoin_video_success", 5, St.getCurrLvInfo(), ""), this.ad_getCoinBtn.visible = !1;
				var t = St.getCoinNum();
				t += 5 * Number(this.coinHintTxt.text.substring(1)), St.setCoinNum(t), this.isAdGetCoin = !0, kt.showToast("Get coins:" + String(5 * Number(this.coinHintTxt.text.substring(1))), "none", 2e3)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/
		}
		luPingReleaseBtnClick() {
			S.setButtonEvents("failui", "failui_sharelp_start", 2, St.getCurrLvInfo(), ""), kt.GameRecorder_Release(() => {
				S.setButtonEvents("failui", "failui_sharelp_success", 6, St.getCurrLvInfo(), ""), this.luPingReleaseBtn.visible = !1;
				var t = St.getCoinNum();
				t += 200, St.setCoinNum(t), kt.showToast("Get coins:200")
			}, () => {
				kt.showToast("录屏不足3秒，无法发布")
			}, () => {
				kt.showToast("成功发布录屏即可获得奖励")
			})
		}
		getCoin(t) {
			var e = St.getCoinNum();
			e += t, St.setCoinNum(e), kt.showToast("Get coins:" + String(t))
		}
		storeBtnClick() {
			Ct.instance.showStoreUI(!0)
		}
		addCoinBtnClick() {
			S.setButtonEvents("failui", "failui_getcoin_video_start", 1, St.getCurrLvInfo(), ""),
			S.setButtonEvents("failui", "failui_getcoin_video_success", 5, St.getCurrLvInfo(), ""), this.getCoin(200)
				/*kt.showVideoAd(() => {
				S.setButtonEvents("failui", "failui_getcoin_video_success", 5, St.getCurrLvInfo(), ""), this.getCoin(200)
			}, () => {
				kt.showToast("Get rewarded after watching the video")
			})*/
		}
		updateCoinInfo(t) {
			this.showCoinTxt.text = String(t)
		}
	}
	$.instance = null;
	class et extends Laya.Script3D {
		constructor() {
			super(), this.isTimeOnceFun = !1, this.timeOnceFun = 0, this.maxTimeOnceFun = 0, this.rotateSpeedV3 = new Laya.Vector3(0, -.64, 0)
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onStart() {
			this.isTimeOnceFun = !0, this.maxTimeOnceFun = 1e4, this.selfModel.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), Laya.Browser.onIOS && "iPhone 6" == kt.getSystemInfo().model.substring(0, 8) && this.rotateSpeedV3.setValue(0, -3, 0)
		}
		onUpdate() {
			this.targetTableCtrl && this.targetTableCtrl.isClear && (this.selfModel.active = !1, x.recoveryItemBySign("StampEffect", this.selfModel)), this.selfModel.active && this.selfModel.transform.position.y - _.ball.transform.position.y >= 1 && (this.selfModel.active = !1, x.recoveryItemBySign("StampEffect", this.selfModel)), this.isTimeOnceFun && (this.timeOnceFun += Laya.timer.delta, this.timeOnceFun >= this.maxTimeOnceFun && (this.isTimeOnceFun = !1, this.timeOnceFun = 0, x.recoveryItemBySign("StampEffect", this.selfModel))), ct.instance.isCoursePause || this.selfModel.transform.rotate(this.rotateSpeedV3, !0, !1)
		}
	}
	class it extends Laya.Script3D {
		constructor() {
			super(), this.isTimeOnceFun = !1, this.timeOnceFun = 0, this.maxTimeOnceFun = 0
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onStart() {
			this.isTimeOnceFun = !0, this.maxTimeOnceFun = 3e3
		}
		onUpdate() {
			this.isTimeOnceFun && (this.timeOnceFun += Laya.timer.delta, this.timeOnceFun >= this.maxTimeOnceFun && (this.isTimeOnceFun = !1, this.timeOnceFun = 0, x.recoveryItemBySign("BurstEffect", this.selfModel)))
		}
	}
	class st extends Laya.Script3D {
		constructor() {
			super(), this.offsetY = 0, this.modelPos = new Laya.Vector3(0, 0, 0)
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onStart() {
			this.offsetY = this.selfModel.transform.position.y - _.camera.transform.position.y
		}
		onUpdate() {
			this.modelPos.setValue(this.selfModel.transform.position.x, _.camera.transform.position.y + this.offsetY, this.selfModel.transform.position.z), this.selfModel.transform.position = this.modelPos
		}
	}
	class at extends Laya.Script {
		constructor() {
			super(), this.isTimeDown = !1, this.timeDownPause = !1, this.lastTimeStamp = 0, this.downTime = 0, this.isShareRelifSuccess = !1, this.isForceAd = !1, this.callBack_close = null, at.instance = this
		}
		onAwake() {
			this.relifeUI = this.owner, this.uiBox = this.relifeUI.getChildAt(0), this.relifeBg = this.uiBox.getChildAt(0), this.timeDownRelife = this.relifeBg.getChildByName("relifeTime"), this.timeDownTxt = this.relifeBg.getChildByName("timeDownTxt"), this.mainBtn = this.relifeBg.getChildByName("mainBtn"), this.luPingReleaseBtn = this.relifeBg.getChildByName("luPingReleaseBtn"), this.skipBtn = this.relifeBg.getChildByName("skipBtn"), this.upBtn1 = this.relifeBg.getChildByName("upBtn1"), this.upCheck1 = this.upBtn1.getChildAt(0), this.upBtn2 = this.relifeBg.getChildByName("upBtn2"), this.upCheck2 = this.upBtn2.getChildAt(0), this.downBtn1 = this.relifeBg.getChildByName("downBtn1"), this.downBtn2 = this.relifeBg.getChildByName("downBtn2")
		}
		onEnable() {
			this.uiBox.on(Laya.Event.CLICK, this, this.relifeUI_Click), A.instance.AdaptiveScreen(this.uiBox), 3 == Number(St.getCurrLvInfo()) && ct.instance.isOnline && (this.isForceAd = !0)
		}
		onUpdate() { }
		showRelifeUI(t, e = 0, i = null, s = !1) {
			this.relifeUI.visible = t, t ? (this.callBack_close = i, this.mainBtn.visible = !0, ct.instance.isOnline ? (this.skipBtn.visible = !1, Number(St.getCurrLvInfo()) % 2 == 1 ? (console.log("type 1"), this.upBtn1.visible = !0, this.upBtn2.visible = !1, this.upCheck1.visible = !0, this.downBtn2.visible = !1, this.downBtn1.visible = !1, this.upBtn1.disabled = !0, Laya.timer.once(2e3, this, () => {
				this.downBtn2.visible = !0, this.upBtn1.disabled = !1
			})) : (console.log("type 2"), this.upBtn2.visible = !0, this.upBtn1.visible = !1, this.upCheck2.visible = !0, this.downBtn2.visible = !1, this.downBtn1.visible = !1, this.upBtn2.disabled = !0, Laya.timer.once(2e3, this, () => {
				this.downBtn1.visible = !0, this.upBtn2.disabled = !1
			}))) : (this.skipBtn.visible = !0, this.upBtn1.visible = !1, this.upBtn2.visible = !1, this.downBtn2.visible = !1, this.downBtn1.visible = !1), this.initDownTime(), ct.instance.isGameover = !0, kt.showBanner()) : (kt.hideBanner(), this.isTimeDown = !1, this.skipBtn.visible = !1, this.callBack_close && s && this.callBack_close())
		}
		relifeUI_Click(t) {
			switch (console.log("relifeUI click target: ", t.target.name), t.target.name) {
				case "mainBtn":
					this.mainBtnClick();
					break;
				case "skipBtn":
					this.skipBtnClick();
					break;
				case "upBtn1":
					this.upBtnClick(1);
					break;
				case "upBtn2":
					this.upBtnClick(2);
					break;
				case "downBtn1":
					this.downBtnClick(1);
					break;
				case "downBtn2":
					this.downBtnClick(2)
			}
		}
		initDownTime() {
			this.timeDownTxt.text = "10", this.downTime = 10, this.lastTimeStamp = Laya.Browser.now(), this.timeDownRelife.rotation = 0, this.isTimeDown = !0
		}
		mainBtnClick() {
			this.timeDownPause = !0, S.setButtonEvents("fuhuoui", "fuhuoui_fuhuo_video_start", 1, St.getCurrLvInfo(), ""),
			S.setButtonEvents("xiandingpifu", "fuhuoui_fuhuo_video_success", 5, St.getCurrLvInfo(), ""), at.instance.showRelifeUI(!1, 0, null, !1), at.instance.timeDownPause = !1, ct.instance.gameRelife()
				/*kt.showVideoAd(() => {
				S.setButtonEvents("xiandingpifu", "fuhuoui_fuhuo_video_success", 5, St.getCurrLvInfo(), ""), at.instance.showRelifeUI(!1, 0, null, !1), at.instance.timeDownPause = !1, ct.instance.gameRelife()
			}, () => {
				at.instance.timeDownPause = !1
			})*/
		}
		skipBtnClick() {
			this.showRelifeUI(!1, 0, null, !0)
		}
		upBtnClick(t) {
			switch (t) {
				case 1:
					this.upCheck1.visible ? (this.upCheck1.visible = !1, this.downBtn2.visible = !1, this.downBtn1.visible = !0) : (this.upCheck1.visible = !0, this.downBtn1.visible = !1, this.downBtn2.visible = !0);
					break;
				case 2:
					this.upCheck2.visible ? (this.upCheck2.visible = !1, this.downBtn1.visible = !1, this.downBtn2.visible = !0) : (this.upCheck2.visible = !0, this.downBtn2.visible = !1, this.downBtn1.visible = !0)
			}
		}
		downBtnClick(t) {
			switch (t) {
				case 1:
					this.isForceAd ? (this.isForceAd = !1, this.mainBtnClick()) : this.skipBtnClick();
					break;
				case 2:
					this.mainBtnClick()
			}
		}
		luPingReleaseBtnClick() {
			kt.GameRecorder_Release(() => {
				at.instance.showRelifeUI(!1, 0, null, !1), at.instance.timeDownPause = !1, ct.instance.gameRelife()
			}, () => {
				at.instance.timeDownPause = !1
			}, () => {
				at.instance.timeDownPause = !1
			})
		}
	}
	at.instance = null;
	class nt extends Laya.Script3D {
		constructor() {
			super()
		}
		onAwake() {
			this.selfModel = this.owner
		}
		onStart() {
			Laya.timer.once(500, this, () => {
				x.recoveryItemBySign(this.selfModel.name, this.selfModel)
			})
		}
	}
	class ot extends Laya.Script {
		constructor() {
			super(), this.get_coin_num = 0, ot.instance = this
		}
		onAwake() {
			this.infiniteOverUI = this.owner, this.uiBox = this.infiniteOverUI.getChildAt(0), this.returnMainBtn = this.uiBox.getChildByName("returnMainBtn"), this.score = this.uiBox.getChildByName("score"), this.highestScore = this.uiBox.getChildByName("highestScore"), this.deltaScore = this.highestScore.getChildByName("delta"), this.coinNum = this.uiBox.getChildByName("coin").getChildByName("coinNum"), this.rank = this.uiBox.getChildByName("rankBg").getChildByName("rank"), this.surpass = this.uiBox.getChildByName("rankBg").getChildByName("surpass"), this.luPingReleaseBtn = this.uiBox.getChildByName("luPingReleaseBtn"), this.luPingReleaseCoinNum = this.uiBox.getChildByName("luPingReleaseBtn").getChildByName("coinNum"), this.ad_getCoinBtn = this.uiBox.getChildByName("ad_getCoinBtn"), this.ad_getCoinNum = this.uiBox.getChildByName("ad_getCoinBtn").getChildByName("coinNum")
		}
		onEnable() {
			this.uiBox.on(Laya.Event.CLICK, this, this.infiniteOverUIClick), A.instance.AdaptiveScreen(this.uiBox)
		}
		showInfiniteOverUI(t) {
			this.infiniteOverUI.visible = t, t ? (this.luPingReleaseBtn.disabled = !1, this.ad_getCoinBtn.disabled = !1, this.setNumValue(), ct.instance.changeBallSkin(Ct.instance.skinData.currUseIndex, !1), Ct.instance.isTryUseSkin = !1, kt.showBanner(), kt.showInterstitialAd(), ct.instance.isGameover = !0) : kt.hideBanner()
		}
		setNumValue() {
			this.score.text = String(ct.instance.score), this.highestScore.text = "Best Record:" + String(St.getHighestScore()), ct.instance.score > St.getHighestScore() ? (this.deltaScore.text = "(+" + (ct.instance.score - St.getHighestScore()) + ")", St.setHighestScore(ct.instance.score)) : this.deltaScore.text = "", this.get_coin_num = Math.floor(ct.instance.score / 15), this.coinNum.text = "+" + this.get_coin_num, this.luPingReleaseCoinNum.text = "+300", this.ad_getCoinNum.text = "" + 5 * this.get_coin_num, ct.instance.score < 1e3 ? (this.rank.text = String(Math.round(1e5 - 50 * ct.instance.score)), this.surpass.text = String(Math.round(.06 * ct.instance.score * 10) / 10) + "%") : ct.instance.score < 1e4 ? (this.rank.text = String(Math.round(5e4 - 40 * (ct.instance.score - 1e3) / 9)), this.surpass.text = String(Math.round(2 / 900 * (ct.instance.score - 1e3) * 10) / 10 + 60) + "%") : ct.instance.score < 2e4 ? (this.rank.text = String(Math.round(1e4 - 9 * (ct.instance.score - 1e4) / 10)), this.surpass.text = String(Math.round(.001 * (ct.instance.score - 1e4) * 10) / 10 + 80) + "%") : ct.instance.score < 3e4 ? (this.rank.text = String(Math.round(1e3 - (ct.instance.score - 2e4) / 10)), this.surpass.text = String(Math.round(.001 * (ct.instance.score - 2e4) * 10) / 10 + 90) + "%") : (this.rank.text = String(1), this.surpass.text = String(99.9) + "%")
		}
		infiniteOverUIClick(t) {
			switch (console.log("infiniteOverUI click target:", t.target.name), t.target.name) {
				case "returnMainBtn":
					this.noad_getCoin(), this.returnMainBtnClick();
					break;
				case "luPingReleaseBtn":
					this.luPingReleaseBtnClick();
					break;
				case "restartBtn":
					this.restartBtnClick();
					break;
				case "ad_getCoinBtn":
					this.ad_getCoinBtnClick()
			}
		}
		returnMainBtnClick() {
			this.showInfiniteOverUI(!1), ct.instance.returnMain(), kt.showInterstitialAd()
		}
		restartBtnClick() {
			if (St.getInfiniteData() <= 0) {
				if (St.getPowerData() <= 0) return void Laya.View.load("GameScenes/infinitePower.scene", Laya.Handler.create(this, t => {
					t.open(!1), k.instance.addInfiniteCallback(this.restartBtnClick.bind(this))
				}));
				St.setPowerData(St.getPowerData() - 1)
			}
			this.noad_getCoin(), this.showInfiniteOverUI(!1), ct.instance.nextLvTableModel();
			ct.instance.getLockSkinByRandom(), ct.instance.getLockSkinByRandom();
			O.instance.ShowUI(!0, () => {
				ct.instance.restartGame()
			}), S.setLevelEvents("level_wujin_restart", St.getCurrLvInfo(), "")
		}
		ad_getCoinBtnClick() {
			S.setButtonEvents("wujinoverui", "wujinoverui_getcoin_video_start", 1, St.getCurrLvInfo(), ""),
			S.setButtonEvents("wujinoverui", "wujinoverui_getcoin_video_success", 5, St.getCurrLvInfo(), ""), this.ad_getCoinBtn.disabled = !0;
			var t = St.getCoinNum();
			t += Number(5 * this.get_coin_num), St.setCoinNum(t), kt.showToast("Get coins:" + 5 * Number(this.get_coin_num), "none", 2e3)
				/*kt.showVideoAd(() => {
				S.setButtonEvents("wujinoverui", "wujinoverui_getcoin_video_success", 5, St.getCurrLvInfo(), ""), this.ad_getCoinBtn.disabled = !0;
				var t = St.getCoinNum();
				t += Number(5 * this.get_coin_num), St.setCoinNum(t), kt.showToast("Get coins:" + 5 * Number(this.get_coin_num), "none", 2e3)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/
		}
		noad_getCoin() {
			if (!this.ad_getCoinBtn.disabled) {
				var t = St.getCoinNum();
				t += Number(this.get_coin_num), St.setCoinNum(t), kt.showToast("Get coin：" + this.get_coin_num, "none", 2e3)
			}
		}
		luPingReleaseBtnClick() {
			S.setButtonEvents("wujinoverui", "wujinoverui_sharelp_start", 2, St.getCurrLvInfo(), ""), kt.GameRecorder_Release(() => {
				S.setButtonEvents("wujinoverui", "wujinoverui_sharelp_success", 6, St.getCurrLvInfo(), ""), this.luPingReleaseBtn.disabled = !0;
				var t = St.getCoinNum();
				t += 200, St.setCoinNum(t), kt.showToast("Get coin：300", "none", 2e3)
			}, () => { }, () => { })
		}
		storeBtnClick() {
			Ct.instance.showStoreUI(!0)
		}
	}
	ot.instance = null;
	class rt extends Laya.Script3D {
		constructor() {
			super(), this.cameraPos = new Laya.Vector3(0, 0, 0), this.originPosY = 0, this.mouseState = 0, this.tableCount = 0, this.tableMove = new Laya.Vector3(-.06, 0, 0), this.i = 0, this.cameraMove = new Laya.Vector3(0, -.0122, 0), this.j = 0
		}
		onAwake() {
			this.balanceCamera = this.owner
		}
		onStart() {
			this.cameraPos.setValue(this.balanceCamera.transform.position.x, this.balanceCamera.transform.position.y, this.balanceCamera.transform.position.z), this.originPosY = this.balanceCamera.transform.position.y - ct.instance.currTableModel.transform.position.y
		}
		onUpdate() {
			ct.instance.isGameover
		}
		resetPos() {
			this.cameraPos.setValue(0, .6, -2.2), this.balanceCamera.transform.position = this.cameraPos
		}
		TurnOnStageEvent() {
			Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.OnMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.OnMouseUp), Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.OnMouseOut)
		}
		OnMouseDown(t) {
			"gameRecorderBtn" != t.target.name && 1 != this.mouseState && (this.mouseState = 1, this.tableCount = ct.instance.score, this.tableCount + 1 < ct.instance.balanceLvLength && (this.removeBalanceTable(), this.moveBalanceCamera()), this.tableCount < ct.instance.balanceLvLength && ct.instance.nextTurnTable())
		}
		OnMouseUp() {
			0 != this.mouseState && (this.mouseState = 0, St.getBalanceLvInfo() <= 3 && F.instance && F.instance.showJcBox(!0, "Click to remove a layer.", "Be careful not to fall."))
		}
		OnMouseOut() {
			0 != this.mouseState && (this.mouseState = 0, St.getBalanceLvInfo() <= 3 && F.instance && F.instance.showJcBox(!0, "Click to remove a layer.", "Be careful not to fall."))
		}
		removeBalanceTable() {
			this.i = 0, Laya.timer.frameLoop(1, this, this.remove)
		}
		remove() {
			ct.instance.balanceTableArray[this.tableCount].transform.translate(this.tableMove, !1), this.i++, this.i >= 50 && Laya.timer.clear(this, this.remove)
		}
		moveBalanceCamera() {
			this.j = 0, Laya.timer.frameLoop(1, this, this.move)
		}
		move() {
			this.balanceCamera.transform.translate(this.cameraMove, !1), this.j++, this.j >= 10 && (Laya.timer.clear(this, this.move), this.cameraPos.setValue(0, .6 - .122 * ct.instance.score, -2.2), this.balanceCamera.transform.position = this.cameraPos)
		}
	}
	class ht extends Laya.Script3D {
		constructor() {
			super()
		}
		onAwake() {
			this.balanceGround = this.owner
		}
		onStart() { }
		onUpdate() { }
		onCollisionEnter(t) {
			"beizi" == t.other.owner.name && ct.instance.isInGame && (console.log("杯子落地"), ct.instance.isInGame = !1, ct.instance.isGameover = !0, kt.GameRecorder_Stop(), Laya.timer.once(300, this, () => {
				ct.instance.nextLvTableModel(), F.instance.showFightUI(!1), K.instance.ShowUi(!0, () => {
					G.instance.showPassUI(!0)
				})
			}), kt.BGM_Stop())
		}
	}
	class lt extends Laya.Script {
		constructor() {
			super(), lt.instance = this
		}
		onAwake() {
			this.myself = this.owner
		}
		setVisible(t) {
			t ? (this.myself.visible = !0, kt.playBGM1(St.BGM), Q.instance.reSetData()) : (this.myself.visible = !1, kt.BGM_Pause1())
		}
		onStart() {
			this.setVisible(!0), this.tips = this.myself.getChildByName("Tips")
		}
		showTips(t) {
			console.log("show Tips " + t), this.tips.visible = !0, this.tips.getChildByName("txt").text = t, Laya.timer.clear(this, this.tipTimer), Laya.timer.once(2e3, this, this.tipTimer)
		}
		tipTimer() {
			this.tips.visible = !1
		}
	}
	lt.instance = null;
	class ct {
		constructor() {
			this.loadArray = [], this.tableArray = [], this.tablePlan = 0, this.currPlanCount = 0, this.currSpawnCount = 0, this.planInfo = "", this.tempV3 = new Laya.Vector3(0, 0, 0), this.passCount = 0, this.score = 0, this.isGameover = !1, this.isInGame = !1, this.comColor = new Laya.Vector4(1, 1, 1, 1), this.originModelIndex = 0, this.relifeCount = 0, this.stampArray = [], this.colorArray = [], this.colorArrayIndex = 0, this.startColor = new Laya.Vector3(0, 0, 0), this.secondColor = new Laya.Vector3(0, 0, 0), this.thirdColor = new Laya.Vector3(0, 0, 0), this.endColor = new Laya.Vector3(0, 0, 0), this.isCoursePause = !1, this.currLvLength = 90, this.isLoadUIClose = !1, this.isBossLv = !1, this.time_BossLv = 0, this.isRewardLv = !1, this.currRewardCount = 0, this.curroffsetAngle = 0, this.isHasRewardSkin = !1, this.rewardSkinPos = 0, this.rewardSkinIndex = -1, this.isGetRewardSkin = !1, this.coinModelArrs = [], this.gameMode = "start", this.balanceOriginModelIndex = 0, this.balanceTableModel = [], this.balanceTableArray = [], this.tempBalanceIndex = [], this.isSuperStart = !1, this.stampScale = .025, this.stampColor = new Laya.Vector4(0, 0, 0, 1), this.burstColor = new Laya.Vector4(0, 0, 0, 1), this.url = "https://www.7cgames.cn/tongquApi/newFunctionManage?platform=tt&appId=ttb810cead273a3849&version=2.3.2", this.isOnline = !1
		}
		static get instance() {
			return null == this._instance && (this._instance = new ct), this._instance
		}
		activeGame() {
			this.loadModelRes()
		}
		loadModelRes() {
			Laya.loader.load("js/TableColors.json", Laya.Handler.create(this, () => {
				this.colorArray = Laya.loader.getRes("js/TableColors.json").data, Laya.loader.create("subPackage/ModelRes/Conventional/StackBall.ls", Laya.Handler.create(this, this.loadModelResComplete)), Laya.Scene3D.load("subPackage/BalanceModel/Conventional/SampleScene.ls", Laya.Handler.create(this, this.loadBalanceModelComplete))
			}), null, Laya.Loader.JSON)
		}
		loadModelResComplete() {
			this.modelScene = Laya.loader.getRes("subPackage/ModelRes/Conventional/StackBall.ls"), console.log("3D资源加载完成   0", this.modelScene), Laya.stage.getChildByName("root").addChild(this.modelScene), _.setModelScene(this.modelScene, "modelScene"), this.getCurrTableCount(), this.colorArrayIndex = St.getCurrColorConfig(), null == this.colorArrayIndex && (this.colorArrayIndex = 0), this.tableCount = 1, this.colorStage = 1, this.originModelIndex = (St.getCurrLvInfo() - 1) % _.turnTableArray.length, this.currTableModel = _.turnTableArray[this.originModelIndex], this.ballCtrl = _.ball.addComponent(z), this.tempV3.setValue(0, 3.5, -.5), _.ball.active = !0, _.ball.transform.position = this.tempV3, this.cameraCtrl = _.camera.addComponent(X), _.bg.addComponent(st), this.groundCtrl = _.ground.addComponent(J), this.tempV3.setValue(0, 3 - .3 * this.currLvLength, 0), this.tempV3.y < -57 && this.tempV3.setValue(0, -57, 0), _.ground.transform.position = this.tempV3, this.isHasRewardSkin = !0, this.isGameover = !0, this.loadArray.push(0), console.log("3D资源加载完成   1", this.modelScene), this.setLoadResComplete()
		}
		showGame() {
			kt.gameScene = 1, lt.instance && lt.instance.owner && this.modelScene && (this.modelScene.active = !0, lt.instance.setVisible(!0))
		}
		hideGame() {
			this.modelScene.active = !1, lt.instance.setVisible(!1)
		}
		loadBalanceModelComplete(t) {
			console.log("平衡模式资源加载完成   0", this.modelScene), this.balanceModelScene = t, _.setModelScene(this.balanceModelScene, "balanceModelScene"), this.balanceOriginModelIndex = (St.getBalanceLvInfo() - 1) % 4, this.balanceTableModel[0] = _.balanceTableArray[2 * this.balanceOriginModelIndex], this.balanceTableModel[1] = _.balanceTableArray[2 * this.balanceOriginModelIndex + 1], this.balanceCameraCtrl = _.balanceCamera.addComponent(rt), this.balanceGroundCtrl = _.balanceGround.addComponent(ht), this.loadArray.push(0), console.log("平衡模式资源加载完成   1", this.modelScene), this.setLoadResComplete()
		}
		setLoadResComplete() {
			this.loadArray.length < 2 || (kt.loadOver = !0, console.log("设置资源加载完成   1", kt.loadOver), W.instance.SetLoadResComplete())
		}
		startGame(t) {
			switch (t && (this.gameMode = t), this.gameMode) {
				case "level":
					console.log("开始游戏：关卡模式"), this.isBossLv && (this.time_BossLv = 30), this.getCurrTableCount(), this.resetModels(), this.isGameover = !1, this.isInGame = !0, this.score = 0, this.passCount = 0, this.relifeCount = 0, F.instance.showFightUI(!0), kt.GameRecorder_Start();
					break;
				case "infinite":
					console.log("开始游戏：无尽模式"), this.getCurrTableCount(), this.resetModels(), this.isGameover = !1, this.isInGame = !0, this.score = 0, this.passCount = 0, this.relifeCount = 0, F.instance.showFightUI(!0), kt.GameRecorder_Start();
					break;
				case "balance":
					console.log("开始游戏：平衡模式"), Laya.stage.getChildByName("root").removeChild(this.modelScene), Laya.stage.getChildByName("root").addChild(this.balanceModelScene), this.getCurrTableCount(), this.resetModels(), this.isGameover = !1, this.isInGame = !0, this.score = 0, this.passCount = 0, this.relifeCount = 0, F.instance.showFightUI(!0), kt.GameRecorder_Start();
					break;
				default:
					console.warn("开始游戏：游戏模式异常，请检查！", this.gameMode)
			}
		}
		restartGame(t = null) {
			switch (t && (this.gameMode = t), this.gameMode) {
				case "level":
					console.log("重新开始游戏：关卡模式"), this.isBossLv && (this.time_BossLv = 30), this.ChangeBgSkin(), this.getCurrTableCount(), this.resetModels(), this.isGameover = !1, this.isInGame = !0, this.score = 0, this.passCount = 0, this.relifeCount = 0, F.instance.showFightUI(!0), kt.GameRecorder_Start();
					break;
				case "infinite":
					console.log("重新开始游戏：无尽模式"), this.ChangeBgSkin(), this.getCurrTableCount(), this.resetModels(), this.isGameover = !1, this.isInGame = !0, this.score = 0, this.passCount = 0, this.relifeCount = 0, F.instance.showFightUI(!0), kt.GameRecorder_Start();
					break;
				case "balance":
					console.log("重新开始游戏：平衡模式"), this.getCurrTableCount(), this.isGameover = !1, this.isInGame = !0, this.score = 0, kt.GameRecorder_Start();
					break;
				default:
					console.warn("重新开始游戏：游戏模式异常，请检查！", this.gameMode)
			}
		}
		resetModels(t = null) {
			switch (t && (this.gameMode = t), this.gameMode) {
				case "level":
					this.tempV3.setValue(0, 3 - .3 * this.currLvLength, 0), this.tempV3.y < -57 && this.tempV3.setValue(0, -57, 0), _.ground.transform.position = this.tempV3, _.ground.active = !0, _.zhuzi.active = !1;
					var e = this.tableArray.length;
					for (let t = 0; t < e; t++) this.recoveryTable(this.tableArray.pop());
					this.tableCount = 1, this.colorStage = 1, this.currPlanCount = 0, this.CreateTurnTable(15), console.log("关卡模式 currLvLength: ", this.currLvLength), _.ball.active = !0, this.ballCtrl.isDie = !1, this.ballCtrl.TurnOnStageEvent(), this.ballCtrl.resetConfigData(), this.tempV3.setValue(0, 3.1, -.5), _.ball.transform.position = this.tempV3, this.cameraCtrl.resetPos(), ct.instance.isSuperStart && this.ballCtrl.SuperStartCall();
					break;
				case "infinite":
					_.ground.active = !1, _.zhuzi.active = !1;
					e = this.tableArray.length;
					for (let t = 0; t < e; t++) this.recoveryTable(this.tableArray.pop());
					this.currPlanCount = 0, this.CreateTurnTable(15), _.ball.active = !0, this.ballCtrl.isDie = !1, this.ballCtrl.TurnOnStageEvent(), this.ballCtrl.resetConfigData(), this.tempV3.setValue(0, 3.1, -.5), _.ball.transform.position = this.tempV3, this.cameraCtrl.resetPos(), ct.instance.isSuperStart && this.ballCtrl.SuperStartCall();
					break;
				case "balance":
					this.balanceTableCount = 1, this.CreateTurnTable(20), console.log("平衡模式 balanceLvLength: ", this.balanceLvLength), this.balanceCameraCtrl.TurnOnStageEvent(), this.tempV3.setValue(0, -.122 * (this.balanceLvLength + 1), 0), _.balanceGround.transform.position = this.tempV3, this.balanceCameraCtrl.resetPos();
					break;
				case "start":
					_.ground.active = !1, _.zhuzi.active = !1, this.getColoConfig();
					e = this.tableArray.length;
					for (let t = 0; t < e; t++) this.recoveryTable(this.tableArray.pop());
					this.tableCount = 1, this.colorStage = 1, this.currPlanCount = 0, this.CreateTurnTable(15), console.log("开始界面 currLvLength: ", this.currLvLength), _.ball.active = !0, this.ballCtrl.isDie = !1, this.ballCtrl.TurnOnStageEvent(), this.ballCtrl.resetConfigData(), this.tempV3.setValue(0, 3.1, -.5), _.ball.transform.position = this.tempV3, this.cameraCtrl.resetPos(), ct.instance.isSuperStart && this.ballCtrl.SuperStartCall();
					break;
				default:
					console.warn("重置游戏模型：游戏模式异常，请检查！", this.gameMode)
			}
		}
		returnMain() {
			this.gameMode = "start", this.resetModels("start"), Q.instance.showStartUI(!0)
		}
		nextLvTableModel() {
			switch (this.gameMode) {
				case "level":
					this.originModelIndex++, this.originModelIndex %= _.turnTableArray.length, this.currTableModel = _.turnTableArray[this.originModelIndex], this.colorArrayIndex++, this.colorArrayIndex %= this.colorArray.length, St.setCurrColorConfig(this.colorArrayIndex), this.isHasRewardSkin = !0;
					let e = St.getCurrLvInfo();
					if (e / 5 > 0 && e % 5 == 0 ? (this.isBossLv = !0, this.isRewardLv = !1, this.isGetRewardSkin = !1, this.rewardSkinPos = Math.floor(Math.random() * this.currLvLength), this.rewardSkinPos < 10 && (this.rewardSkinPos = 10), console.log("置为boss关卡")) : e / 5 > 0 && e % 5 == 1 ? (this.isBossLv = !1, this.isRewardLv = !0, this.isGetRewardSkin = !0, this.rewardSkinPos = Math.floor(Math.random() * this.currLvLength), this.rewardSkinPos < 10 && (this.rewardSkinPos = 10)) : (this.isBossLv = !1, this.isRewardLv = !1, this.isGetRewardSkin = !1, this.rewardSkinPos = Math.floor(Math.random() * this.currLvLength), this.rewardSkinPos < 10 && (this.rewardSkinPos = 10)), this.coinModelArrs.length > 0) {
						var t = this.coinModelArrs.length;
						for (let e = 0; e < t; e++) x.recoveryItemBySign("coinModel", this.coinModelArrs.pop());
						x.clearPoolBySign("coinModel"), x.clearPoolBySign(_.coinEffect.name)
					}
					this.boxInsModel && this.boxInsModel.active && (x.recoveryItemBySign("SkinModel", this.boxInsModel), this.boxInsModel = null), e++, St.setCurrLvInfo(e), Ct.instance.checkCurrData_SpeLv();
					break;
				case "infinite":
					this.originModelIndex++, this.originModelIndex %= _.turnTableArray.length, this.currTableModel = _.turnTableArray[this.originModelIndex], this.colorArrayIndex++, this.colorArrayIndex %= this.colorArray.length, St.setCurrColorConfig(this.colorArrayIndex), this.isHasRewardSkin = !0;
					let i = St.getGameCountInfo();
					if (this.isBossLv = !1, this.isRewardLv = !1, this.isGetRewardSkin = !1, this.rewardSkinPos < 10 && (this.rewardSkinPos = 10), this.coinModelArrs.length > 0) {
						t = this.coinModelArrs.length;
						for (let e = 0; e < t; e++) x.recoveryItemBySign("coinModel", this.coinModelArrs.pop());
						x.clearPoolBySign("coinModel"), x.clearPoolBySign(_.coinEffect.name)
					}
					this.boxInsModel && this.boxInsModel.active && (x.recoveryItemBySign("SkinModel", this.boxInsModel), this.boxInsModel = null), i++, St.setGameCountInfo(i), Ct.instance.checkCurrData_SpeLv();
					break;
				case "balance":
					let s = St.getBalanceLvInfo();
					s++, St.setBalanceLvInfo(s);
					break;
				default:
					console.warn("下一关：游戏模式异常，请检查！", this.gameMode)
			}
		}
		gameRelife() {
			this.relifeCount++, this.isGameover = !1, this.isInGame = !0, _.ball.active = !0, this.ballCtrl.isDie = !1, this.ballCtrl.TurnOnStageEvent(), this.ballCtrl.resetConfigData(), F.instance.showFightUI(!0), Ct.instance.checkCurrData_SpeRelife(), kt.GameRecorder_Start()
		}
		setGameover() {
			this.isGameover = !0, this.isInGame = !1, F.instance.showFightUI(!1), kt.GameRecorder_Stop();
			let t = St.getCurrLvInfo();
			if (this.isOnline && t > 1) t % 2 == 1 ? (console.log("relifeCount = ", this.relifeCount), R.instance.showTurnTableUI(!0, () => {
				N.instance.showRewardUI(!0, () => {
					if (this.relifeCount < 2 || "infinite" == this.gameMode) at.instance.showRelifeUI(!0, 0, () => {
						switch (ct.instance.gameMode) {
							case "level":
								$.instance.showOverUI(!0);
								break;
							case "infinite":
								K.instance.ShowUi(!0, () => {
									ot.instance.showInfiniteOverUI(!0)
								})
						}
					});
					else switch (ct.instance.gameMode) {
						case "level":
							$.instance.showOverUI(!0);
							break;
						case "infinite":
							K.instance.ShowUi(!0, () => {
								ot.instance.showInfiniteOverUI(!0)
							})
					}
				})
			})) : (console.log("relifeCount = ", this.relifeCount), V.instance.showGoldEggUI(!0, () => {
				var t = this.getUnlockLimitSkinByRandom();
				if (-1 != t) E.instance.showLimitSkinUI(!0, t, () => {
					if (this.relifeCount < 2 || "infinite" == this.gameMode) at.instance.showRelifeUI(!0, 0, () => {
						switch (ct.instance.gameMode) {
							case "level":
								$.instance.showOverUI(!0);
								break;
							case "infinite":
								K.instance.ShowUi(!0, () => {
									ot.instance.showInfiniteOverUI(!0)
								})
						}
					});
					else switch (ct.instance.gameMode) {
						case "level":
							$.instance.showOverUI(!0);
							break;
						case "infinite":
							K.instance.ShowUi(!0, () => {
								ot.instance.showInfiniteOverUI(!0)
							})
					}
				});
				else if (this.relifeCount < 2 || "infinite" == this.gameMode) console.log("relifeCount = ", this.relifeCount), at.instance.showRelifeUI(!0, 0, () => {
					switch (ct.instance.gameMode) {
						case "level":
							$.instance.showOverUI(!0);
							break;
						case "infinite":
							K.instance.ShowUi(!0, () => {
								ot.instance.showInfiniteOverUI(!0)
							})
					}
				});
				else switch (ct.instance.gameMode) {
					case "level":
						$.instance.showOverUI(!0);
						break;
					case "infinite":
						K.instance.ShowUi(!0, () => {
							ot.instance.showInfiniteOverUI(!0)
						})
				}
			}));
			else if (console.log("relifeCount = ", this.relifeCount), this.relifeCount < 2 || "infinite" == this.gameMode) at.instance.showRelifeUI(!0, 0, () => {
				switch (ct.instance.gameMode) {
					case "level":
						$.instance.showOverUI(!0);
						break;
					case "infinite":
						K.instance.ShowUi(!0, () => {
							ot.instance.showInfiniteOverUI(!0)
						})
				}
			});
			else switch (ct.instance.gameMode) {
				case "level":
					$.instance.showOverUI(!0);
					break;
				case "infinite":
					K.instance.ShowUi(!0, () => {
						ot.instance.showInfiniteOverUI(!0)
					})
			}
		}
		getCurrTableCount() {
			let t = St.getCurrLvInfo(),
				e = St.getBalanceLvInfo();
			switch (this.gameMode) {
				case "start":
					this.currLvLength = 30;
					break;
				case "level":
					this.currLvLength = t <= 11 ? 30 + 7 * (t - 1) : 100 + 5 * Math.floor((t - 11) / 5) >= 200 ? 200 : 90 + 5 * Math.floor(t / 5);
					break;
				case "infinite":
					this.currLvLength = -1;
					break;
				case "balance":
					this.balanceLvLength = 25 + 5 * (e - 1), this.balanceLvLength > 50 && (this.balanceLvLength = 50);
					break;
				default:
					console.warn("获取关卡长度：游戏模式异常，请检查！", this.gameMode)
			}
		}
		CreateTurnTable(t) {
			for (let e = 0; e < t; e++) switch (this.gameMode) {
				case "level":
					if (this.tableCount >= this.currLvLength) return;
				case "start":
				case "infinite":
					this.tempTable = x.getItemBySign(this.currTableModel.name, this.currTableModel), this.modelScene.addChild(this.tempTable), this.tempTable.active = !0, this.resetTranInfo(this.tempTable), t > 1 && 0 == e ? this.tempV3.setValue(0, 3, 0) : this.tempV3.setValue(0, this.tableArray[this.tableArray.length - 1].transform.position.y - .3, 0), this.tempTable.transform.position = this.tempV3, t > 1 && 0 == e ? this.tempV3.setValue(0, 0, 0) : this.tempV3.setValue(0, this.tableArray[this.tableArray.length - 1].transform.localRotationEulerY + 3, 0), this.tempTable.transform.localRotationEuler = this.tempV3, null != this.tempTable.getComponent(U) && this.tempTable.getComponent(U).destroy(), this.tempTableCtrl = this.tempTable.addComponent(U), this.tempTableCtrl.targetTable = this.tableArray[this.tableArray.length - 1], this.tempTableCtrl.comColor = this.getTempTableColor(), this.tempTableCtrl.refreshColor(), 0 == this.currPlanCount && this.getTablePlan(), this.tempTableCtrl.configInfo = this.planInfo, this.currSpawnCount++, this.currSpawnCount >= this.currPlanCount && (this.currPlanCount = 0, this.currSpawnCount = 0), this.isRewardLv && "level" == this.gameMode && (this.createCoinModel1(this.tempTable), this.createCoinModel2(this.tempTable)), this.tableArray.push(this.tempTable), this.tableCount++;
					break;
				case "balance":
					if (this.balanceTableCount > this.balanceLvLength) return;
					if (1 == this.balanceTableCount) this.tempBalanceIndex[this.balanceTableCount] = 0;
					else if (this.tempBalanceIndex[this.balanceTableCount - 3] && 1 == this.tempBalanceIndex[this.balanceTableCount - 3] && 1 == this.tempBalanceIndex[this.balanceTableCount - 2] && 1 == this.tempBalanceIndex[this.balanceTableCount - 1]) this.tempBalanceIndex[this.balanceTableCount] = 0;
					else if (this.tempBalanceIndex[this.balanceTableCount - 7] && 0 == this.tempBalanceIndex[this.balanceTableCount - 7] && 0 == this.tempBalanceIndex[this.balanceTableCount - 6] && 0 == this.tempBalanceIndex[this.balanceTableCount - 5] && 0 == this.tempBalanceIndex[this.balanceTableCount - 4] && 0 == this.tempBalanceIndex[this.balanceTableCount - 3] && 0 == this.tempBalanceIndex[this.balanceTableCount - 2] && 0 == this.tempBalanceIndex[this.balanceTableCount - 1]) this.tempBalanceIndex[this.balanceTableCount] = 1;
					else {
						let t = Math.random();
						this.tempBalanceIndex[this.balanceTableCount] = t < .8 ? 0 : 1
					}
					switch (this.tempTable = x.getItemBySign(this.balanceTableModel[this.tempBalanceIndex[this.balanceTableCount]].name, this.balanceTableModel[this.tempBalanceIndex[this.balanceTableCount]]), this.balanceModelScene.getChildByName("Balance").getChildByName("Tables").addChild(this.tempTable), this.tempTable.active = !0, this.resetTranInfo(this.tempTable), this.tempV3.setValue(0, -.122 * this.balanceTableCount, 0), this.tempTable.transform.position = this.tempV3, this.balanceOriginModelIndex) {
						case 0:
							this.tempV3.setValue(0, -15, 0), this.tempTable.transform.localRotationEuler = this.tempV3;
							break;
						case 1:
						case 2:
							this.tempV3.setValue(0, 0, 0), this.tempTable.transform.localRotationEuler = this.tempV3;
							break;
						case 3:
							this.tempV3.setValue(0, -15, 0), this.tempTable.transform.localRotationEuler = this.tempV3
					}
					this.balanceTableArray.push(this.tempTable), this.balanceTableCount++;
					break;
				default:
					console.warn("实例化转台：游戏模式异常，请检查！", this.gameMode)
			}
		}
		getTempTableColor() {
			var t, e = new Laya.Vector4(0, 0, 0, 1);
			switch (this.gameMode) {
				case "level":
					switch (t = Math.floor(this.currLvLength / 3), this.colorStage) {
						case 1:
							this.tableCount >= t && this.colorStage++, e.x = this.startColor.x - (this.startColor.x - this.secondColor.x) * this.tableCount / t, e.y = this.startColor.y - (this.startColor.y - this.secondColor.y) * this.tableCount / t, e.z = this.startColor.z - (this.startColor.z - this.secondColor.z) * this.tableCount / t;
							break;
						case 2:
							this.tableCount >= 2 * t && this.colorStage++, e.x = this.secondColor.x - (this.secondColor.x - this.thirdColor.x) * (this.tableCount - t) / t, e.y = this.secondColor.y - (this.secondColor.y - this.thirdColor.y) * (this.tableCount - t) / t, e.z = this.secondColor.z - (this.secondColor.z - this.thirdColor.z) * (this.tableCount - t) / t;
							break;
						case 3:
							this.tableCount >= this.currLvLength && this.colorStage++, e.x = this.thirdColor.x - (this.thirdColor.x - this.endColor.x) * (this.tableCount - 2 * t) / (this.currLvLength - 2 * t), e.y = this.thirdColor.y - (this.thirdColor.y - this.endColor.y) * (this.tableCount - 2 * t) / (this.currLvLength - 2 * t), e.z = this.thirdColor.z - (this.thirdColor.z - this.endColor.z) * (this.tableCount - 2 * t) / (this.currLvLength - 2 * t);
							break;
						default:
							console.warn("关卡模式生成颜色异常！")
					}
					break;
				case "infinite":
					switch (t = 30, this.tableCount >= t * this.colorStage && this.colorStage++, this.colorStage % 6) {
						case 1:
							e.x = this.startColor.x - (this.startColor.x - this.secondColor.x) * (this.tableCount - t * (this.colorStage - 1)) / t, e.y = this.startColor.y - (this.startColor.y - this.secondColor.y) * (this.tableCount - t * (this.colorStage - 1)) / t, e.z = this.startColor.z - (this.startColor.z - this.secondColor.z) * (this.tableCount - t * (this.colorStage - 1)) / t;
							break;
						case 2:
							e.x = this.secondColor.x - (this.secondColor.x - this.thirdColor.x) * (this.tableCount - t * (this.colorStage - 1)) / t, e.y = this.secondColor.y - (this.secondColor.y - this.thirdColor.y) * (this.tableCount - t * (this.colorStage - 1)) / t, e.z = this.secondColor.z - (this.secondColor.z - this.thirdColor.z) * (this.tableCount - t * (this.colorStage - 1)) / t;
							break;
						case 3:
							e.x = this.thirdColor.x - (this.thirdColor.x - this.endColor.x) * (this.tableCount - t * (this.colorStage - 1)) / t, e.y = this.thirdColor.y - (this.thirdColor.y - this.endColor.y) * (this.tableCount - t * (this.colorStage - 1)) / t, e.z = this.thirdColor.z - (this.thirdColor.z - this.endColor.z) * (this.tableCount - t * (this.colorStage - 1)) / t;
							break;
						case 4:
							e.x = this.endColor.x - (this.endColor.x - this.thirdColor.x) * (this.tableCount - t * (this.colorStage - 1)) / t, e.y = this.endColor.y - (this.endColor.y - this.thirdColor.y) * (this.tableCount - t * (this.colorStage - 1)) / t, e.z = this.endColor.z - (this.endColor.z - this.thirdColor.z) * (this.tableCount - t * (this.colorStage - 1)) / t;
							break;
						case 5:
							e.x = this.thirdColor.x - (this.thirdColor.x - this.secondColor.x) * (this.tableCount - t * (this.colorStage - 1)) / t, e.y = this.thirdColor.y - (this.thirdColor.y - this.secondColor.y) * (this.tableCount - t * (this.colorStage - 1)) / t, e.z = this.thirdColor.z - (this.thirdColor.z - this.secondColor.z) * (this.tableCount - t * (this.colorStage - 1)) / t;
							break;
						case 0:
							e.x = this.secondColor.x - (this.secondColor.x - this.startColor.x) * (this.tableCount - t * (this.colorStage - 1)) / t, e.y = this.secondColor.y - (this.secondColor.y - this.startColor.y) * (this.tableCount - t * (this.colorStage - 1)) / t, e.z = this.secondColor.z - (this.secondColor.z - this.startColor.z) * (this.tableCount - t * (this.colorStage - 1)) / t;
							break;
						default:
							console.warn("无尽模式生成颜色异常！")
					}
					break;
				case "start":
					switch (t = 30, this.colorStage) {
						case 1:
							this.tableCount >= t && this.colorStage++, e.x = this.startColor.x - (this.startColor.x - this.secondColor.x) * this.tableCount / t, e.y = this.startColor.y - (this.startColor.y - this.secondColor.y) * this.tableCount / t, e.z = this.startColor.z - (this.startColor.z - this.secondColor.z) * this.tableCount / t;
							break;
						case 2:
							this.tableCount >= 2 * t && this.colorStage++, e.x = this.secondColor.x - (this.secondColor.x - this.thirdColor.x) * (this.tableCount - t) / t, e.y = this.secondColor.y - (this.secondColor.y - this.thirdColor.y) * (this.tableCount - t) / t, e.z = this.secondColor.z - (this.secondColor.z - this.thirdColor.z) * (this.tableCount - t) / t;
							break;
						case 3:
							this.tableCount >= 3 * t && this.colorStage++, e.x = this.thirdColor.x - (this.thirdColor.x - this.endColor.x) * (this.tableCount - 2 * t) / t, e.y = this.thirdColor.y - (this.thirdColor.y - this.endColor.y) * (this.tableCount - 2 * t) / t, e.z = this.thirdColor.z - (this.thirdColor.z - this.endColor.z) * (this.tableCount - 2 * t) / t;
							break;
						default:
							console.warn("开始界面生成颜色异常！")
					}
					break;
				case "balance":
					break;
				default:
					console.warn("生成颜色：游戏模式异常，请检查！", this.gameMode)
			}
			return e
		}
		CreateBurstEffect(t, e) {
			this.tempBurst = x.getItemBySign("BurstEffect", _.burstEffect), this.tempBurst.particleRenderer.material.color = this.stampColor, this.modelScene.addChild(this.tempBurst), this.tempBurst.active = !0, this.tempBurst.getComponent(it) && this.tempBurst.getComponent(it).destroy(), this.tempBurst.addComponent(it), this.tempV3.setValue(t.x, e.y, t.z), this.tempBurst.transform.position = this.tempV3
		}
		CreateStampEffect(t) {
			this.tempStamp = x.getItemBySign("StampEffect", _.stampBurst), this.tempStamp.getChildAt(0).meshRenderer.material.albedoColor = this.stampColor, this.modelScene.addChild(this.tempStamp), this.tempStamp.active = !0, this.tempV3.setValue(0, t.transform.position.y, 0), this.tempStamp.transform.position = this.tempV3, this.tempV3.setValue(0, 0, 0), this.tempStamp.transform.rotationEuler = this.tempV3, this.tempV3.setValue(0, 180 * Math.random(), 0), this.tempStamp.getChildAt(0).transform.rotate(this.tempV3, !0, !1), null != this.tempStamp.getComponent(et) && this.tempStamp.getComponent(et).destroy(), this.tempStamp.addComponent(et).targetTableCtrl = t.getComponent(U), this.stampArray.push(this.tempStamp), this.tempV3.setValue(this.stampScale, this.stampScale, this.stampScale), this.tempStamp.getChildAt(0).transform.setWorldLossyScale(this.tempV3)
		}
		createCoinEffect(t) {
			var e = x.getItemBySign(_.coinEffect.name, _.coinEffect);
			this.modelScene.addChild(e), e.active = !0, e.transform.position = t, e.addComponent(nt)
		}
		nextTurnTable() {
			switch (this.gameMode) {
				case "level":
				case "infinite":
					this.passCount++, this.CreateTurnTable(1), this.tableArray.shift(), this.score++, F.instance.updateSocreLabel(this.score), F.instance.onUpdateLvPro(this.passCount);
					break;
				case "balance":
					this.CreateTurnTable(1), this.score++, console.log("得分：", this.score), F.instance.updateSocreLabel(this.score), F.instance.onUpdateLvPro(this.passCount)
			}
		}
		getTablePlan() {
			let t = St.getCurrLvInfo();
			switch (this.currTableModel.name) {
				case "TurnTable_0":
				case "TurnTable_1":
				case "TurnTable_2":
					switch (this.gameMode) {
						case "level":
							if (t < 20 || this.isBossLv) {
								switch (6 != this.tablePlan ? this.tablePlan = 6 : this.tablePlan = Math.floor(5 * Math.random() + 1), this.tablePlan) {
									case 1:
										this.planInfo = "00000001";
										break;
									case 2:
										this.planInfo = "00001001";
										break;
									case 3:
										this.planInfo = "00111111";
										break;
									case 4:
										this.planInfo = "00011111";
										break;
									case 5:
										this.planInfo = "0";
										break;
									default:
										this.planInfo = "00000000"
								}
								6 != this.tablePlan ? this.currPlanCount = Math.floor(2 * Math.random() + 1) : this.currPlanCount = Math.floor(5 * Math.random() + 5)
							} else {
								switch (0 == this.tablePlan || 5 == this.tablePlan ? this.tablePlan = Math.floor(5 * Math.random() + 1) : this.tablePlan = 5, this.tablePlan) {
									case 1:
										this.planInfo = "00001001";
										break;
									case 2:
										this.planInfo = "00000001";
										break;
									case 3:
										this.planInfo = "00111111";
										break;
									case 4:
										this.planInfo = "00011111";
										break;
									case 5:
										this.planInfo = "0"
								}
								5 == this.tablePlan ? this.currPlanCount = Math.floor(3 * Math.random() + 1) : this.currPlanCount = Math.floor(5 * Math.random() + 5)
							}
							this.isRewardLv && (this.planInfo = "00000000", this.currPlanCount = this.currLvLength);
							break;
						case "infinite":
							if (Math.floor(this.colorStage / 3) % 2 == 0) {
								switch (0 == this.tablePlan || 5 == this.tablePlan ? this.tablePlan = Math.floor(5 * Math.random() + 1) : this.tablePlan = 5, this.tablePlan) {
									case 1:
										this.planInfo = "00000001";
										break;
									case 2:
										this.planInfo = "00001001";
										break;
									case 3:
										this.planInfo = "00111111";
										break;
									case 4:
										this.planInfo = "00011111";
										break;
									case 5:
										this.planInfo = "0"
								}
								6 != this.tablePlan ? this.currPlanCount = Math.floor(2 * Math.random() + 1) : this.currPlanCount = Math.floor(5 * Math.random() + 5)
							} else {
								switch (0 == this.tablePlan || 5 == this.tablePlan ? this.tablePlan = Math.floor(5 * Math.random() + 1) : this.tablePlan = 5, this.tablePlan) {
									case 1:
										this.planInfo = "00001001";
										break;
									case 2:
										this.planInfo = "00000001";
										break;
									case 3:
										this.planInfo = "11111011";
										break;
									case 4:
										this.planInfo = "11101100";
										break;
									case 5:
										this.planInfo = "0"
								}
								5 == this.tablePlan ? this.currPlanCount = Math.floor(3 * Math.random() + 1) : this.currPlanCount = Math.floor(5 * Math.random() + 5)
							}
					}
					break;
				case "TurnTable_3":
				case "TurnTable_4":
				case "TurnTable_8":
				case "TurnTable_9":
				case "TurnTable_10":
					switch (this.gameMode) {
						case "level":
							if (t <= 20 || this.isBossLv) {
								switch (6 == this.tablePlan ? this.tablePlan = Math.floor(4 * Math.random() + 1) : this.tablePlan = 6, this.tablePlan) {
									case 1:
										this.planInfo = "1000";
										break;
									case 2:
										this.planInfo = "1100";
										break;
									case 3:
										this.planInfo = "1110";
										break;
									case 4:
										this.planInfo = "0";
										break;
									default:
										this.planInfo = "0000"
								}
								4 == this.tablePlan ? this.currPlanCount = Math.floor(3 * Math.random() + 1) : this.currPlanCount = Math.floor(5 * Math.random() + 5)
							} else {
								switch (0 == this.tablePlan || 4 == this.tablePlan ? this.tablePlan = Math.floor(4 * Math.random() + 1) : this.tablePlan = 4, this.tablePlan) {
									case 1:
										this.planInfo = "1000";
										break;
									case 2:
										this.planInfo = "1100";
										break;
									case 3:
										this.planInfo = "1110";
										break;
									case 4:
										this.planInfo = "0"
								}
								6 != this.tablePlan ? this.currPlanCount = Math.floor(3 * Math.random() + 1) : this.currPlanCount = Math.floor(5 * Math.random() + 5)
							}
							this.isRewardLv && (this.planInfo = "0000", this.currPlanCount = this.currLvLength);
							break;
						case "infinite":
							if (Math.floor(this.colorStage / 3) % 2 == 0) {
								switch (0 == this.tablePlan || 4 == this.tablePlan ? this.tablePlan = Math.floor(4 * Math.random() + 1) : this.tablePlan = 4, this.tablePlan) {
									case 1:
										this.planInfo = "1000";
										break;
									case 2:
										this.planInfo = "1100";
										break;
									case 3:
										this.planInfo = "1110";
										break;
									case 4:
										this.planInfo = "0"
								}
								4 == this.tablePlan ? this.currPlanCount = Math.floor(3 * Math.random() + 1) : this.currPlanCount = Math.floor(5 * Math.random() + 5)
							} else {
								switch (0 == this.tablePlan || 4 == this.tablePlan ? this.tablePlan = Math.floor(4 * Math.random() + 1) : this.tablePlan = 4, this.tablePlan) {
									case 1:
										this.planInfo = "1000";
										break;
									case 2:
										this.planInfo = "1100";
										break;
									case 3:
										this.planInfo = "1011";
										break;
									case 4:
										this.planInfo = "0"
								}
								6 != this.tablePlan ? this.currPlanCount = Math.floor(3 * Math.random() + 1) : this.currPlanCount = Math.floor(5 * Math.random() + 5)
							}
					}
					break;
				case "TurnTable_5":
				case "TurnTable_6":
				case "TurnTable_7":
					switch (this.gameMode) {
						case "level":
							if (t <= 20 || this.isBossLv) {
								switch (6 == this.tablePlan ? this.tablePlan = Math.floor(4 * Math.random() + 1) : this.tablePlan = 6, this.tablePlan) {
									case 1:
										this.planInfo = "10000";
										break;
									case 2:
										this.planInfo = "11000";
										break;
									case 3:
										this.planInfo = "11100";
										break;
									case 4:
										this.planInfo = "0";
										break;
									default:
										this.planInfo = "00000"
								}
								6 != this.tablePlan ? this.currPlanCount = Math.floor(3 * Math.random() + 1) : this.currPlanCount = Math.floor(5 * Math.random() + 5)
							} else {
								switch (0 == this.tablePlan || 4 == this.tablePlan ? this.tablePlan = Math.floor(4 * Math.random() + 1) : this.tablePlan = 4, this.tablePlan) {
									case 1:
										this.planInfo = "10000";
										break;
									case 2:
										this.planInfo = "11000";
										break;
									case 3:
										this.planInfo = "11100";
										break;
									case 4:
										this.planInfo = "0"
								}
								4 == this.tablePlan ? this.currPlanCount = Math.floor(3 * Math.random() + 1) : this.currPlanCount = Math.floor(5 * Math.random() + 5)
							}
							this.isRewardLv && (this.planInfo = "00000", this.currPlanCount = this.currLvLength);
							break;
						case "infinite":
							if (Math.floor(this.colorStage / 3) % 2 == 0) {
								switch (0 == this.tablePlan || 4 == this.tablePlan ? this.tablePlan = Math.floor(4 * Math.random() + 1) : this.tablePlan = 4, this.tablePlan) {
									case 1:
										this.planInfo = "10000";
										break;
									case 2:
										this.planInfo = "11000";
										break;
									case 3:
										this.planInfo = "11100";
										break;
									case 4:
										this.planInfo = "0"
								}
								6 != this.tablePlan ? this.currPlanCount = Math.floor(3 * Math.random() + 1) : this.currPlanCount = Math.floor(5 * Math.random() + 5)
							} else {
								switch (0 == this.tablePlan || 4 == this.tablePlan ? this.tablePlan = Math.floor(4 * Math.random() + 1) : this.tablePlan = 4, this.tablePlan) {
									case 1:
										this.planInfo = "10000";
										break;
									case 2:
										this.planInfo = "11000";
										break;
									case 3:
										this.planInfo = "10111";
										break;
									case 4:
										this.planInfo = "0"
								}
								4 == this.tablePlan ? this.currPlanCount = Math.floor(3 * Math.random() + 1) : this.currPlanCount = Math.floor(5 * Math.random() + 5)
							}
					}
					break;
				default:
					console.warn("获取转台配置方案：游戏模式异常，请检查！", this.gameMode)
			}
		}
		resetTranInfo(t) {
			if ("balance" != this.gameMode)
				for (let e = 0; e < t.numChildren; e++) this.tempV3.setValue(0, 0, 0), t.getChildAt(e).transform.localPosition = this.tempV3, t.getChildAt(e).transform.localRotationEulerY = 360 / t.numChildren * e;
			this.tempV3.setValue(0, 0, 0), t.transform.position = this.tempV3, t.transform.localRotationEuler = this.tempV3
		}
		recoveryTable(t) {
			if (t.active) {
				for (let e = 0; e < t.numChildren; e++) this.tempV3.setValue(0, 0, 0), t.getChildAt(e).transform.localPosition = this.tempV3, t.getChildAt(e).transform.localRotationEulerY = 360 / t.numChildren * e, t.getChildAt(e).meshRenderer.material.albedoColor = this.comColor, t.getChildAt(e).getComponent(M) && t.getChildAt(e).getComponent(M).destroy(), t.getChildAt(e).name = "TurnTable";
				this.tempV3.setValue(0, 0, 0), t.transform.position = this.tempV3, t.transform.localRotationEuler = this.tempV3, x.recoveryItemBySign(t.name, t)
			}
		}
		getColoConfig() {
			this.startColor.setValue(this.colorArray[this.colorArrayIndex].start[0] / 255, this.colorArray[this.colorArrayIndex].start[1] / 255, this.colorArray[this.colorArrayIndex].start[2] / 255), this.secondColor.setValue(this.colorArray[this.colorArrayIndex].second[0] / 255, this.colorArray[this.colorArrayIndex].second[1] / 255, this.colorArray[this.colorArrayIndex].second[2] / 255), this.thirdColor.setValue(this.colorArray[this.colorArrayIndex].third[0] / 255, this.colorArray[this.colorArrayIndex].third[1] / 255, this.colorArray[this.colorArrayIndex].third[2] / 255), this.endColor.setValue(this.colorArray[this.colorArrayIndex].end[0] / 255, this.colorArray[this.colorArrayIndex].end[1] / 255, this.colorArray[this.colorArrayIndex].end[2] / 255), console.log("startColor: ", this.startColor), console.log("secondColor: ", this.secondColor), console.log("thirdColor: ", this.thirdColor), console.log("endColor: ", this.endColor)
		}
		ChangeBgSkin() {
			Laya.Texture2D.load("subPackage/res/BgTexture/BgTex" + String(this.colorArrayIndex + 1) + ".png", Laya.Handler.create(this, t => {
				var e = t;
				_.bg.meshRenderer.material.albedoTexture = e
			}))
		}
		changeBallSkin(t, e = !0) {
			if (t <= 8) _.trail.active = !0, _.ball_Type1.active = !0, _.ball_Type2.active = !1, _.ball_Type3.active = !1, _.ball_Type4.active = !1, _.ball_Type5.active = !1, _.ball_Type6.active = !1, _.ball_Type7.active = !1, _.ball_Type8.active = !1, _.ball_Type9.active = !1, _.ball_Type10.active = !1, _.ball_Type11.active = !1, _.ball_Type12.active = !1, Laya.Texture2D.load("subPackage/res/ballTex/ballSkin" + String(t + 1) + ".png", Laya.Handler.create(this, t => {
				var e = t;
				_.ball_Type1.meshRenderer.material.albedoTexture = e
			}));
			else switch (_.trail.active = !1, t) {
				case 9:
					_.ball_Type1.active = !1, _.ball_Type2.active = !0, _.ball_Type3.active = !1, _.ball_Type4.active = !1, _.ball_Type5.active = !1, _.ball_Type6.active = !1, _.ball_Type7.active = !1, _.ball_Type8.active = !1, _.ball_Type9.active = !1, _.ball_Type10.active = !1, _.ball_Type11.active = !1, _.ball_Type12.active = !1;
					break;
				case 10:
					_.ball_Type1.active = !1, _.ball_Type2.active = !1, _.ball_Type3.active = !0, _.ball_Type4.active = !1, _.ball_Type5.active = !1, _.ball_Type6.active = !1, _.ball_Type7.active = !1, _.ball_Type8.active = !1, _.ball_Type9.active = !1, _.ball_Type10.active = !1, _.ball_Type11.active = !1, _.ball_Type12.active = !1;
					break;
				case 11:
					_.ball_Type1.active = !1, _.ball_Type2.active = !1, _.ball_Type3.active = !1, _.ball_Type4.active = !0, _.ball_Type5.active = !1, _.ball_Type6.active = !1, _.ball_Type7.active = !1, _.ball_Type8.active = !1, _.ball_Type9.active = !1, _.ball_Type10.active = !1, _.ball_Type11.active = !1, _.ball_Type12.active = !1;
					break;
				case 12:
					_.ball_Type1.active = !1, _.ball_Type2.active = !1, _.ball_Type3.active = !1, _.ball_Type4.active = !1, _.ball_Type5.active = !0, _.ball_Type6.active = !1, _.ball_Type7.active = !1, _.ball_Type8.active = !1, _.ball_Type9.active = !1, _.ball_Type10.active = !1, _.ball_Type11.active = !1, _.ball_Type12.active = !1, _.trail.active = !0;
					break;
				case 13:
					_.ball_Type1.active = !1, _.ball_Type2.active = !1, _.ball_Type3.active = !1, _.ball_Type4.active = !1, _.ball_Type5.active = !1, _.ball_Type6.active = !0, _.ball_Type7.active = !1, _.ball_Type8.active = !1, _.ball_Type9.active = !1, _.ball_Type10.active = !1, _.ball_Type11.active = !1, _.ball_Type12.active = !1, _.trail.active = !0;
					break;
				case 14:
					_.ball_Type1.active = !1, _.ball_Type2.active = !1, _.ball_Type3.active = !1, _.ball_Type4.active = !1, _.ball_Type5.active = !1, _.ball_Type6.active = !1, _.ball_Type7.active = !0, _.ball_Type8.active = !1, _.ball_Type9.active = !1, _.ball_Type10.active = !1, _.ball_Type11.active = !1, _.ball_Type12.active = !1;
					break;
				case 15:
					_.ball_Type1.active = !1, _.ball_Type2.active = !1, _.ball_Type3.active = !1, _.ball_Type4.active = !1, _.ball_Type5.active = !1, _.ball_Type6.active = !1, _.ball_Type7.active = !1, _.ball_Type8.active = !0, _.ball_Type9.active = !1, _.ball_Type10.active = !1, _.ball_Type11.active = !1, _.ball_Type12.active = !1;
					break;
				case 16:
					_.ball_Type1.active = !1, _.ball_Type2.active = !1, _.ball_Type3.active = !1, _.ball_Type4.active = !1, _.ball_Type5.active = !1, _.ball_Type6.active = !1, _.ball_Type7.active = !1, _.ball_Type8.active = !1, _.ball_Type9.active = !0, _.ball_Type10.active = !1, _.ball_Type11.active = !1, _.ball_Type12.active = !1;
					break;
				case 17:
					_.ball_Type1.active = !1, _.ball_Type2.active = !1, _.ball_Type3.active = !1, _.ball_Type4.active = !1, _.ball_Type5.active = !1, _.ball_Type6.active = !1, _.ball_Type7.active = !1, _.ball_Type8.active = !1, _.ball_Type9.active = !1, _.ball_Type10.active = !0, _.ball_Type11.active = !1, _.ball_Type12.active = !1;
					break;
				case 18:
					_.ball_Type1.active = !1, _.ball_Type2.active = !1, _.ball_Type3.active = !1, _.ball_Type4.active = !1, _.ball_Type5.active = !1, _.ball_Type6.active = !1, _.ball_Type7.active = !1, _.ball_Type8.active = !1, _.ball_Type9.active = !1, _.ball_Type10.active = !1, _.ball_Type11.active = !0, _.ball_Type12.active = !1;
					break;
				case 19:
					_.ball_Type1.active = !1, _.ball_Type2.active = !1, _.ball_Type3.active = !1, _.ball_Type4.active = !1, _.ball_Type5.active = !1, _.ball_Type6.active = !1, _.ball_Type7.active = !1, _.ball_Type8.active = !1, _.ball_Type9.active = !1, _.ball_Type10.active = !1, _.ball_Type11.active = !1, _.ball_Type12.active = !0
			}
			this.changeStampColor(t), this.stampScale = 14 == t || 15 == t || 16 == t || 18 == t ? .008 : .025
		}
		changeStampColor(t) {
			switch (t) {
				case 0:
					this.stampColor.setValue(59 / 255, 189 / 255, 227 / 255, 1), this.burstColor.setValue(59 / 255, 189 / 255, 227 / 255, 1);
					break;
				case 1:
					this.stampColor.setValue(1, 171 / 255, 66 / 255, 1), this.burstColor.setValue(144 / 255, 87 / 255, 0, 1);
					break;
				case 2:
					this.stampColor.setValue(55 / 255, 1, 148 / 255, 1), this.burstColor.setValue(59 / 255, 189 / 255, 227 / 255, 1);
					break;
				case 3:
					this.burstColor.setValue(59 / 255, 189 / 255, 227 / 255, 1), this.stampColor.setValue(225 / 255, 253 / 255, 216 / 255, 1);
					break;
				case 4:
					this.burstColor.setValue(59 / 255, 189 / 255, 227 / 255, 1), this.stampColor.setValue(1, 1, 1, 1);
					break;
				case 5:
					this.burstColor.setValue(59 / 255, 189 / 255, 227 / 255, 1), this.stampColor.setValue(82 / 255, 78 / 255, 75 / 255, 1);
					break;
				case 6:
					this.burstColor.setValue(59 / 255, 189 / 255, 227 / 255, 1), this.stampColor.setValue(1, 136 / 255, 54 / 255, 1);
					break;
				case 7:
					this.burstColor.setValue(59 / 255, 189 / 255, 227 / 255, 1), this.stampColor.setValue(242 / 255, 164 / 255, 66 / 255, 1);
					break;
				case 8:
					this.burstColor.setValue(59 / 255, 189 / 255, 227 / 255, 1), this.stampColor.setValue(1, 171 / 255, 66 / 255, 1);
					break;
				case 9:
					this.burstColor.setValue(59 / 255, 189 / 255, 227 / 255, 1), this.stampColor.setValue(239 / 255, .2, .2, 1);
					break;
				case 10:
					this.burstColor.setValue(59 / 255, 189 / 255, 227 / 255, 1), this.stampColor.setValue(240 / 255, 235 / 255, 221 / 255, 1);
					break;
				case 11:
					this.burstColor.setValue(59 / 255, 189 / 255, 227 / 255, 1), this.stampColor.setValue(.2, 56 / 255, 57 / 255, 1);
					break;
				case 12:
					this.burstColor.setValue(246 / 255, 246 / 255, 239 / 255, 1), this.stampColor.setValue(246 / 255, 246 / 255, 239 / 255, 1);
					break;
				case 13:
					this.burstColor.setValue(66 / 255, 184 / 255, 64 / 255, 1), this.stampColor.setValue(236 / 255, 59 / 255, 54 / 255, 1);
					break;
				case 14:
					this.burstColor.setValue(211 / 255, 205 / 255, 209 / 255, 1), this.stampColor.setValue(211 / 255, 205 / 255, 209 / 255, 1);
					break;
				case 15:
					this.burstColor.setValue(227 / 255, 83 / 255, 72 / 255, 1), this.stampColor.setValue(227 / 255, 83 / 255, 72 / 255, 1);
					break;
				case 16:
					this.burstColor.setValue(211 / 255, 205 / 255, 209 / 255, 1), this.stampColor.setValue(211 / 255, 205 / 255, 209 / 255, 1);
					break;
				case 17:
					this.burstColor.setValue(1, 74 / 255, 45 / 255, 1), this.stampColor.setValue(1, 74 / 255, 45 / 255, 1);
					break;
				case 18:
					this.burstColor.setValue(1, 219 / 255, 66 / 255, 1), this.stampColor.setValue(1, 219 / 255, 66 / 255, 1);
					break;
				case 19:
					this.burstColor.setValue(145 / 255, 123 / 255, 104 / 255, 1), this.stampColor.setValue(145 / 255, 123 / 255, 104 / 255, 1)
			}
			_.stampBurst.getChildAt(0).meshRenderer.material.albedoColor = this.stampColor, _.burstEffect.particleRenderer.material.color = this.stampColor, _.trail.trailRenderer.material.color = this.burstColor
		}
		getLockSkinByRandom() {
			var t = [];
			for (let e = 0; e < Ct.instance.skinData.skinData.length; e++) Ct.instance.skinData.skinData[e].isOwn || "1" != Ct.instance.skinData.skinData[e].state || t.push(e);
			var e = Math.floor(Math.random() * t.length);
			return t.length <= 0 ? -1 : t[e]
		}
		getUnlockLimitSkinByRandom() {
			var t = [];
			for (let e = 0; e < Ct.instance.skinData.skinData.length; e++) Ct.instance.skinData.skinData[e].isOwn || "1" != Ct.instance.skinData.skinData[e].state || Ct.instance.skinData.skinData[e].isSpecial && 6 == Ct.instance.skinData.skinData[e].speType && t.push(e);
			var e = Math.floor(Math.random() * t.length);
			return t.length <= 0 ? -1 : t[e]
		}
		createCoinModel1(t) {
			var e = x.getItemBySign(_.coinModel.name, _.coinModel);
			switch (this.modelScene.addChild(e), e.active = !0, this.currTableModel.name) {
				case "TurnTable_0":
				case "TurnTable_1":
				case "TurnTable_2":
				case "TurnTable_3":
				case "TurnTable_4":
					this.curroffsetAngle = 180;
					break;
				case "TurnTable_5":
				case "TurnTable_6":
					this.curroffsetAngle = 144;
					break;
				case "TurnTable_7":
				case "TurnTable_8":
				case "TurnTable_9":
					this.curroffsetAngle = 180
			}
			this.tempV3.setValue(0, t.transform.position.y, 0), e.transform.position = this.tempV3, this.tempV3.setValue(0, t.transform.localRotationEulerY + this.curroffsetAngle, 0), e.transform.localRotationEuler = this.tempV3, e.addComponent(H).setTargetTable(t, this.curroffsetAngle), this.coinModelArrs.push(e)
		}
		createCoinModel2(t) {
			var e = x.getItemBySign(_.coinModel.name, _.coinModel);
			switch (this.modelScene.addChild(e), e.active = !0, this.currTableModel.name) {
				case "TurnTable_0":
				case "TurnTable_1":
				case "TurnTable_2":
				case "TurnTable_3":
				case "TurnTable_4":
				case "TurnTable_5":
				case "TurnTable_6":
					this.curroffsetAngle = 0;
					break;
				case "TurnTable_7":
					this.curroffsetAngle = -36;
					break;
				case "TurnTable_8":
				case "TurnTable_9":
					this.curroffsetAngle = 0
			}
			this.tempV3.setValue(0, t.transform.position.y, 0), e.transform.position = this.tempV3, this.tempV3.setValue(0, t.transform.localRotationEulerY + this.curroffsetAngle, 0), e.transform.localRotationEuler = this.tempV3, e.addComponent(H).setTargetTable(t, this.curroffsetAngle), this.coinModelArrs.push(e)
		}
		createSkinModel(t) { }
		requestConfig() { }
	}
	ct._instance = null;
	class dt extends Laya.Script {
		constructor() {
			super(), this.taskData = null, this.getBtnSkin = "", this.getBtnDisable = !1, dt.instance = this
		}
		onAwake() {
			this.taskUI = this.owner, this.uiBox = this.taskUI.getChildAt(0), this.taskBg = this.uiBox.getChildAt(0), this.closeBtn = this.taskBg.getChildByName("closeBtn"), this.taskList = this.taskBg.getChildByName("taskList")
		}
		onStart() {
			this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtn_Click), this.taskList.vScrollBarSkin = "", this.initTaskUI(), St.addTaskCallbacks(this.onTaskUpdate.bind(this), "Task" + this.id)
		}
		showTaskUI(t) {
			t ? (this.taskUI.visible = !0, this.initTaskUI(), this.taskBg.scale(0, 0), Laya.Tween.to(this.taskBg, {
				scaleX: 1,
				scaleY: 1
			}, 300), n.ShowBanner()) : Laya.Tween.to(this.taskBg, {
				scaleX: 0,
				scaleY: 0
			}, 300, null, Laya.Handler.create(this, () => {
				this.taskUI.visible = !1
			}))
		}
		initTaskUI() {
			St.getTaskDate() == D.AnalysisTimeStamp() ? this.taskData = St.getTaskData() : (this.taskData = St.taskData_Profab, St.setTaskData(this.taskData), St.setTaskDate()), this.setTaskList()
		}
		setTaskList() {
			var t = [];
			for (let e = 0; e < this.taskData.taskNum; e++)
				if (3 != e && 1 != e) {
					switch (this.taskData.taskData[e].taskState) {
						case 0:
							this.getBtnSkin = "UI/taskUI/get.png", this.getBtnDisable = !0;
							break;
						case 1:
							St.taskRedPoint = !0, mt.instance.setTaskBtnPointer(), this.getBtnSkin = "UI/taskUI/get.png", this.getBtnDisable = !1;
							break;
						case 2:
							St.taskRedPoint = !0, mt.instance.setTaskBtnPointer(), this.getBtnSkin = "UI/taskUI/get_Ad.png", this.getBtnDisable = !1;
							break;
						case 3:
							this.getBtnSkin = "UI/taskUI/got.png", this.getBtnDisable = !0
					}
					t.push({
						taskItem: {
							skin: "UI/taskUI/task" + String(e + 1) + ".png"
						},
						getRewardBtn: {
							skin: this.getBtnSkin,
							disabled: this.getBtnDisable
						},
						taskProTop: {
							width: this.taskData.taskData[e].taskCount / this.taskData.taskData[e].maxTaskCount * 273 <= 0 ? .001 : this.taskData.taskData[e].taskCount / this.taskData.taskData[e].maxTaskCount * 273
						},
						taskProTxt: {
							text: String(this.taskData.taskData[e].taskCount) + "/" + String(this.taskData.taskData[e].maxTaskCount)
						}
					})
				} this.taskList.dataSource = t, this.taskList.refresh()
		}
		closeBtn_Click() {
			this.showTaskUI(!1)
		}
		onTaskUpdate() {
			this.taskData = St.getTaskData(), this.setTaskList()
		}
		getTaskReward(t) {
			console.log("获得任务" + String(t + 1) + "的奖励"), St.taskRedPoint = !1, mt.instance.setTaskBtnPointer();
			var e = bt.getCoinData();
			e += this.taskData.taskData[t].taskRewardNum, bt.setCoinData(e), n.showToast("Get coins:" + String(this.taskData.taskData[t].taskRewardNum), "none", 2e3)
		}
		setTaskState(t, e) {
			this.taskData.taskData[t].taskState = e, St.setTaskData(this.taskData), this.setTaskList()
		}
	}
	dt.instance = null;
	class ut extends Laya.Script {
		constructor() {
			super(), this.coinNum_reward = 0, this.angle = 0, this.isStartTurn = !1, this.callBack_close = null, ut.instance = this
		}
		onAwake() {
			this.turnTableUI = this.owner, this.uiBox = this.turnTableUI.getChildAt(0), this.turnTableBg = this.uiBox.getChildAt(0), this.tableImg = this.turnTableBg.getChildByName("tableImg"), this.textImage = this.turnTableBg.getChildByName("textImage"), this.bar = this.turnTableBg.getChildByName("barBg").getChildByName("bar"), this.upBtn = this.turnTableBg.getChildByName("upBtn"), this.check = this.upBtn.getChildByName("check"), this.mainBtn = this.turnTableBg.getChildByName("mainBtn"), this.skipBtn = this.turnTableBg.getChildByName("skipBtn")
		}
		onStart() {
			this.upBtn.on(Laya.Event.CLICK, this, this.upBtn_Click), this.mainBtn.on(Laya.Event.CLICK, this, this.mainBtn_Click), this.skipBtn.on(Laya.Event.CLICK, this, this.skipBtn_Click)
		}
		onUpdate() {
			this.isStartTurn && (this.tableImg.rotation += 20, this.tableImg.rotation %= 360)
		}
		showTurnTableUI(t, e = null) {
			t ? (this.callBack_close = e, this.turnTableUI.visible = !0, this.tableImg.rotation = 0, this.setImage(this.getTurnNum()), ct.instance.isOnline ? (this.upBtn.visible = !0, this.check.visible = !0, this.mainBtn.visible = !0, this.skipBtn.visible = !1, this.skipBtn.bottom = 30) : (this.upBtn.visible = !1, this.mainBtn.visible = !0, this.skipBtn.visible = !0, this.skipBtn.bottom = -90), this.getFreeSign() ? this.mainBtn.skin = "UI/turnTableUI/turnnow.png" : this.mainBtn.skin = "UI/turnTableUI/freeturn.png", ct.instance.isOnline && (this.isForceAd = !0, console.log("点击勾选框即将强拉广告")), this.turnTableBg.scale(0, 0), Laya.Tween.to(this.turnTableBg, {
				scaleX: 1,
				scaleY: 1
			}, 300), n.HideBanner()) : (Laya.Tween.to(this.turnTableBg, {
				scaleX: 0,
				scaleY: 0
			}, 300, null, Laya.Handler.create(this, () => {
				this.turnTableUI.visible = !1
			})), this.callBack_close && this.callBack_close())
		}
		upBtn_Click() {
			this.isForceAd ? (this.isForceAd = !1, this.startTurnTable(), this.mainBtn.skin = "UI/turnTableUI/turnagain.png" /*n.ShowRewardAd(() => {
				this.startTurnTable(), this.mainBtn.skin = "UI/turnTableUI/turnagain.png"
			}, () => { })*/) : this.check.visible ? (this.check.visible = !1, this.skipBtn.visible = !0) : (this.check.visible = !0, this.skipBtn.visible = !1)
		}
		getAngleAndReward() {
			if (console.log("TurnNum == ", this.getTurnNum()), this.getTurnNum() % 4 == 1) return this.coinNum_reward = -1, this.isGetSkin = !0, void (this.angle = 46 * Math.random() + 156);
			var t = Math.random();
			t <= .3 ? (this.coinNum_reward = 50, this.isGetSkin = !1, this.angle = 44 * Math.random() - 22, this.angle < 0 && (this.angle = 360 + this.angle)) : t <= .55 ? (this.coinNum_reward = 100, this.isGetSkin = !1, this.angle = 44 * Math.random() + 292) : t <= .75 ? (this.coinNum_reward = 200, this.isGetSkin = !1, this.angle = 44 * Math.random() + 248) : t <= .9 ? (this.coinNum_reward = 300, this.isGetSkin = !1, this.angle = 46 * Math.random() + 202) : t <= .95 ? (this.coinNum_reward = -1, this.isGetSkin = !0, this.angle = 46 * Math.random() + 156) : t <= .99 ? (this.coinNum_reward = 1e3, this.isGetSkin = !1, this.angle = 46 * Math.random() + 110) : t <= .9999 ? (this.coinNum_reward = 888, this.isGetSkin = !1, this.angle = 44 * Math.random() + 66) : (this.coinNum_reward = 500, this.isGetSkin = !1, this.angle = 44 * Math.random() + 22)
		}
		closeBtn_Click() {
			this.showTurnTableUI(!1)
		}
		mainBtn_Click() {
			switch (this.mainBtn.skin) {
				case "UI/turnTableUI/freeturn.png":
					this.setFreeSign(), this.startTurnTable(), this.mainBtn.skin = "UI/turnTableUI/turnagain.png";
					break;
				default:
					S.setButtonEvents("zhuanpanui", "zhuanpanui_video_start", 1, -1, ""),
					S.setButtonEvents("zhuanpanui", "zhuanpanui_video_success", 1, -1, ""), this.startTurnTable(), this.mainBtn.skin = "UI/turnTableUI/turnagain.png"
					/*n.ShowRewardAd(() => {
						S.setButtonEvents("zhuanpanui", "zhuanpanui_video_success", 1, -1, ""), this.startTurnTable(), this.mainBtn.skin = "UI/turnTableUI/turnagain.png"
					}, () => {
						n.showToast("Get rewarded after watching the video", "none", 2e3)
					})*/
			}
		}
		skipBtn_Click() {
			this.showTurnTableUI(!1)
		}
		startTurnTable() {
			this.refreshTurnNum(), this.isStartTurn = !0, this.mainBtn.disabled = !0, this.skipBtn.disabled = !0, this.getAngleAndReward(), Laya.timer.once(1500, this, () => {
				if (this.isStartTurn = !1, this.mainBtn.disabled = !1, this.skipBtn.disabled = !1, this.tableImg.rotation = this.angle, this.isGetSkin) {
					var t = T.Instance().getLockSkinByRandom();
					n.showToast("Congrats on getting the skin"), B.instance.skinData.skinData[t] && (B.instance.skinData.skinData[t].isOwn = !0, B.instance.skinData.skinData[t].state = 2, bt.setSkinInfoData(B.instance.skinData))
				} else {
					var e = bt.getCoinData();
					e += this.coinNum_reward, bt.setCoinData(e), console.log("Get coins:" + String(this.coinNum_reward)), n.showToast("Get coins:" + String(this.coinNum_reward), "none", 2e3)
				}
				St.updateTaskData(2)
			}), this.setImage(this.getTurnNum())
		}
		getFreeSign() {
			var t = Laya.LocalStorage.getItem("TABLE_FREESIGN");
			return null == t || null == t || "" == t || t != D.AnalysisTimeStamp()
		}
		setFreeSign() {
			Laya.LocalStorage.setItem("TABLE_FREESIGN", D.AnalysisTimeStamp())
		}
		getTurnNum() {
			var t = Laya.LocalStorage.getItem("TABLE_TURN_NUM");
			return null == t || null == t || "" == t ? (Laya.LocalStorage.setItem("TABLE_TURN_NUM", "0"), 0) : Number(t)
		}
		refreshTurnNum() {
			var t = Laya.LocalStorage.getItem("TABLE_TURN_NUM");
			if (null == t || null == t || "" == t) return Laya.LocalStorage.setItem("TABLE_TURN_NUM", "1"), 1;
			var e = Number(t);
			return e++, Laya.LocalStorage.setItem("TABLE_TURN_NUM", e.toString()), e
		}
		setImage(t) {
			0 == t ? (this.textImage.skin = "UI/turnTableUI/1left.png", this.bar.skin = "UI/turnTableUI/bar100.png") : t % 4 == 1 ? (this.textImage.skin = "UI/turnTableUI/4left.png", this.bar.skin = "UI/turnTableUI/bar0.png") : t % 4 == 2 ? (this.textImage.skin = "UI/turnTableUI/3left.png", this.bar.skin = "UI/turnTableUI/bar25.png") : t % 4 == 3 ? (this.textImage.skin = "UI/turnTableUI/2left.png", this.bar.skin = "UI/turnTableUI/bar50.png") : t % 4 == 0 && (this.textImage.skin = "UI/turnTableUI/1left.png", this.bar.skin = "UI/turnTableUI/bar75.png")
		}
	}
	ut.instance = null;
	class gt extends Laya.Script {
		constructor() {
			super(), this.days = [], this.currDay = 0, gt.instance = this
		}
		onAwake() {
			this.signInUI = this.owner, this.uiBox = this.signInUI.getChildAt(0), this.bg = this.uiBox.getChildAt(0), this.mainBtn = this.bg.getChildByName("mainBtn"), this.doubleBtn = this.bg.getChildByName("doubleBtn"), this.check = this.doubleBtn.getChildAt(0), this.downBtn = this.bg.getChildByName("downBtn"), this.closeBtn = this.bg.getChildByName("closeBtn"), this.day1 = this.bg.getChildByName("day1"), this.day2 = this.bg.getChildByName("day2"), this.day3 = this.bg.getChildByName("day3"), this.day4 = this.bg.getChildByName("day4"), this.day5 = this.bg.getChildByName("day5"), this.day6 = this.bg.getChildByName("day6"), this.day7 = this.bg.getChildByName("day7"), this.days.push(this.day1, this.day2, this.day3, this.day4, this.day5, this.day6, this.day7)
		}
		onStart() {
			this.mainBtn.on(Laya.Event.CLICK, this, this.mainBtn_Click), this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtn_Click), this.doubleBtn.on(Laya.Event.CLICK, this, this.doubleBtn_Click), this.downBtn.on(Laya.Event.CLICK, this, this.downBtn_Click)
		}
		showSignInUI(t) {
			t ? (this.signInUI.visible = !0, this.bg.scale(0, 0), this.currDay = this.getSignInDay(), this.initSignUI(), ct.instance.isOnline ? (this.doubleBtn.visible = !0, this.check.visible = !0, this.downBtn.visible = !1, this.closeBtn.visible = !1, Laya.timer.once(3e3, this, () => {
				this.closeBtn.visible = !0
			})) : (this.doubleBtn.visible = !1, this.downBtn.visible = !0, this.downBtn.skin = "UI/signInUI/getRewardBtn.png", this.closeBtn.visible = !0), this.mainBtn.visible = !0, this.mainBtn.skin = "UI/signInUI/getRewardBtn_Ad.png", Laya.Tween.to(this.bg, {
				scaleX: 1,
				scaleY: 1
			}, 300), n.ShowBanner()) : Laya.Tween.to(this.bg, {
				scaleX: 0,
				scaleY: 0
			}, 300, null, Laya.Handler.create(this, () => {
				this.signInUI.visible = !1
			}))
		}
		initSignUI() {
			for (let t = 1; t <= 7; t++) t < this.currDay ? this.days[t - 1].visible = !0 : this.days[t - 1].visible = !1
		}
		mainBtn_Click() {
			"UI/signInUI/getRewardBtn_Ad.png" == this.mainBtn.skin ? (S.setButtonEvents("signui", "signui_doubleget_video_start", 1, -1, ""), () => {
				S.setButtonEvents("signui", "signui_doubleget_video_success", 5, -1, ""), this.getRward(2)
			}, () => {
				n.showToast("Get rewarded after watching the video", "none", 2e3)
			}) : this.getRward(1)
		}
		getRward(t) {
			var e = bt.getCoinData();
			e += this.getCoinNum() * t, bt.setCoinData(e), n.showToast("Get coins:" + String(this.getCoinNum() * t), "none", 2e3), this.setSignInDate(), this.setSignInDay(this.currDay + 1 > 7 ? 7 : this.currDay + 1), St.updateTaskData(0), this.showSignInUI(!1)
		}
		getCoinNum() {
			var t = 0;
			switch (this.currDay) {
				case 1:
					t = 100;
					break;
				case 2:
					t = 200;
					break;
				case 3:
					t = 300;
					break;
				case 4:
					t = 500;
					break;
				case 5:
					t = 800;
					break;
				case 6:
				case 7:
					t = 1e3
			}
			return t
		}
		closeBtn_Click() {
			this.showSignInUI(!1)
		}
		doubleBtn_Click() {
			this.check.visible ? (this.check.visible = !1, this.mainBtn.skin = "UI/signInUI/getRewardBtn.png") : (this.check.visible = !0, this.mainBtn.skin = "UI/signInUI/getRewardBtn_Ad.png")
		}
		downBtn_Click() {
			S.setButtonEvents("signui", "signui_get_start", 0, -1, ""), this.getRward(1)
		}
		setSignInDate() {
			Laya.LocalStorage.setItem("SIGNINDATE_JUMPROPE", this.AnalysisTimeStamp())
		}
		getSignInDate() {
			return Laya.LocalStorage.getItem("SIGNINDATE_JUMPROPE")
		}
		getSignInDay() {
			var t = Laya.LocalStorage.getItem("SIGNINDAY_JUMPROPE");
			return "" != t && null != t && null != t || (t = "1", Laya.LocalStorage.setItem("SIGNINDAY_JUMPROPE", t)), Number(t)
		}
		setSignInDay(t) {
			console.log("保存签到天数", t), Laya.LocalStorage.setItem("SIGNINDAY_JUMPROPE", String(t))
		}
		setOffLineTime(t) {
			Laya.LocalStorage.setItem("OFFLINETIME_JUMPROPE", String(t))
		}
		getOffLineTime() {
			var t = Laya.LocalStorage.getItem("OFFLINETIME_JUMPROPE");
			return "" != t && null != t && null != t || (t = String(Laya.Browser.now()), Laya.LocalStorage.setItem("OFFLINETIME_JUMPROPE", String(t))), Number(t)
		}
		AnalysisTimeStamp() {
			var t = new Date(Laya.Browser.now()),
				e = String(t.getFullYear()),
				i = String(t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1),
				s = String(t.getDate() < 10 ? "0" + t.getDate() : t.getDate());
			t.getHours(), t.getHours(), t.getMinutes(), t.getMinutes(), t.getSeconds(), t.getSeconds();
			return e + i + s
		}
	}
	gt.instance = null;
	class mt extends Laya.Script {
		constructor() {
			super(), mt.instance = this
		}
		onAwake() {
			this.startUI = this.owner, this.uiBox = this.startUI.getChildByName("startUIBox"), this.downModeBtn = this.uiBox.getChildByName("downModeBtn"), this.upModeBtn = this.uiBox.getChildByName("upModeBtn"), this.shareBtn = this.uiBox.getChildByName("shareBtn"), this.audioBtn = this.uiBox.getChildByName("audioBtn"), this.vibrateBtn = this.uiBox.getChildByName("vibrateBtn"), this.storeBtn = this.uiBox.getChildByName("storeBtn"), this.coinBg = this.uiBox.getChildByName("coinBg"), this.coinTxt = this.coinBg.getChildByName("coinTxt"), this.taskBtn = this.uiBox.getChildByName("taskBtn"), this.taskBtnPointer = this.taskBtn.getChildAt(0), this.tableBtn = this.uiBox.getChildByName("tableBtn"), this.uiBox.getChildByName("starkModel").on(Laya.Event.CLICK, this, () => {
				T.Instance().hideGame(), ct.instance.showGame()
			})
		}
		onEnable() { }
		reSetData() {
			this.setCoin(), this.setVibrateBtn(), this.setAudioBtn(), this.setTaskBtnPointer()
		}
		onStart() {
			this.downModeBtn.on(Laya.Event.CLICK, this, this.downModeBtnClick), this.upModeBtn.on(Laya.Event.CLICK, this, this.upModeBtnClick), this.shareBtn.on(Laya.Event.CLICK, this, this.shareBtnClick), this.audioBtn.on(Laya.Event.CLICK, this, this.audioBtnClick), this.vibrateBtn.on(Laya.Event.CLICK, this, this.vibrateBtnClick), this.storeBtn.on(Laya.Event.CLICK, this, this.storeBtnClick), this.taskBtn.on(Laya.Event.CLICK, this, this.taskBtnClick), this.tableBtn.on(Laya.Event.CLICK, this, this.tableBtnClick), this.coinBg.getChildByName("add").on(Laya.Event.CLICK, this, this.coinBgClick), s.Instance().AdaptiveScreen(this.uiBox), this.reSetData()
		}
		ShowStartUI(t) {
			this.startUI.visible = t, t ? (T.Instance().currUIPanel = "1", n.ShowBanner(), this.setCoin(), gt.instance.AnalysisTimeStamp() != gt.instance.getSignInDate() ? (console.log("判断显示签到界面：显示"), gt.instance.showSignInUI(!0)) : console.log("判断显示签到界面：不显示")) : n.HideBanner()
		}
		setCoin() {
			this.coinTxt.text = bt.getCoinData().toString()
		}
		downModeBtnClick() {
			if (St.getInfiniteData() <= 0) {
				if (St.getPowerData() <= 0) return void Laya.View.load("GameScenes/infinitePower.scene", Laya.Handler.create(this, t => {
					t.open(!1), k.instance.addInfiniteCallback(this.downModeBtnClick.bind(this))
				}));
				St.setPowerData(St.getPowerData() - 1)
			}
			T.Instance().DownMode(), this.ShowStartUI(!1), n.playSound(bt.btnAudio)
		}
		setTaskBtnPointer() {
			console.log("显示任务红点", St.taskRedPoint), this.taskBtnPointer.visible = St.taskRedPoint
		}
		upModeBtnClick() {
			if (St.getInfiniteData() <= 0) {
				if (St.getPowerData() <= 0) return void Laya.View.load("GameScenes/infinitePower.scene", Laya.Handler.create(this, t => {
					t.open(!1), k.instance.addInfiniteCallback(this.upModeBtnClick.bind(this))
				}));
				St.setPowerData(St.getPowerData() - 1)
			}
			T.Instance().UpMode(), this.ShowStartUI(!1), n.playSound(bt.btnAudio)
		}
		taskBtnClick() {
			dt.instance.showTaskUI(!0)
		}
		tableBtnClick() {
			ut.instance.showTurnTableUI(!0)
		}
		shareBtnClick() {
			var t = bt.getShareWord();
			n.ShareGame(bt.shareWords[t - 1], "subPackage/res/shareImg" + String(t) + ".jpg"), n.playSound(bt.btnAudio)
		}
		audioBtnClick() {
			bt.getSoundData() ? (bt.setSoundData(!1), n.playBGM(bt.BGM)) : (bt.setSoundData(!0), n.playBGM(bt.BGM)), this.setAudioBtn()
		}
		setAudioBtn() {
			bt.getSoundData() ? this.audioBtn.skin = "UI/startUI/audioOn.png" : this.audioBtn.skin = "UI/startUI/audioOff.png"
		}
		vibrateBtnClick() {
			bt.getVibrateData() ? bt.setVibrateData(!1) : bt.setVibrateData(!0), this.setVibrateBtn()
		}
		setVibrateBtn() {
			bt.getVibrateData() ? this.vibrateBtn.skin = "UI/startUI/vibrationOn.png" : this.vibrateBtn.skin = "UI/startUI/vibrationOff.png"
		}
		storeBtnClick() {
			B.instance.showStoreUI(!0), n.playSound(bt.btnAudio)
		}
		coinBgClick() {
			n.playSound(bt.btnAudio),
			n.showToast("Get coins:200", "none", 2e3), bt.addCoin(200)
				/*n.ShowRewardAd(() => {
				n.showToast("Get coins:200", "none", 2e3), bt.addCoin(200)
			}, () => {
				n.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/
		}
		updateCoinTxt(t) { }
	}
	mt.instance = null;
	class bt {
		constructor() { }
		static getShareRelifeSign() {
			return "" != Laya.LocalStorage.getItem("FallShareSign") && "1" != Laya.LocalStorage.getItem("FallShareSign") || ("1" == Laya.LocalStorage.getItem("FallShareSign") ? Laya.LocalStorage.setItem("FallShareSign", "2") : Laya.LocalStorage.setItem("FallShareSign", "1"), !1)
		}
		static loadJsonFile_Profab() {
			Laya.loader.load(["FailingBallJsonFile/SkinData.json", "FailingBallJsonFile/specialType.json"], Laya.Handler.create(this, () => {
				this.skinData_Profab = Laya.loader.getRes("FailingBallJsonFile/SkinData.json"), this.specialType_Profab = Laya.loader.getRes("FailingBallJsonFile/specialType.json")
			}))
		}
		static getSkinInfoData() {
			var t = Laya.LocalStorage.getItem("FallSkinData"),
				e = null;
			if ("" == t || null == t || null == t ? (e = this.skinData_Profab, Laya.LocalStorage.setItem("FallSkinData", JSON.stringify(e))) : e = JSON.parse(t), e.skinData.length < this.skinData_Profab.skinData.length) {
				for (let t = 0; t < e.skinData.length; t++) this.skinData_Profab.skinData[t].isOwn = e.skinData[t].isOwn, this.skinData_Profab.skinData[t].state = e.skinData[t].state;
				e.skinData = this.skinData_Profab.skinData
			}
			var i = -1;
			for (let t = 0; t < e.skinData.length; t++) - 1 == i && 3 == e.skinData[t].state ? (i = t, e.currUseIndex = t) : e.skinData[t].isOwn ? e.skinData[t].state = 2 : e.skinData[t].state = 1;
			return e
		}
		static setSkinInfoData(t) {
			Laya.LocalStorage.setJSON("FallSkinData", t)
		}
		static getSoundData() {
			return St.getSoundData()
		}
		static setSoundData(t) {
			St.setSoundData(t)
		}
		static getVibrateData() {
			return St.getVibrateData()
		}
		static setVibrateData(t) {
			St.setVibrateData(t)
		}
		static getCoinData() {
			return St.getCoinNum()
		}
		static addCoin(t) {
			var e = this.getCoinData();
			e += t, this.setCoinData(e)
		}
		static reduceCoin(t) {
			var e = this.getCoinData();
			(e -= t) <= 0 && (e = 0), St.setCoinNum(e)
		}
		static setCoinData(t) {
			St.setCoinNum(t), B.instance.updateCoinInfo(), mt.instance.setCoin()
		}
		static getCurrBallSkinInfo() {
			return "" != Laya.LocalStorage.getItem("FallCurrSkin") && null != Laya.LocalStorage.getItem("FallCurrSkin") && null != Laya.LocalStorage.getItem("FallCurrSkin") || Laya.LocalStorage.setItem("FallCurrSkin", "0"), Laya.LocalStorage.getItem("FallCurrSkin")
		}
		static setCurrBallSkinInfo(t) {
			Laya.LocalStorage.setItem("FallCurrSkin", t)
		}
		static getShareWord() {
			var t = Math.random(),
				e = t < .2 ? 1 : t < .4 ? 2 : t < .6 ? 3 : t < .8 ? 4 : 5;
			return 5 == e && (e = 3), e
		}
		static getCourse1Sign() {
			return console.log("获取教程标识1  0"), (null == Laya.LocalStorage.getItem("FallCourse1") || "" == Laya.LocalStorage.getItem("FallCourse1") || "1" == Laya.LocalStorage.getItem("FallCourse1") || "0" == Laya.LocalStorage.getItem("FallCourse1")) && ("1" == Laya.LocalStorage.getItem("FallCourse1") ? Laya.LocalStorage.setItem("FallCourse1", "2") : Laya.LocalStorage.setItem("FallCourse1", "1"), console.log("获取教程标识1  1"), !0)
		}
		static getCourse2Sign() {
			return console.log("获取教程标识2  0"), (null == Laya.LocalStorage.getItem("FallCourse2") || "" == Laya.LocalStorage.getItem("FallCourse2") || "1" == Laya.LocalStorage.getItem("FallCourse2") || "0" == Laya.LocalStorage.getItem("FallCourse2")) && ("1" == Laya.LocalStorage.getItem("FallCourse2") ? Laya.LocalStorage.setItem("FallCourse2", "2") : Laya.LocalStorage.setItem("FallCourse2", "1"), console.log("获取教程标识2 1"), !0)
		}
		static getMaxScore() {
			var t = "",
				e = "";
			return "0" == T.Instance().gameMode ? (t = Laya.LocalStorage.getItem("FallMaxScore_FALLINGBALL_0"), e = "FallMaxScore_FALLINGBALL_0") : (t = Laya.LocalStorage.getItem("FallMaxScore_FALLINGBALL_1"), e = "FallMaxScore_FALLINGBALL_1"), "" != t && null != t && null != t || (t = "0", Laya.LocalStorage.setItem(e, "0")), Number(t)
		}
		static setMaxScore(t) {
			var e = "";
			e = "0" == T.Instance().gameMode ? "FallMaxScore_FALLINGBALL_0" : "FallMaxScore_FALLINGBALL_1", Laya.LocalStorage.setItem(e, String(t))
		}
	}
	bt.shareWords = ["不断冲击，创造新纪录吧！", "超级火爆的模型小游戏，等你来战!", "躲避障碍，冲向塔底吧!", "炫酷多样的皮肤等你来领取！", "是男人就跳下100层！"], bt.btnAudio = "subPackage/res/FallAudio/button.mp3", bt.jumpAudio = "subPackage/res/FallAudio/jump.mp3", bt.BGM = "subPackage/res/FallAudio/BGM.mp3", bt.jump1 = "subPackage/res/FallAudio/jump1.mp3", bt.jump2 = "subPackage/res/FallAudio/jump2.mp3", bt.stamp = "subPackage/res/FallAudio/stamp.mp3", bt.gameover = "subPackage/res/FallAudio/gameover.mp3", bt.skinData_Profab = null, bt.specialType_Profab = null;
	class pt extends Laya.Script {
		constructor() {
			super()
		}
		static initMinigame() { }
		static showRewardedVideo(t) {
			console.info("WY_视频显示");
			let e = St.getSoundData();
			/*this.playMusic(e);*/
			/*MiniGameAds.isRewardvideoReady() ? (*/
			this.puseMusic(), MiniGameAds.showRewardedVideo().then(() => {
				console.info("新接口播放激励广告: 成功"), t(), this.playMusic(e)
			}).catch(t => {
				console.error("新接口播放激励广告: 失败，原因:" + t.message), this.playMusic(e)
			})
			/*) : console.info("激励视频没有加载成功，无法播放")*/
		}
		static puseMusic() {
			console.info("暂停音乐"), St.setSoundData(!1), 1 == kt.gameScene ? kt.BGM_Pause1() : n.playBGM(bt.BGM)
		}
		static playMusic(t) {
			console.info("重播音乐 " + kt.gameScene), St.setSoundData(t), 1 == kt.gameScene ? St.getSoundData() && kt.BGM_Play1() : n.playBGM(bt.BGM)
		}
		static showBanner() {
			/*MiniGameAds.isBannerReady() ? MiniGameAds.showBanner().then(() => {
				console.info("新接口播放横幅广告: 成功")
			}).catch(t => {
				console.error("新接口播放横幅广告: 失败，原因:" + t.message)
			}) : console.info("横幅广告没有加载成功，无法播放")*/
			console.log("ko co banner nhe")
		}
		static hideBanner() {
			MiniGameAds.hideBanner().then(() => {
				console.info("新接口隐藏激励广告: 成功")
			}).catch(t => {
				console.error("新接口隐藏激励广告: 失败，原因:" + t.message)
			})
		}
		static showInterstitial() {
			/*let t = St.getSoundData();
			MiniGameAds.isInterstitialReady() ? (this.puseMusic(), MiniGameAds.showInterstitial().then(() => {
				this.playMusic(t), console.info("新接口播放插屏广告: 成功")
			}).catch(e => {
				this.playMusic(t), console.error("新接口播放插屏广告: 失败，原因:" + e.message)
			})) : console.info("插屏广告没有加载成功，无法播放")*/
			console.log("ko co inter dau ma doi show")
		}
	}
	const Bt = 150;
	class kt {
		static init() {
			this.loadOver = !1, console.log("微游戏版本 ver 2.2.1")
		}
		static login() {
			Laya.Browser.window.tt && tt.login && tt.login({
				success: t => {
					console.log("登录成功", t), tt.getUserInfo({
						success: t => {
							console.log("获取用户信息成功", t)
						},
						fail: t => {
							console.log("获取用户信息失败", t)
						}
					})
				},
				fail: t => {
					console.log("登录失败", t)
				}
			})
		}
		static loadFont(t) {
			if (Laya.Browser.window.tt && tt.loadFont) {
				var e = tt.loadFont(t);
				console.log("自定义字体", e)
			}
		}
		static showShareMenu(t, e) {
			Laya.Browser.window.tt && tt.showShareMenu && tt.showShareMenu({
				withShareTicket: t,
				success: () => {
					tt.onShareAppMessage(() => ({
						title: "",
						imageUrl: "",
						query: ""
					}))
				}
			})
		}
		static shareAppMessage(t, e, i, s = "", a = null, n = null, o = null, r = null) {
			Laya.Browser.window.tt && tt.shareAppMessage && ("" == t ? tt.shareAppMessage({
				title: e,
				imageUrl: i,
				query: s,
				success: () => {
					n && n()
				},
				fail: () => {
					r && r()
				}
			}) : tt.shareAppMessage({
				channel: t,
				title: e,
				imageUrl: i,
				query: s,
				extra: a,
				success: t => {
					console.log("录屏发布成功", t), St.updateTaskData(1), n && n()
				},
				fail: e => {
					if (console.log(e), "video" == t) {
						-1 == e.errMsg.split(":")[1].search("cancel") && tt.getSystemInfoSync().appName, r && r()
					}
				}
			}))
		}
		static vibrate(t = !0) {
			if (Laya.Browser.window.tt) {
				if (!St.getVibrateData()) return;
				t ? tt.vibrateShort && tt.vibrateShort() : tt.vibrateLong && tt.vibrateLong()
			}
		}
		static showToast(t, e = "none", i = 2e3) {
			console.log("弹出提示: ", t), console.log(" 游戏提示 " + lt.instance), lt.instance && lt.instance.showTips(t), f.instance && f.instance.showTips(t)
		}
		static showModal(t, e, i, s, a) {
			Laya.Browser.window.tt && tt.showModal && tt.showModal({
				title: t,
				content: e,
				showCancel: i,
				success: t => {
					t.confirm && s(), t.cancel && a()
				}
			})
		}
		static getGameRecorder() {
			Laya.Browser.window.tt && tt.getGameRecorderManager && (null == this.gameRecorder && (this.gameRecorder = tt.getGameRecorderManager()), console.log("获取录屏管理器", this.gameRecorder), this.gameRecorder.onStart(t => {
				console.log("开始录屏", t), this.startLuPingTime = Laya.Browser.now()
			}), this.gameRecorder.onPause(() => {
				console.log("暂停录屏")
			}), this.gameRecorder.onResume(() => {
				console.log("继续录屏")
			}), this.gameRecorder.onStop(t => {
				console.log("录制结束", t), this.endLuPingTime = Laya.Browser.now(), this.videoPath = t.videoPath;
				var e = this.recordClips.length;
				this.recordClips.length <= 1 ? (console.log("普通剪辑"), this.gameRecorder.clipVideo({
					path: this.videoPath,
					timeRange: [Bt, 0],
					success: () => {
						console.log("录屏路径", this.videoPath);
						for (let t = 0; t < e; t++) this.recordClips.pop()
					},
					fail: t => {
						console.log("失败", t);
						for (let t = 0; t < e; t++) this.recordClips.pop()
					}
				})) : (console.log("精彩时刻剪辑"), this.gameRecorder.clipVideo({
					path: this.videoPath,
					clipRange: this.recordClips,
					success: () => {
						console.log("录屏路径", this.videoPath);
						for (let t = 0; t < e; t++) this.recordClips.pop()
					},
					fail: t => {
						console.log("失败", t);
						for (let t = 0; t < e; t++) this.recordClips.pop()
					}
				}))
			}))
		}
		static GameRecorder_Start() {
			this.gameRecorder && (console.log("**开始录屏**"), this.gameRecorder.start({
				duration: Bt
			}))
		}
		static GameRecorder_Pause() {
			this.gameRecorder && this.gameRecorder.pause && (this.gameRecorder.pause(), console.log("**暂停录屏**"))
		}
		static GameRecorder_Resume() {
			this.gameRecorder && this.gameRecorder.resume && (this.gameRecorder.resume(), console.log("**继续录屏**"))
		}
		static GameRecorder_Stop() {
			this.gameRecorder && (console.log("**停止录屏**"), this.gameRecorder.stop())
		}
		static GameRecorder_Record(t, e) {
			this.gameRecorder && this.gameRecorder.recordClip && this.gameRecorder.recordClip({
				timeRange: [t, e],
				success: t => {
					console.log("记录精彩的视频片段：", t), t && t.index && this.recordClips.unshift(t.index)
				},
				fail: t => {
					console.log("记录精彩的视频片段失败：", t)
				}
			})
		}
		static GameRecorder_Release(t = null, e = null, i = null) {
			if (console.log("this.gameRocorder: ", this.gameRecorder), this.gameRecorder) {
				if (console.log("剪辑视频片段", this.videoPath), this.endLuPingTime - this.startLuPingTime <= 3e3) return void (e && e());
				this.shareAppMessage("video", "", "", "", {
					videoPath: this.videoPath,
					videoTopics: ["堆栈球"],
					hashtag_list: ["堆栈球"]
				}, t, e, i)
			} else t && t()
		}
		static playSound(t) {
			if (St.getSoundData())
				if (Laya.Browser.window.tt) {
					if (tt.createInnerAudioContext) switch (this.audioIndex) {
						case 0:
							null == this.audioContext1 && (this.audioContext1 = tt.createInnerAudioContext()), this.audioContext1.src = t, this.audioContext1.play();
							break;
						case 1:
							null == this.audioContext2 && (this.audioContext2 = tt.createInnerAudioContext()), this.audioContext2.src = t, this.audioContext2.play();
							break;
						case 2:
							null == this.audioContext3 && (this.audioContext3 = tt.createInnerAudioContext()), this.audioContext3.src = t, this.audioContext3.play()
					}
				} else Laya.SoundManager.playSound(t)
		}
		static playBGM(t, e = !0, i = !0) {
			St.getSoundData() && (Laya.Browser.window.tt ? tt.createInnerAudioContext && (null == this.audioBGM && (this.audioBGM = tt.createInnerAudioContext()), this.audioBGM.src = t, this.audioBGM.loop = e, this.audioBGM.autoplay = i, this.audioBGM.play()) : Laya.SoundManager.playSound(t, 0))
		}
		static BGM_Play() {
			St.getSoundData() ? Laya.Browser.window.tt ? this.audioBGM && this.audioBGM.play() : Laya.SoundManager.playSound(St.pass, 0) : this.BGM_Stop()
		}
		static BGM_Pause() {
			Laya.Browser.window.tt ? this.audioBGM && this.audioBGM.pause() : Laya.SoundManager.stopSound(St.pass)
		}
		static BGM_Stop() {
			Laya.Browser.window.tt ? this.audioBGM && this.audioBGM.stop() : Laya.SoundManager.stopSound(St.pass)
		}
		static playBGM1(t, e = !0, i = !0) {
			console.log("背景音乐 " + t), St.getSoundData() && (Laya.Browser.window.tt ? tt.createInnerAudioContext && (null == this.audioBGM1 && (this.audioBGM1 = tt.createInnerAudioContext()), this.audioBGM1.src = t, this.audioBGM1.loop = e, this.audioBGM1.autoplay = i, this.audioBGM1.play()) : Laya.SoundManager.playMusic(t))
		}
		static BGM_Pause1() {
			Laya.Browser.window.tt ? this.audioBGM1 && this.audioBGM1.pause() : Laya.SoundManager.stopMusic()
		}
		static BGM_Play1() {
			Laya.Browser.window.tt ? this.audioBGM1 && this.audioBGM1.play() : (console.log("播发音效  1"), Laya.SoundManager.playMusic(St.BGM))
		}
		static onShow() {
			Laya.Browser.window.tt && tt.onShow && tt.onShow(() => {
				console.log(" 监听小游戏回到前台的事件")
			})
		}
		static onHide() {
			Laya.Browser.window.tt && tt.onHide && tt.onHide(() => {
				console.log(" 监听小游戏隐藏到后台事件")
			})
		}
		static createBanner(t) {
			/*Laya.Browser.window.tt && Laya.timer.once(300, this, () => {
				if (tt.createBannerAd) {
					let e = tt.getSystemInfoSync().windowWidth,
						i = tt.getSystemInfoSync().windowHeight;
					if (null != this.bannerAd) return this.bannerAd.destroy && this.bannerAd.destroy(), this.bannerAd = null, void this.createBanner(t);
					this.bannerAd = tt.createBannerAd({
						adUnitId: t,
						style: {
							width: 200,
							top: i - 112.5
						}
					}), this.bannerAd.style.left = (e - 200) / 2, this.bannerAd.onError(t => {
						console.log("banner 加载失败", t)
					}), this.bannerAd.onResize(t => {
						console.log("调整banner广告尺寸", t), this.bannerAd.style.left = (e - t.width) / 2, this.bannerAd.style.top = i / e > 2.1 ? i - t.height - 15 : i - t.height
					})
				}
			})*/
			console.log("ko can createBanner")
		}
		static clearBanner() {
			/*this.bannerAd && (this.bannerAd.destroy && this.bannerAd.destroy(), this.bannerAd = null)*/
			console.log("clearBanner")
		}
		static showBanner() {
			/*this.isWYGame && pt.showBanner(), this.isWuguanggao || (this.bannerAd && this.bannerAd.show ? this.bannerAd.show().then(() => {
				console.log("广告显示成功")
			}).catch(t => {
				console.log("广告组件出现问题", t)
			}) : (this.bannerAd && this.bannerAd.destroy && this.bannerAd.destroy(), this.bannerAd = null, this.createBanner(this.bannerId)))*/
			console.log("ko co banner")
		}
		static hideBanner() {
			/*this.isWYGame && pt.hideBanner(), this.isWuguanggao || this.bannerAd && this.bannerAd.hide && this.bannerAd.hide()*/
			console.log("hideBanner")
		}
		static createRewardAd(t = !1) {
			this.isWuguanggao || Laya.Browser.window.tt && tt.createRewardedVideoAd && (null == this.rewardAd ? (this.rewardAd = tt.createRewardedVideoAd({
				adUnitId: "fhj7m6ppclfgb08h0a"
			}), this.rewardAd.onLoad(() => {
				console.log("拉取视频成功"), this.isHasVideoAd = !0
			}), this.rewardAd.onError(t => {
				console.log("拉取视频失败", t), this.showToast("当前暂无广告，请稍后再试。", "none", 2e3)
			}), this.rewardAd.onClose(t => {
				this.rewardAd_CallBack(t)
			}), this.rewardAd.load(), t && this.rewardAd.show().catch(() => {
				this.showToast("当前暂无广告", "none", 2e3)
			})) : this.rewardAd.load().then(() => {
				console.log("手动拉取视频")
			}))
			console.log("ko can create reward")
		}
		static rewardAd_CallBack(t) {
			this.callBack_Success && this.callBack_Success(), this.isHasVideoAd = !1, St.updateTaskData(4)
			/*console.log("用户点击了【关闭广告】按钮"), t && t.isEnded || void 0 === t ? (this.callBack_Success && this.callBack_Success(), this.isHasVideoAd = !1, St.updateTaskData(4)) : (console.log("未看完广告"), this.isHasVideoAd = !1, this.callBack_Fail && this.callBack_Fail())*/
		}
		static showVideoAd(t, i, s = !1) {
			if (this.isWuguanggao) this.isWYGame ? pt.showRewardedVideo(t) : t();
			else {
				if ("none" == e.instance.networkType) return Laya.Browser.window.tt && this.showToast("当前无网络"), void (s && i());
				this.callBack_Success = t, this.callBack_Fail = i, this.rewardAd ? this.rewardAd.show() : this.createRewardAd(), this.rewardAd && this.rewardAd.show ? (console.log("分支2"), this.rewardAd.load().then(() => {
					console.log("手动加载成功"), this.rewardAd.show()
				}), this.callBack_Success = t, this.callBack_Fail = i) : (console.log("分支3"), this.showToast("当前暂无广告，请稍后再试", "none", 2e3), this.createRewardAd(), s && i())
			}
		}
		static showVideoAd_test(t, e, i = !1, s = null, a = 0) {
			this.isWuguanggao ? t() : Laya.Browser.window.tt ? this.showVideoAd(t, e, i) : !0 === s ? (console.log("模拟拉取广告并看完"), 0 == a ? t() : (console.log((a / 1e3).toString() + "秒后自动跳转……"), Laya.timer.once(a, this, t))) : !1 === s && (console.log("模拟拉取广告并不看完"), 0 == a ? e() : (console.log((a / 1e3).toString() + "秒后自动跳转……"), Laya.timer.once(a, this, e)))
		}
		static createInterstitialAd() {
			/*Laya.Browser.window.tt && "Toutiao" === Laya.Browser.window.tt.getSystemInfoSync().appName && Laya.Browser.window.tt.createInterstitialAd && (console.log("&&&&%%%%"), null == this.interstitialAd && (this.interstitialAd = Laya.Browser.window.tt.createInterstitialAd({
				adUnitId: "10jdf4baaek5h9eid6"
			}), this.interstitialAd.onLoad(() => {
				console.log("插屏广告加载成功")
			}), this.interstitialAd.onError(t => {
				console.log("插屏广告加载失败", t)
			}), this.interstitialAd.onClose(t => {
				console.log("插屏广告关闭", t), this.interstitialAd && this.interstitialAd.destroy && this.interstitialAd.destroy(), this.interstitialAd = null
			})), this.interstitialAd && this.interstitialAd.show && this.interstitialAd.show())*/
		}
		static showInterstitialAd() {
			/*this.isWYGame && pt.showInterstitial(), this.isWuguanggao || this.createInterstitialAd()*/
		}
		static getSystemInfo() {
			return Laya.Browser.window.tt && tt.getSystemInfoSync ? (this.systemInfo = tt.getSystemInfoSync(), this.systemInfo) : {
				model: ""
			}
		}
		static setCurrFPS(t) {
			Laya.Browser.window.tt && tt.setPreferredFramesPerSecond && (tt.setPreferredFramesPerSecond(t), console.log("设置帧率****"))
		}
		static reportAnalytics(t) {
			Laya.Browser.window.tt && Laya.Browser.window.tt.reportAnalytics && Laya.Browser.window.tt.reportAnalytics(t, {})
		}
	}
	kt.isWYGame = !0, kt.gameScene = 1, kt.audioContext1 = null, kt.audioContext2 = null, kt.audioContext3 = null, kt.audioIndex = 0, kt.audioBGM = null, kt.bannerAd = null, kt.bannerId = "1fjl833c78e5hdej2d", kt.rewardAd = null, kt.isHasVideoAd = !0, kt.isOnClose = !1, kt.interstitialAd = null, kt.systemInfo = null, kt.isWuguanggao = !0, kt.gameRecorder = null, kt.videoPath = "", kt.recordClips = [], kt.startLuPingTime = 0, kt.endLuPingTime = 0, kt.shareWords = ["快跑，黑洞过来了！", "嗯，我看上了这栋楼！", "我全都要吞下去，别挡我！", "小孩子才做选择，我全都要！", "强者的相遇，必然是惊天动地的！"], kt.loadOver = !1, kt.audioBGM1 = null, kt.callBack_Success = null, kt.callBack_Fail = null;
	class Ct extends Laya.Script {
		constructor() {
			super(), this.skinData = null, this.currSelectIndex = 0, this.isSelect = !1, this.skinItem_UI = "", this.isTryUseSkin = !1, this.shadowScale = 1, this.shadowY = 45, this.skinSSign = !1, this.skinTime = !1, this.tempSkinArrs = [], Ct.instance = this
		}
		onAwake() {
			this.storeUI = this.owner, this.uiBox = this.storeUI.getChildAt(0), this.storeBg = this.uiBox.getChildAt(0), this.closeBtn = this.storeBg.getChildByName("closeBtn"), this.skinLisk = this.storeBg.getChildByName("skinList"), this.buyBtn = this.storeBg.getChildByName("buyBtn"), this.useBtn = this.storeBg.getChildByName("useBtn"), this.otherBtn = this.storeBg.getChildByName("otherBtn"), this.speSkinHint = this.storeBg.getChildByName("speSkinHint"), this.speSkinTxt = this.speSkinHint.getChildAt(0), this.coinLabel = this.buyBtn.getChildByName("coinLabel"), this.showCoinImg = this.uiBox.getChildByName("coinShowImg"), this.showCoinTxt = this.showCoinImg.getChildAt(0), this.addCoinBtn = this.showCoinImg.getChildByName("addCoinBtn"), this.getCoin_Test = this.storeBg.getChildByName("getCoin_Test")
		}
		onEnable() {
			this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtnClick), this.buyBtn.on(Laya.Event.CLICK, this, this.buyBtnClick), this.useBtn.on(Laya.Event.CLICK, this, this.useBtnClick), this.otherBtn.on(Laya.Event.CLICK, this, this.otherBtnClick), this.addCoinBtn.on(Laya.Event.CLICK, this, this.addCoinBtnClick), this.getCoin_Test.visible = !1, this.getCoin_Test.on(Laya.Event.CLICK, this, this.getCoin_TestClick), A.instance.AdaptiveScreen(this.uiBox), this.initStore()
		}
		onStart() {
			ct.instance.rewardSkinIndex = St.getRewardSkinIndex(), -1 == ct.instance.rewardSkinIndex && (ct.instance.rewardSkinIndex = this.getCoinLvSkin())
		}
		getCoin_TestClick() {
			var t = St.getCoinNum();
			t += 1e3, St.setCoinNum(t)
		}
		initStore() {
			this.skinLisk.vScrollBarSkin = "", this.skinLisk.selectEnable = !0, this.skinData = St.getSkinData(), this.currSelectIndex = this.skinData.currUseIndex, ct.instance.changeBallSkin(this.currSelectIndex), this.checkCurrData_SpeDay(), this.checkCurrData_SpeLv(), this.checkTimeSkin(), this.setStoreData(this.skinData), this.setBtnState(this.currSelectIndex)
		}
		setStoreData(t) {
			this.checkTimeSkin();
			var e = [];
			for (let i = 0; i < t.skinData.length; i++) 8 != i && (i == this.currSelectIndex ? this.isSelect = !0 : this.isSelect = !1, t.skinData[i].isOwn || t.skinData[i].isTime ? this.skinItem_UI = "UI/storeUI/kuang_has.png" : this.skinItem_UI = "UI/storeUI/kuang_No.png", 5 == t.skinData[i].speType ? this.skinSSign = !0 : this.skinSSign = !1, "4" == t.skinData[i].state && this.isTryUseSkin ? this.skinItem_UI = "UI/storeUI/kaung_try.png" : "4" == t.skinData[i].state && (t.skinData[i].state = "2"), t.skinData[i].isTime ? (this.skinSSign = !1, this.skinTime = !0) : this.skinTime = !1, 14 == i || 15 == i || 16 == i ? (this.shadowScale = .5, this.shadowY = 55) : (this.shadowScale = 1, this.shadowY = 45), e.push({
				selectItem: {
					visible: this.isSelect
				},
				skinItem: this.skinItem_UI,
				skinImg: t.skinData[i].skinUrl,
				ballShadow: {
					scaleX: this.shadowScale,
					scaleY: this.shadowScale,
					centerY: this.shadowY
				},
				skinSSign: {
					visible: this.skinSSign
				},
				skinTime: {
					visible: this.skinTime
				}
			}));
			this.skinLisk.dataSource = e, this.skinLisk.refresh()
		}
		setBtnState(t) {
			if (!(t >= this.skinData.skinData.length || null == t) && (this.speSkinHint.centerX = -146, this.otherBtn.visible = !0, this.currSelectIndex = t, this.buyBtn.visible = !this.skinData.skinData[this.currSelectIndex].isOwn, this.useBtn.visible = this.skinData.skinData[this.currSelectIndex].isOwn, this.skinData.skinData[this.currSelectIndex].isOwn || this.skinData.skinData[this.currSelectIndex].isTime ? (this.buyBtn.visible = !1, this.useBtn.visible = !0, this.speSkinHint.visible = !1) : this.skinData.skinData[this.currSelectIndex].isSpecial ? (this.buyBtn.visible = !1, this.useBtn.visible = !1, this.speSkinHint.visible = !0) : (this.buyBtn.visible = !0, this.useBtn.visible = !1, this.speSkinHint.visible = !1), "4" == this.skinData.skinData[this.currSelectIndex].state && (this.buyBtn.visible = !1, this.useBtn.visible = !0, this.speSkinHint.visible = !1), this.buyBtn.visible ? (this.coinLabel.text = this.skinData.skinData[this.currSelectIndex].coin, this.otherBtn.skin = "UI/storeUI/ad_store.png", this.otherBtn.visible = !0, this.isTryUseSkin && (this.otherBtn.skin = "UI/storeUI/ad_store.png", this.otherBtn.visible = !1)) : (this.speSkinHint.visible && kt.isHasVideoAd ? (this.otherBtn.skin = "UI/storeUI/ad_store.png", this.otherBtn.visible = !0) : (this.otherBtn.skin = "UI/storeUI/ad_store.png", this.otherBtn.visible = !1), "2" == this.skinData.skinData[this.currSelectIndex].state ? this.useBtn.skin = "UI/storeUI/use_store.png" : "3" != this.skinData.skinData[this.currSelectIndex].state || this.isTryUseSkin ? "4" == this.skinData.skinData[this.currSelectIndex].state ? this.useBtn.skin = "UI/storeUI/tryBtn_store.png" : this.useBtn.skin = "UI/storeUI/use_store.png" : this.useBtn.skin = "UI/storeUI/using_Store.png", "UI/storeUI/ad_store.png" == this.otherBtn.skin ? this.useBtn.centerX = 0 : this.useBtn.centerX = -146), this.speSkinHint.visible)) {
				this.speSkinTxt.fontSize = 30;
				var e = St.specialType_Profab.specTypes[this.skinData.skinData[this.currSelectIndex].speType];
				switch (e.type) {
					case "lv":
						-1 != e.condition ? this.speSkinTxt.text = "Level: " + String(this.skinData.skinData[this.currSelectIndex].speCount) + "/" + String(e.condition) : this.speSkinTxt.text = "敬请期待";
						break;
					case "day":
						-1 != e.condition ? this.speSkinTxt.text = "Login: " + String(this.skinData.skinData[this.currSelectIndex].speCount) + "/7" : this.speSkinTxt.text = "敬请期待";
						break;
					case "relife":
						-1 != e.condition ? this.speSkinTxt.text = "Revive: " + String(this.skinData.skinData[this.currSelectIndex].speCount) + "/10" : this.speSkinTxt.text = "敬请期待";
						break;
					case "coinLv":
						-1 != e.condition ? (this.speSkinTxt.text = String(this.skinData.skinData[this.currSelectIndex].speCount) + "/10", this.speSkinTxt.fontSize = 50) : (this.speSkinTxt.text = "敬请期待", this.speSkinHint.centerX = 0, this.otherBtn.visible = !1);
						break;
					case "limit":
						-1 != e.condition ? this.speSkinTxt.text = "Limited Skin" : this.speSkinTxt.text = "敬请期待"
				}
			}
		}
		showStoreUI(t) {
			this.storeUI.visible = t, t && (this.currSelectIndex = this.skinData.currUseIndex, this.setStoreData(this.skinData), this.setBtnState(this.currSelectIndex), this.updateCoinInfo(St.getCoinNum()), kt.showBanner(), kt.showInterstitialAd())
		}
		closeBtnClick() {
			this.showStoreUI(!1)
		}
		buyBtnClick() {
			var t = St.getCoinNum();
			t >= Number(this.coinLabel.text) ? (t -= Number(this.coinLabel.text), St.setCoinNum(t), this.skinData.skinData[this.currSelectIndex].isOwn = !0, this.skinData.skinData[this.currSelectIndex].state = "2", St.setSkinData(this.skinData), this.setStoreData(this.skinData), this.setBtnState(this.currSelectIndex), kt.showToast("Congrats on getting the skin", "none", 1500)) : kt.showToast("Gold coins inadequate！", "none", 1500)
		}
		useBtnClick() {
			"UI/storeUI/use_store.png" == this.useBtn.skin ? (this.useBtn.skin = "UI/storeUI/using_Store.png", this.skinData.skinData[this.skinData.currUseIndex].state = "2", this.skinData.currUseIndex = this.currSelectIndex, this.skinData.skinData[this.currSelectIndex].state = "3", St.setSkinData(this.skinData), this.isTryUseSkin = !1, Ct.instance.setStoreData(this.skinData), ct.instance.changeBallSkin(this.currSelectIndex)) : console.log("正在使用中")
		}
		otherBtnClick() {
			"UI/storeUI/ad_store.png" == this.otherBtn.skin ? (S.setButtonEvents("storeui", "storeui_tryskin_video_start", 1, St.getCurrLvInfo(), ""), 
			S.setSkinEvents("tryskin-" + Ct.instance.currSelectIndex), S.setButtonEvents("storeui", "storeui_tryskin-" + Ct.instance.currSelectIndex + "_video_success", 5, St.getCurrLvInfo(), ""), ct.instance.changeBallSkin(Ct.instance.currSelectIndex), kt.showToast("Skin Trial Successful", "none", 1500), Ct.instance.otherBtn.skin = "UI/storeUI/ad_store.png", Ct.instance.isTryUseSkin = !0, Ct.instance.skinData.skinData[Ct.instance.currSelectIndex].state = "4", Ct.instance.setStoreData(Ct.instance.skinData), Ct.instance.setBtnState(Ct.instance.currSelectIndex)
				/*kt.showVideoAd(() => {
				S.setSkinEvents("tryskin-" + Ct.instance.currSelectIndex), S.setButtonEvents("storeui", "storeui_tryskin-" + Ct.instance.currSelectIndex + "_video_success", 5, St.getCurrLvInfo(), ""), ct.instance.changeBallSkin(Ct.instance.currSelectIndex), kt.showToast("Skin Trial Successful", "none", 1500), Ct.instance.otherBtn.skin = "UI/storeUI/ad_store.png", Ct.instance.isTryUseSkin = !0, Ct.instance.skinData.skinData[Ct.instance.currSelectIndex].state = "4", Ct.instance.setStoreData(Ct.instance.skinData), Ct.instance.setBtnState(Ct.instance.currSelectIndex)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/) : kt.shareAppMessage("", "超爽的关卡体验，全场最佳就是你！", "subPckage/res/shareImg1.jpg")
		}
		addCoinBtnClick() {
			S.setButtonEvents("storeui", "storeui_getcoin_video_start", 1, St.getCurrLvInfo(), ""),
			S.setButtonEvents("storeui", "storeui_getcoin_video_success", 5, St.getCurrLvInfo(), ""), this.getCoin(200)
				/*kt.showVideoAd(() => {
				S.setButtonEvents("storeui", "storeui_getcoin_video_success", 5, St.getCurrLvInfo(), ""), this.getCoin(200)
			}, () => {
				kt.showToast("Get rewarded after watching the video")
			})*/
		}
		getCoin(t) {
			var e = St.getCoinNum();
			e += t, St.setCoinNum(e), kt.showToast("Get coins:" + String(t), "none", 2e3)
		}
		updateCoinInfo(t) {
			this.showCoinTxt.text = String(t)
		}
		checkCurrData_SpeLv() {
			for (let t = 0; t < this.skinData.skinData.length; t++)
				if (this.skinData.skinData[t].isSpecial && "lv" == St.specialType_Profab.specTypes[this.skinData.skinData[t].speType].type) {
					if (this.skinData.skinData[t].isOwn) continue;
					this.skinData.skinData[t].speCount = St.getCurrLvInfo() - 1, this.skinData.skinData[t].speCount >= St.specialType_Profab.specTypes[this.skinData.skinData[t].speType].condition && (this.skinData.skinData[t].isOwn = !0, kt.showToast("Congrats on the new skin! Try it now", "none", 2e3)), St.setSkinData(this.skinData)
				}
		}
		checkCurrData_SpeDay() {
			var t = Laya.LocalStorage.getItem("GETSKINDAY");
			if ("" == t || null == t || null == t) {
				t = D.AnalysisTimeStamp(), Laya.LocalStorage.setItem("GETSKINDAY", t);
				for (let t = 0; t < this.skinData.skinData.length; t++)
					if (this.skinData.skinData[t].isSpecial && "day" == St.specialType_Profab.specTypes[this.skinData.skinData[t].speType].type) {
						if (this.skinData.skinData[t].isOwn) continue;
						this.skinData.skinData[t].speCount += 1, this.skinData.skinData[t].speCount >= St.specialType_Profab.specTypes[this.skinData.skinData[t].speType].condition && (this.skinData.skinData[t].isOwn = !0, kt.showToast("Congrats on the new skin! Try it now", "none", 2e3)), St.setSkinData(this.skinData)
					}
			} else if (t != D.AnalysisTimeStamp()) {
				Laya.LocalStorage.setItem("GETSKINDAY", D.AnalysisTimeStamp());
				for (let t = 0; t < this.skinData.skinData.length; t++)
					if (this.skinData.skinData[t].isSpecial && "day" == St.specialType_Profab.specTypes[this.skinData.skinData[t].speType].type) {
						if (this.skinData.skinData[t].isOwn) continue;
						this.skinData.skinData[t].speCount += 1, this.skinData.skinData[t].speCount >= St.specialType_Profab.specTypes[this.skinData.skinData[t].speType].condition && (this.skinData.skinData[t].isOwn = !0, kt.showToast("Congrats on the new skin! Try it now", "none", 2e3)), St.setSkinData(this.skinData)
					}
			}
		}
		checkCurrData_SpeRelife() {
			for (let t = 0; t < this.skinData.skinData.length; t++)
				if (this.skinData.skinData[t].isSpecial && "relife" == St.specialType_Profab.specTypes[this.skinData.skinData[t].speType].type) {
					if (this.skinData.skinData[t].isOwn) continue;
					this.skinData.skinData[t].speCount += 1, !this.skinData.skinData[t].isOwn && this.skinData.skinData[t].speCount >= St.specialType_Profab.specTypes[this.skinData.skinData[t].speType].condition && (this.skinData.skinData[t].isOwn = !0, kt.showToast("Congrats on the new skin! Try it now", "none", 2e3)), St.setSkinData(this.skinData)
				}
		}
		getCoinLvSkin() {
			for (let t = 0; t < this.skinData.skinData.length; t++) this.skinData.skinData[t].isSpecial && !this.skinData.skinData[t].isOwn && this.tempSkinArrs.push(t);
			var t = -1;
			return this.tempSkinArrs.length > 0 && (t = this.tempSkinArrs[Math.floor(Math.random() * this.tempSkinArrs.length)]), this.tempSkinArrs.length = 0, console.log("当前获取的皮肤编号：", t), t
		}
		getNewSkinS(t, e) {
			this.skinData.skinData[t] && (this.skinData.skinData[t].speCount += e, this.skinData.skinData[t].speCount >= 10 && (this.skinData.skinData[t].isOwn = !0, console.log("碎片集满 获得皮肤：" + t + "号"), kt.showToast("Congrats on the new skin! Try it now", "none", 2e3), ct.instance.rewardSkinIndex = Ct.instance.getCoinLvSkin(), St.setRewardSkinIndex(ct.instance.rewardSkinIndex)), St.setSkinData(this.skinData))
		}
		getNewSkin(t) {
			this.skinData.skinData[t] && (this.skinData.skinData[t].isOwn = !0, console.log("获得皮肤：" + t + "号"), kt.showToast("Congrats on the new skin! Try it now", "none", 2e3), St.setSkinData(this.skinData))
		}
		checkTimeSkin() {
			for (let t = 0; t < this.skinData.skinData.length; t++) this.skinData.skinData[t].isTime && ((Laya.Browser.now() - Number(Laya.LocalStorage.getItem("TRYSKIN_" + String(t)))) / 1e3 < 86400 ? (console.log("限时皮肤未到期", Laya.Browser.now() - Number(Laya.LocalStorage.getItem("TRYSKIN_" + String(t)))), Laya.timer.once(864e5 - (Laya.Browser.now() - Number(Laya.LocalStorage.getItem("TRYSKIN_" + String(t)))), this, () => {
				this.checkTimeSkin()
			})) : (console.log("限时皮肤到期"), this.skinData.skinData[t].state = "1", this.skinData.skinData[t].isTime = !1, this.skinData.currUseIndex == t ? (this.skinData.currUseIndex = 0, this.skinData.skinData[0].state = "3", ct.instance.changeBallSkin(this.skinData.currUseIndex)) : ct.instance.changeBallSkin(this.skinData.currUseIndex), St.setSkinData(this.skinData), this.setStoreData(this.skinData), this.setBtnState(this.currSelectIndex)))
		}
	}
	Ct.instance = null;
	class St {
		constructor() { }
		static loadJsonFile_Profab() {
			Laya.loader.load(["jsonFile/SkinData.json", "jsonFile/specialType.json", "jsonFile/taskData.json"], Laya.Handler.create(this, () => {
				this.skinData_Profab = Laya.loader.getRes("jsonFile/SkinData.json"), this.specialType_Profab = Laya.loader.getRes("jsonFile/specialType.json"), this.taskData_Profab = Laya.loader.getRes("jsonFile/taskData.json")
			}))
		}
		static startTick() {
			Laya.timer.loop(1e3, this, this.tickTime)
		}
		static tickTime() {
			this.getOffTime();
			for (let t = this.TickCallbacks.length - 1; t >= 0; t--) this.TickCallbacks[t].callback && this.TickCallbacks[t].callback()
		}
		static getOffTime() {
			let t = Math.round(Laya.Browser.now() / 1e3),
				e = Math.round(t - this.getLoginTime() / 1e3);
			this.getOffPower(e), this.setLoginTime(Laya.Browser.now())
		}
		static getOffPower(t) {
			console.log("dTime", t);
			let e = this.getPowerData(),
				i = this.getPowerTimeData(),
				s = this.getInfiniteData();
			s >= 0 && (s -= t) <= 0 && (s = -3), t >= i && (t -= i, e++, i = this.powerResumeTime), e += Math.floor(t / this.powerResumeTime), i -= t % this.powerResumeTime, e >= this.maxPower && (i = this.powerResumeTime, e = this.maxPower), this.setPowerTimeData(i), this.setInfiniteData(s), this.setPowerData(e)
		}
		static addPowerChangeCallback(t, e) {
			this.PowerChangeCallbacks.push({
				callback: t,
				key: e
			})
		}
		static removePowerChangeCallback(t) {
			for (let e = this.PowerChangeCallbacks.length - 1; e >= 0; e--) this.PowerChangeCallbacks[e].key == t && this.PowerChangeCallbacks.splice(e, 1)
		}
		static addTickCallbacks(t, e) {
			this.TickCallbacks.push({
				callback: t,
				key: e
			})
		}
		static removeTickCallbacks(t) {
			for (let e = this.TickCallbacks.length - 1; e >= 0; e--) this.TickCallbacks[e].key == t && this.TickCallbacks.splice(e, 1)
		}
		static addTaskCallbacks(t, e) {
			this.TaskCallbacks.push({
				callback: t,
				key: e
			})
		}
		static removeTaskCallbacks(t) {
			for (let e = this.TaskCallbacks.length - 1; e >= 0; e--) this.TaskCallbacks[e].key == t && this.TaskCallbacks.splice(e, 1)
		}
		static getLoginTime() {
			var t = Laya.LocalStorage.getItem("LoginTime");
			return "" != t && null != t && null != t || (t = JSON.stringify(Laya.Browser.now()), Laya.LocalStorage.setItem("LoginTime", t)), JSON.parse(t)
		}
		static setLoginTime(t) {
			Laya.LocalStorage.setItem("LoginTime", JSON.stringify(t))
		}
		static getSkinData() {
			var t = Laya.LocalStorage.getJSON("STACKBALL_SKINDATA");
			"" != t && null != t && null != t || (t = this.skinData_Profab, Laya.LocalStorage.setJSON("STACKBALL_SKINDATA", t));
			for (let e = 0; e < t.skinData.length; e++) 8 == e ? (this.skinData_Profab.skinData[e].isOwn = !0, this.skinData_Profab.skinData[e].state = t.skinData[e].state, this.skinData_Profab.skinData[e].speCount = t.skinData[e].speCount) : (this.skinData_Profab.skinData[e].isOwn = t.skinData[e].isOwn, this.skinData_Profab.skinData[e].state = t.skinData[e].state, this.skinData_Profab.skinData[e].speCount = t.skinData[e].speCount);
			return this.skinData_Profab.currUseIndex = t.currUseIndex, t = this.skinData_Profab
		}
		static setSkinData(t) {
			Laya.LocalStorage.setJSON("STACKBALL_SKINDATA", t)
		}
		static getCoinNum() {
			var t = Laya.LocalStorage.getItem("STACKBALL_COINNUM");
			return "" != t && null != t && null != t || (t = "1000", Laya.LocalStorage.setItem("STACKBALL_COINNUM", t)), Number(t)
		}
		static getSoundData() {
			var t = Laya.LocalStorage.getItem("SoundData");
			return null != t && null != t && "" != t || (t = JSON.stringify(!0), Laya.LocalStorage.setItem("SoundData", t)), JSON.parse(t)
		}
		static setSoundData(t) {
			Laya.LocalStorage.setItem("SoundData", JSON.stringify(t))
		}
		static getVibrateData() {
			var t = Laya.LocalStorage.getItem("VibrateData");
			return null != t && null != t && "" != t || (t = JSON.stringify(!0), Laya.LocalStorage.setItem("VibrateData", t)), JSON.parse(t)
		}
		static setVibrateData(t) {
			Laya.LocalStorage.setItem("VibrateData", JSON.stringify(t))
		}
		static setCoinNum(t) {
			t < 0 && (t = 0), console.log("更新金币：", t), Ct.instance.updateCoinInfo(t), G.instance.updateCoinInfo(t), $.instance.updateCoinInfo(t), Q.instance.updateCoinInfo(t), Laya.LocalStorage.setItem("STACKBALL_COINNUM", String(Math.floor(t)))
		}
		static getPowerData() {
			var t = Laya.LocalStorage.getItem("PowerData");
			return null != t && null != t && "" != t || (t = JSON.stringify(this.maxPower), Laya.LocalStorage.setItem("PowerData", t)), JSON.parse(t)
		}
		static setPowerData(t) {
			Laya.LocalStorage.setItem("PowerData", JSON.stringify(t));
			for (let t = this.PowerChangeCallbacks.length - 1; t >= 0; t--) this.PowerChangeCallbacks[t].callback && this.PowerChangeCallbacks[t].callback()
		}
		static getPowerTimeData() {
			var t = Laya.LocalStorage.getItem("PowerTimeData");
			return null != t && null != t && "" != t || (t = JSON.stringify(this.powerResumeTime), Laya.LocalStorage.setItem("PowerTimeData", t)), JSON.parse(t)
		}
		static setPowerTimeData(t) {
			Laya.LocalStorage.setItem("PowerTimeData", JSON.stringify(t))
		}
		static getInfiniteData() {
			var t = Laya.LocalStorage.getItem("InfiniteData");
			return null != t && null != t && "" != t || (t = JSON.stringify(-3), Laya.LocalStorage.setItem("InfiniteData", t)), JSON.parse(t)
		}
		static setInfiniteData(t) {
			Laya.LocalStorage.setItem("InfiniteData", JSON.stringify(t))
		}
		static getCurrLvInfo() {
			var t = Laya.LocalStorage.getItem("STACKBALL_CURRLV");
			return "" != t && null != t && null != t || (t = "1", Laya.LocalStorage.setItem("STACKBALL_CURRLV", t)), Number(t)
		}
		static setCurrLvInfo(t) {
			Laya.LocalStorage.setItem("STACKBALL_CURRLV", String(t))
		}
		static getGameCountInfo() {
			var t = Laya.LocalStorage.getItem("STACKBALL_GAMECOUNT");
			return "" != t && null != t && null != t || (t = "1", Laya.LocalStorage.setItem("STACKBALL_GAMECOUNT", t)), Number(t)
		}
		static setGameCountInfo(t) {
			Laya.LocalStorage.setItem("STACKBALL_GAMECOUNT", String(t))
		}
		static getBalanceLvInfo() {
			var t = Laya.LocalStorage.getItem("STACKBALL_BALANCELV");
			return "" != t && null != t && null != t || (t = "1", Laya.LocalStorage.setItem("STACKBALL_BALANCELV", t)), Number(t)
		}
		static setBalanceLvInfo(t) {
			Laya.LocalStorage.setItem("STACKBALL_BALANCELV", String(t))
		}
		static getCurrColorConfig() {
			var t = Laya.LocalStorage.getItem("STACKBALL_CURRCOLORCONFIG");
			return "" != t && null != t && null != t || (t = "0", Laya.LocalStorage.setItem("STACKBALL_CURRCOLORCONFIG", t)), Number(t)
		}
		static setCurrColorConfig(t) {
			Laya.LocalStorage.setItem("STACKBALL_CURRCOLORCONFIG", String(t))
		}
		static getShareWord() {
			var t = Math.random();
			return t < .25 ? 1 : t < .5 ? 2 : t < .75 ? 3 : 4
		}
		static getHighestScore() {
			var t = Laya.LocalStorage.getItem("STACKBALL_HIGHESTSCORE");
			return "" != t && null != t && null != t || (t = "0", Laya.LocalStorage.setItem("STACKBALL_HIGHESTSCORE", t)), Number(t)
		}
		static setHighestScore(t) {
			t >= this.getHighestScore() && Laya.LocalStorage.setItem("STACKBALL_HIGHESTSCORE", String(t))
		}
		static getRewardSkinIndex() {
			var t = Laya.LocalStorage.getItem("STACKBALL_REWARDSKININDEX");
			return "" != t && null != t && null != t || (t = "-1", Laya.LocalStorage.setItem("STACKBALL_REWARDSKININDEX", t)), Number(t)
		}
		static setRewardSkinIndex(t) {
			Laya.LocalStorage.setItem("STACKBALL_REWARDSKININDEX", String(t))
		}
		static getTaskDate() {
			return Laya.LocalStorage.getItem("TASKDATE_STACKBALL")
		}
		static setTaskDate() {
			Laya.LocalStorage.setItem("TASKDATE_STACKBALL", D.AnalysisTimeStamp())
		}
		static getTaskData() {
			var t = Laya.LocalStorage.getJSON("TASKDATA_STACKBALL");
			return null != t && null != t && "" != t || (t = St.taskData_Profab, Laya.LocalStorage.setJSON("TASKDATA_STACKBALL", t)), t
		}
		static setTaskData(t) {
			Laya.LocalStorage.setJSON("TASKDATA_STACKBALL", t)
		}
		static updateTaskData(t) {
			let e = this.getTaskData();
			0 == e.taskData[t].taskState && (e.taskData[t].taskCount += 1, e.taskData[t].taskCount >= e.taskData[t].maxTaskCount && (e.taskData[t].taskCount = e.taskData[t].maxTaskCount, e.taskData[t].taskState = 1)), St.setTaskData(e);
			for (let t = this.TaskCallbacks.length - 1; t >= 0; t--) this.TaskCallbacks[t].callback && this.TaskCallbacks[t].callback()
		}
		static timeToHour(t, e = !0) {
			let i = "",
				s = Math.floor(t / 3600);
			s < 10 ? e && (i += "0" + s + ":") : e && (i += s + ":");
			let a = Math.floor(t % 3600 / 60);
			i += a < 10 ? "0" + a + ":" : a + ":";
			let n = t % 60;
			return i += n < 10 ? "0" + n : n
		}
	}
	St.shareWords = ["超爽的关卡体验，全场最佳就是你！", "冲到底部，探索未知！", "等我蓄满力的时候，就没什么能阻挡我了！", "一起来玩好玩的堆栈球球吧！"], St.victory = "subPackage/res/Audio/victory.mp3", St.fail = "subPackage/res/Audio/fail.mp3", St.jump = "subPackage/res/Audio/jump2.mp3", St.pass = "subPackage/res/Audio/pass.mp3", St.button = "subPackage/res/Audio/button.mp3", St.BGM = "subPackage/res/Audio/BGM.mp3", St.coin = "subPackage/res/Audio/coin.mp3", St.skinData_Profab = null, St.specialType_Profab = null, St.taskData_Profab = null, St.maxPower = 6, St.powerResumeTime = 600, St.PowerChangeCallbacks = [], St.TickCallbacks = [], St.TaskCallbacks = [], St.taskRedPoint = !1;
	class yt extends Laya.Script {
		constructor() {
			super(), this.powerState = 0, this.myPowerNum = -1
		}
		onAwake() {
			this.myself = this.owner, this.addBtn = this.myself.getChildByName("addBtn"), this.powerNum = this.myself.getChildByName("powerNum"), this.time = this.myself.getChildByName("time"), this.addBtn.on(Laya.Event.CLICK, this, this.onAddBtnClick), this.setPowerData(), St.addPowerChangeCallback(this.setPowerData.bind(this), "powerData" + this.id)
		}
		setPowerData() {
			if (St.getInfiniteData() > 0) 1 != this.powerState && (this.powerState = 1, this.powerNum.text = "∞", this.time.visible = !1);
			else {
				let t = St.getPowerData();
				t != this.myPowerNum && (this.myPowerNum = t, this.powerNum.text = this.myPowerNum + "/" + St.maxPower), this.myPowerNum >= St.maxPower ? this.time.visible = !1 : (this.time.text = St.timeToHour(St.getPowerTimeData(), !1), this.time.visible = !0)
			}
		}
		onAddBtnClick() {
			if (St.getInfiniteData() > 0) return console.log("已处于无限体力当中"), void kt.showToast("Has unlimited HP", "none", 2e3);
			Laya.View.load("GameScenes/infinitePower.scene", Laya.Handler.create(this, t => {
				t.open(!1)
			})), this.onAddSuccess()/*kt.showVideoAd(this.onAddSuccess.bind(this), () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/
		}
		onAddSuccess() {
			St.setPowerData(St.maxPower), kt.showToast("Get HP Successful", "none", 2e3)
		}
		onStart() { }
	}
	class wt extends Laya.Button {
		constructor() {
			super()
		}
		onEnable() {
			this.currScale = this.scaleX, this.ToSmall()
		}
		ToBig() {
			Laya.Tween.to(this, {
				scaleX: this.currScale,
				scaleY: this.currScale
			}, 800, null, Laya.Handler.create(this, () => {
				this.ToSmall()
			}))
		}
		ToSmall() {
			Laya.Tween.to(this, {
				scaleX: this.currScale - .1,
				scaleY: this.currScale - .1
			}, 800, null, Laya.Handler.create(this, () => {
				this.ToBig()
			}))
		}
	}
	class It extends Laya.Script {
		constructor() {
			super()
		}
		onAwake() {
			this.skinItem = this.owner, this.selectItem = this.skinItem.getChildByName("selectItem"), this.skinBox = this.skinItem.getChildByName("skinItem"), this.skinImg = this.skinItem.getChildByName("skinImg")
		}
		onEnable() {
			this.skinImg.on(Laya.Event.CLICK, this, this.skinItemClick)
		}
		skinItemClick() {
			var t = Number(this.skinImg.skin.split(".")[0].substring(15)) - 1;
			Ct.instance.currSelectIndex != t && (Ct.instance.currSelectIndex = t, Ct.instance.setStoreData(Ct.instance.skinData), Ct.instance.setBtnState(t))
		}
	}
	class ft extends Laya.Script {
		constructor() {
			super(), this.skinIndex = 0, ft.instance = this
		}
		onAwake() {
			this.skinRewardUI = this.owner, this.uiBox = this.skinRewardUI.getChildAt(0), this.skinRewardBg = this.uiBox.getChildAt(0), this.closeBtn = this.skinRewardBg.getChildByName("closeBtn"), this.skinImg = this.skinRewardBg.getChildByName("skinImg"), this.getRewardBtn = this.skinRewardBg.getChildByName("getRewardBtn")
		}
		onStart() {
			this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtn_Click), this.getRewardBtn.on(Laya.Event.CLICK, this, this.getRewardBtn_Click)
		}
		showSkinRewardUI(t, e = -1) {
			this.skinRewardUI.visible = t, t && (this.skinIndex = e, this.skinImg.skin = "SkinUI/ballSkin" + String(this.skinIndex + 1) + ".png")
		}
		getRewardBtn_Click() {
			kt.showVideoAd_test(() => {
				Ct.instance.getNewSkin(this.skinIndex), this.showSkinRewardUI(!1)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			}, !1, !0, 0)
		}
		closeBtn_Click() {
			this.showSkinRewardUI(!1)
		}
	}
	ft.instance = null;
	class vt extends Laya.Script {
		constructor() {
			super(), this.taskIndex = 0
		}
		onAwake() {
			this.selfBtn = this.owner, this.taskItem = this.selfBtn.parent.getChildByName("taskItem")
		}
		onStart() {
			this.selfBtn.on(Laya.Event.CLICK, this, this.selfBtn_Click)
		}
		selfBtn_Click() {
			this.taskIndex = Number(this.taskItem.skin.split(".")[0].substring(14)) - 1, console.log(this.taskIndex, Number(this.taskItem.skin.split(".")[0].substring(14))), "UI/taskUI/get.png" == this.selfBtn.skin ? (Z.instance.getTaskReward(this.taskIndex), Z.instance.setTaskState(this.taskIndex, 2)) : "UI/taskUI/get_Ad.png" == this.selfBtn.skin && (S.setButtonEvents("renwuui", "renwuui_zailingqu_video_start", 1, St.getCurrLvInfo(), ""),
			S.setButtonEvents("renwuui", "renwuui_zailingqu-" + String(this.taskIndex + 1) + "_video_success", 5, St.getCurrLvInfo(), ""), Z.instance.getTaskReward(this.taskIndex), Z.instance.setTaskState(this.taskIndex, 3)
			/*kt.showVideoAd(() => {
				S.setButtonEvents("renwuui", "renwuui_zailingqu-" + String(this.taskIndex + 1) + "_video_success", 5, St.getCurrLvInfo(), ""), Z.instance.getTaskReward(this.taskIndex), Z.instance.setTaskState(this.taskIndex, 3)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/)
		}
	}
	class Tt extends Laya.Script {
		constructor() {
			super(), Tt.instance = this
		}
		onAwake() {
			this.highEnergyUI = this.owner, this.uiBox = this.highEnergyUI.getChildAt(0), this.checkBtn = this.uiBox.getChildByName("checkBtn"), this.check = this.checkBtn.getChildAt(0), this.shareBtn = this.uiBox.getChildByName("shareBtn"), this.closeBtn = this.uiBox.getChildByName("closeBtn")
		}
		onStart() {
			this.checkBtn.on(Laya.Event.CLICK, this, this.checkBtn_Click), this.shareBtn.on(Laya.Event.CLICK, this, this.shareBtn_Click), this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtn_Click)
		}
		showHighEnergyUI(t) {
			t ? (this.highEnergyUI.visible = !0, this.initUI()) : this.highEnergyUI.visible = !1
		}
		initUI() {
			this.check.visible = !0, this.closeBtn.visible = !1
		}
		checkBtn_Click() {
			this.check.visible ? (this.check.visible = !1, this.closeBtn.visible = !0) : (this.check.visible = !0, this.closeBtn.visible = !1)
		}
		shareBtn_Click() {
			S.setButtonEvents("gaonengshike", "gaonengshike_sharelp", 2, St.getCurrLvInfo(), ""), kt.GameRecorder_Release(() => {
				S.setButtonEvents("gaonengshike", "gaonengshike_sharelp_success", 6, St.getCurrLvInfo(), "");
				var t = St.getCoinNum();
				t += 1e3, St.setCoinNum(t), kt.showToast("Get coin：1000", "none", 2e3), this.showHighEnergyUI(!1)
			}, () => { }, () => { })
		}
		closeBtn_Click() {
			this.showHighEnergyUI(!1)
		}
	}
	Tt.instance = null;
	class Lt extends Laya.Script {
		constructor() {
			super(), this.callBack_Close = null, Lt.instance = this
		}
		onAwake() {
			this.giftUI = this.owner, this.uiBox = this.giftUI.getChildAt(0), this.closeBtn = this.uiBox.getChildByName("closeBtn"), this.boxTop = this.uiBox.getChildByName("boxTop"), this.coin = this.uiBox.getChildByName("coin"), this.proBot = this.uiBox.getChildByName("proBot"), this.proTop = this.proBot.getChildByName("proTop"), this.clickBtn = this.uiBox.getChildByName("clickBtn"), this.checkBtn = this.uiBox.getChildByName("checkBtn"), this.check = this.checkBtn.getChildAt(0), this.getBtn = this.uiBox.getChildByName("getBtn")
		}
		onStart() {
			this.closeBtn.on(Laya.Event.CLICK, this, this.closeBtn_Click), this.clickBtn.on(Laya.Event.CLICK, this, this.clickBtn_Click), this.checkBtn.on(Laya.Event.CLICK, this, this.checkBtn_Click), this.getBtn.on(Laya.Event.CLICK, this, this.getBtn_Click)
		}
		onUpdate() {
			this.proTop.width > .001 && this.proTop.width < 490 && (this.proTop.width -= 5, this.proTop.width < .001 && (this.proTop.width = .001))
		}
		showGiftUI(t, e = null) {
			t ? (Laya.Browser.clientHeight / Laya.Browser.clientWidth < 2 && kt.hideBanner(), this.callBack_Close = e, this.giftUI.visible = !0, this.initUI()) : (this.giftUI.visible = !1, this.callBack_Close && this.callBack_Close())
		}
		initUI() {
			this.closeBtn.visible = !1, this.getBtn.visible = !1, this.coin.visible = !1, this.boxTop.centerX = 0, this.boxTop.centerY = -105, this.checkBtn.visible = !1, this.clickBtn.visible = !0, this.proBot.visible = !0, this.proTop.width = .001
		}
		openGift() {
			this.getBtn.visible = !0, this.coin.visible = !0, this.boxTop.centerX = -185, this.boxTop.centerY = -170, this.checkBtn.visible = !0, this.check.visible = !0, this.clickBtn.visible = !1, this.proBot.visible = !1
		}
		closeBtn_Click() {
			this.showGiftUI(!1)
		}
		clickBtn_Click() {
			this.proTop.width += 82, this.proTop.width >= 490 && this.openGift()
		}
		checkBtn_Click() {
			this.check.visible ? (this.check.visible = !1, this.closeBtn.visible = !0) : (this.check.visible = !0, this.closeBtn.visible = !1)
		}
		getBtn_Click() {
			var t = this.getCoinByRandom(),
				e = St.getCoinNum();
			e += t, St.setCoinNum(e), kt.showToast("Gte coin:" + String(t), "none", 2e3), this.showGiftUI(!1)
			/*kt.showVideoAd(() => {
				var t = this.getCoinByRandom(),
					e = St.getCoinNum();
				e += t, St.setCoinNum(e), kt.showToast("Gte coin:" + String(t), "none", 2e3), this.showGiftUI(!1)
			}, () => {
				kt.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/
		}
		getCoinByRandom() {
			var t = Math.random();
			return t <= .6 ? 100 : t <= .9 ? 200 : 500
		}
	}
	Lt.instance = null;
	class _t extends Laya.Script {
		constructor() {
			super(), this.moveSpeed = 5, this.centerXH = 0
		}
		onAwake() {
			this.courseH = this.owner
		}
		onEnable() { }
		onUpdate() {
			this.courseH.centerX >= 220 && (this.moveSpeed = -5), this.courseH.centerX <= -190 && (this.moveSpeed = 5), this.centerXH += this.moveSpeed, this.courseH.centerX = this.centerXH
		}
	}
	class xt extends Laya.Script {
		constructor() {
			super()
		}
		onAwake() {
			this.skinItem = this.owner, this.selectItem = this.skinItem.getChildByName("selectItem"), this.skinBox = this.skinItem.getChildByName("skinItem"), this.skinImg = this.skinItem.getChildByName("skinImg")
		}
		onEnable() {
			this.skinImg.on(Laya.Event.CLICK, this, this.skinItemClick)
		}
		skinItemClick() {
			if (!B.instance.isBtnCD_StoreItem) {
				B.instance.isBtnCD_StoreItem = !0;
				var t = this.skinItem.dataSource.itemId;
				console.log(t), B.instance.currSelectIndex != t && (B.instance.currSelectIndex = t, B.instance.setStoreData(B.instance.skinData), B.instance.setBtnState(t))
			}
		}
	}
	class Mt extends Laya.Script {
		constructor() {
			super(), this.bxBg = [], this.bx_open = [], this.bx_close = [], this.bx_video = [], this.coin_num = [], this.bigReward = [], this.currentKeyCount = 0, this.isBaoxiangOpen = [0, 0, 0, 0, 0, 0, 0, 0, 0], this.bx_reward = [0, 0, 0, 0, 0, 0, 0, 0, 0], this.bx_coin_count = [100, 200, 500, 1e3], this.bx_position = [], this.bx_position_new = [], this.randomChange = [], this.bx_reward_index1 = [1, 1, 2, 1, 2, 3, 1, 2, 4], this.bx_reward_index2 = [1, 1, 2, 3, 2, 3, 1, 2, 1], this.openBaoxiangTimes = 0, this.isBxReward = [50, 50, 100, 50, 50, 100, 50, 100], this.isCantouch = !1, this.isHaveBigReward_index = 0, this.spSkinId = 8, Mt.instance = this
		}
		onAwake() {
			this._ui = this.owner, this._bg = this._ui.getChildByName("bg"), this._title = this._bg.getChildByName("title"), this._btn_close = this._bg.getChildByName("btn_close"), this._nine_box = this._bg.getChildByName("nineBox");
			for (let t = 0; t < 9; t++) this.bxBg[t] = this._nine_box.getChildAt(t), this.bx_open[t] = this.bxBg[t].getChildByName("open"), this.coin_num[t] = this.bx_open[t].getChildByName("num"), this.bigReward[t] = this.bxBg[t].getChildByName("bigReward"), this.bx_close[t] = this.bxBg[t].getChildByName("close"), this.bx_video[t] = this.bxBg[t].getChildByName("video"), this.bx_open[t].visible = !1, this.bigReward[t].visible = !1, this.bx_video[t].visible = !1, this.bx_close[t].visible = !0
		}
		onStart() {
			this._btn_close.on(Laya.Event.CLICK, this, this._close_click);
			for (var t = 0; t < 9; t++) this.bxBg[t].on(Laya.Event.CLICK, this, this.BaoxiangBoxClick);
			this.AdaptScene()
		}
		AdaptScene() {
			Laya.Browser.height / Laya.Browser.width <= 1.8 ? (this._title.centerY -= 50, this._nine_box.centerY -= 60, this._btn_close.centerY -= 60) : Laya.Browser.height / Laya.Browser.width <= 2 && (this._title.centerY -= 30, this._nine_box.centerY -= 30, this._btn_close.centerY -= 30)
		}
		BaoxiangBoxClick(t) {
			var e = Number(t.target.name.substring(3)) - 1;
			if (this.isCantouch)
				if (this.currentKeyCount > 0) {
					if (0 == this.isBaoxiangOpen[e]) {
						if (this.currentKeyCount--, this.bx_open[e].visible = !0, this.bigReward[e].visible = !1, this.bx_video[e].visible = !1, this.bx_close[e].visible = !1, console.log("--------", e, this.bx_reward[e]), 4 == this.bx_reward[e]) switch (this.Change_bigReward_smallReward(e), this.isBaoxiangOpen[e] = this.bx_reward[e], this.bx_reward[e]) {
							case 1:
								this.getCoin(100);
								break;
							case 2:
								this.getCoin(200);
								break;
							case 3:
								this.getCoin(500)
						} else switch (this.isBaoxiangOpen[e] = this.bx_reward[e], this.bx_reward[e]) {
							case 1:
								this.getCoin(100);
								break;
							case 2:
								this.getCoin(200);
								break;
							case 3:
								this.getCoin(500)
						}
						this.changeBaoxiangSkin()
					}
				} else {
					var i = this;
					0 == i.isBaoxiangOpen[e] && (S.setButtonEvents("xingyunbaoxiang", "xingyunbaoxiang_open_video_start", 1, -1, ""),() => {
						if (S.setButtonEvents("xingyunbaoxiang", "xingyunbaoxiang_open_video_success", 5, -1, ""), this.bx_video[e].visible = !1, this.bx_close[e].visible = !1, this.bigReward[e].visible = !1, this.bx_open[e].visible = !0, i.isBaoxiangOpen[e] = i.bx_reward[e], 4 == i.bx_reward[e]) this.bigReward[e].visible = !0, this.bx_open[e].visible = !1, localStorage.setItem("Fall_dzq_data_isHave_nineBox_bigreward", "1"), B.instance.skinData.skinData[this.spSkinId].isOwn = !0, B.instance.skinData.skinData[this.spSkinId].state = 2, bt.setSkinInfoData(B.instance.skinData), n.showToast("Congrats on getting the limited skin");
						else switch (this.bx_reward[e]) {
							case 1:
								this.getCoin(100);
								break;
							case 2:
								this.getCoin(200);
								break;
							case 3:
								this.getCoin(500)
						}
						i.changeBaoxiangSkin()
					}, () => { })
				}
		}
		getCoin(t) {
			var e = bt.getCoinData();
			e += t, bt.setCoinData(e), n.showToast("Get coins:" + t, "none", 2e3)
		}
		changeBaoxiangSkin() {
			if (this.currentKeyCount > 0) {
				for (let t = 0; t < 9; t++) 0 == this.isBaoxiangOpen[t] && (this.bx_video[t].visible = !1, this.bx_close[t].visible = !0, this.bigReward[t].visible = !1, this.bx_open[t].visible = !1);
				this._btn_close.visible = !1
			} else {
				for (let t = 0; t < 9; t++) 0 == this.isBaoxiangOpen[t] && (this.bx_video[t].visible = !0, this.bx_close[t].visible = !1, 4 == this.bx_reward[t] ? (this.bigReward[t].visible = !0, this.bx_open[t].visible = !1) : (this.bigReward[t].visible = !1, this.bx_open[t].visible = !0));
				this._btn_close.visible = !0
			}
		}
		ShowUi(t, e) {
			if (t) {
				Laya.Browser.height / Laya.Browser.width >= 2 && n.ShowBanner(), Laya.timer.once(500, this, () => {
					n.showInterstitialAd()
				}), this.isCantouch = !1;
				let s = Math.random();
				this.currentKeyCount = s <= .6 ? 3 : 2, this._btn_close.visible = !1;
				for (var i = 0; i < 9; i++) this.isBaoxiangOpen[i] = 0;
				this.openBaoxiangTimes = 0, this.InitBxUI(), this.call_back = e, this._ui.visible = t, this._ui.scaleX = 0, this._ui.scaleY = 0, Laya.Tween.to(this._ui, {
					scaleX: 1,
					scaleY: 1
				}, 400, Laya.Ease.circOut)
			} else n.HideBanner(), Laya.Tween.to(this._ui, {
				scaleX: 0,
				scaleY: 0
			}, 400, Laya.Ease.backIn, Laya.Handler.create(this, () => {
				this._ui.visible = t, this.call_back && this.call_back()
			}))
		}
		getRandNumForRange(t, e, i) {
			let s, a = [],
				n = [];
			for (let i = t; i <= e; i++) a.push(i);
			for (let t = 0; t < i; t++) s = Math.floor(Math.random() * a.length), n.push(a[s]), a.splice(s, 1);
			return n
		}
		InitBxUI() {
			localStorage.getItem("Fall_dzq_data_isHave_nineBox_bigreward");
			if (B.instance.skinData.skinData[this.spSkinId].isOwn) {
				let t = this.getRandNumForRange(0, 8, 9);
				for (let e = 0; e < t.length; e++) this.bx_reward[e] = this.bx_reward_index2[t[e]];
				this.isHaveBigReward_index = -1, console.log("---当前奖励顺序--", this.bx_reward)
			} else {
				let t = this.getRandNumForRange(0, 8, 9);
				for (let e = 0; e < t.length; e++) this.bx_reward[e] = this.bx_reward_index1[t[e]], 4 == this.bx_reward[e] && (this.isHaveBigReward_index = e);
				console.log("---当前奖励顺序--", this.bx_reward)
			}
			this.bx_position = [];
			for (let t = 0; t <= 8; t++) this.bx_position.push(new Laya.Vector2(this.bxBg[t].centerX, this.bxBg[t].centerY)), this.coin_num[t].value = "" + this.bx_coin_count[this.bx_reward[t] - 1];
			this.showBxAnim()
		}
		Change_bigReward_smallReward(t) {
			this.randomChange = [];
			for (let e = 0; e <= 8; e++) 0 == this.isBaoxiangOpen[e] && t != e && this.randomChange.push(e);
			let e = this.GetRandomInt(0, this.randomChange.length);
			console.log("----大奖换的位置---", this.randomChange, this.randomChange[e]);
			let i = 0;
			i = this.bx_reward[t], this.bx_reward[t] = this.bx_reward[this.randomChange[e]], this.bx_reward[this.randomChange[e]] = i, this.InitbxCoin()
		}
		InitbxCoin() {
			for (let t = 0; t <= 8; t++) this.coin_num[t].value = "" + this.bx_coin_count[this.bx_reward[t] - 1]
		}
		GetRandomInt(t, e) {
			var i = e - t,
				s = Math.random();
			return t + Math.floor(s * i)
		}
		showBxAnim() {
			this.bx_position_new = [];
			let t = this.getRandNumForRange(0, 8, 9);
			for (let e = 0; e < t.length; e++) this.bx_position_new.push(this.bx_position[t[e]]);
			if (console.log("---交换之后的位置---", t, this.bx_position, this.bx_position_new), this.isHaveBigReward_index > 0)
				for (let t = 0; t <= 8; t++) this.bx_close[t].visible = !1, this.bx_video[t].visible = !1, t == this.isHaveBigReward_index ? (this.bigReward[t].visible = !0, this.bx_open[t].visible = !1) : (this.bigReward[t].visible = !1, this.bx_open[t].visible = !0), Laya.timer.once(100 * t + 500, this, () => {
					Laya.Tween.to(this.bxBg[t], {
						centerX: 0,
						centerY: 0
					}, 500, null, Laya.Handler.create(this, () => {
						this.bx_video[t].visible = !1, this.bx_close[t].visible = !0, this.bigReward[t].visible = !1, this.bx_open[t].visible = !1, Laya.timer.once(500 + 100 * (9 - t), this, () => {
							Laya.Tween.to(this.bxBg[t], {
								centerX: this.bx_position_new[t].x,
								centerY: this.bx_position_new[t].y
							}, 500, null, Laya.Handler.create(this, () => {
								8 == t && (this.isCantouch = !0)
							}))
						})
					}))
				});
			else
				for (let t = 0; t <= 8; t++) {
					this.bx_video[t].visible = !1, this.bx_close[t].visible = !1, this.bigReward[t].visible = !1, this.bx_open[t].visible = !0;
					Laya.timer.once(100 * t + 500, this, () => {
						Laya.Tween.to(this.bxBg[t], {
							centerX: 0,
							centerY: 0
						}, 500, null, Laya.Handler.create(this, () => {
							this.bx_video[t].visible = !1, this.bx_close[t].visible = !0, this.bigReward[t].visible = !1, this.bx_open[t].visible = !1, Laya.timer.once(500 + 100 * (9 - t), this, () => {
								Laya.Tween.to(this.bxBg[t], {
									centerX: this.bx_position_new[t].x,
									centerY: this.bx_position_new[t].y
								}, 500, null, Laya.Handler.create(this, () => {
									8 == t && (this.isCantouch = !0)
								}))
							})
						}))
					})
				}
		}
		_yes_click() { }
		_close_click() {
			this.ShowUi(!1)
		}
	}
	Mt.instance = null;
	class Dt extends Laya.Script {
		constructor() {
			super(), this.taskIndex = 0
		}
		onAwake() {
			this.selfBtn = this.owner, this.taskItem = this.selfBtn.parent.getChildByName("taskItem")
		}
		onStart() {
			this.selfBtn.on(Laya.Event.CLICK, this, this.selfBtn_Click)
		}
		selfBtn_Click() {
			this.taskIndex = Number(this.taskItem.skin.split(".")[0].substring(14)) - 1, console.log(this.taskIndex, Number(this.taskItem.skin.split(".")[0].substring(14))), "UI/taskUI/get.png" == this.selfBtn.skin ? (dt.instance.getTaskReward(this.taskIndex), dt.instance.setTaskState(this.taskIndex, 2)) : "UI/taskUI/get_Ad.png" == this.selfBtn.skin && (S.setButtonEvents("renwuui", "renwuui_zailingqu_video_start", 1, -1, ""),
			S.setButtonEvents("renwuui", "renwuui_zailingqu-" + String(this.taskIndex + 1) + "_video_success", 5, -1, ""), dt.instance.getTaskReward(this.taskIndex), dt.instance.setTaskState(this.taskIndex, 3)
				/*n.ShowRewardAd(() => {
				S.setButtonEvents("renwuui", "renwuui_zailingqu-" + String(this.taskIndex + 1) + "_video_success", 5, -1, ""), dt.instance.getTaskReward(this.taskIndex), dt.instance.setTaskState(this.taskIndex, 3)
			}, () => {
				n.showToast("Get rewarded after watching the video", "none", 2e3)
			})*/)
		}
	}
	class Ut extends Laya.Script {
		constructor() {
			super(), this.texOfDraw = null, this.drawOfPro = 0, this.drawLength = 0, this.drawWidth = 0, this.isStartLoad = !1, this.isReday = !1, this.isLoadAllRes = !1, this.isMouseDown = !1, Ut.instance = this
		}
		onAwake() {
			console.log("*******&&&&&&&&&&******"), n.ShowShareMenu(!0, () => {
				var t = Math.random(),
					e = t < .2 ? 1 : t < .4 ? 2 : t < .6 ? 3 : t < .8 ? 4 : 5;
				return {
					title: bt.shareWords[e - 1],
					imageUrl: "subPackage/res/shareImg" + String(e) + ".jpg",
					query: ""
				}
			}), this.loadUI = this.owner, this.uiBox = this.loadUI.getChildAt(0), this.loadProBot = this.uiBox.getChildByName("loadProBot"), this.loadProTop = this.loadProBot.getChildAt(0), this.loadProHint = this.uiBox.getChildByName("loadProHint")
		}
		onEnable() {
			s.Instance().AdaptiveScreen(this.uiBox), this.loadProTop.skin = "", Laya.Texture2D.load("UI/loadProTop.png", Laya.Handler.create(this, t => {
				this.texOfDraw = t, this.drawWidth = this.texOfDraw.height, this.drawLength = this.texOfDraw.width, this.isReday = !0
			})), this.loadProBot.visible = !1, this.loadProHint.visible = !1, this.StartLoadPro(), this.isMouseDown = !0
		}
		onUpdate() {
			this.isReday && this.isStartLoad && this.DrawPrograssBar()
		}
		onStageClick() {
			this.isMouseDown || (this.isMouseDown = !0, this.StartLoadPro())
		}
		StartLoadPro() {
			this.loadProBot.visible = !0, this.loadProHint.visible = !0, this.isStartLoad = !0, n.LoadSubpackage("subPackage", () => {
				T.Instance().LoadModelRes(), Laya.Scene.open("Scenes/GameScene.scene", !1)
			})
		}
		DrawPrograssBar() {
			if (!(this.drawOfPro / this.drawLength >= .9) || this.isLoadAllRes) {
				if (this.drawOfPro >= this.drawLength) return this.isLoadAllRes = !1, this.isStartLoad = !1, void Laya.timer.once(1e3, this, () => {
					Laya.Scene.close("Scenes/LoadScene.scene", "FallLoadScene"), n.PostMessage({
						cmd: "SaveData",
						dataName: "ComScore",
						dataRes: "0"
					}), n.PostMessage({
						cmd: "SaveData",
						dataName: "ChaScore",
						dataRes: "0"
					})
				});
				this.drawOfPro += Laya.timer.delta / 5, this.loadProHint.text = "Loading..." + String(this.drawOfPro / this.drawLength * 100).substring(0, 2) + "%", this.drawOfPro / this.drawLength < .1 && (this.loadProHint.text = "Loading..." + String(this.drawOfPro / this.drawLength * 100).substring(0, 1) + "%"), this.drawOfPro >= this.drawLength && (this.loadProHint.text = "Loading...100%"), this.currDrawTex = Laya.Texture.createFromTexture(this.texOfDraw, 0, 0, this.drawOfPro, this.drawWidth), this.loadProTop.texture = this.currDrawTex
			}
		}
		SetLoadResComplete() {
			this.isLoadAllRes = !0
		}
	}
	Ut.instance = null;
	class At {
		constructor() { }
		static init() {
			var e = Laya.ClassUtils.regClass;
			e("script/UIExpand/BtnScaleExpand.ts", t), e("script/UI/BasePowerShowingCtrl.ts", yt), e("script/UIExpand/BtnBreathExpand.ts", wt), e("script/UI/StartUICtrl.ts", Q), e("script/UI/FightUICtrl.ts", F), e("script/UI/RelifeUICtrl.ts", at), e("script/UI/PassUICtrl.ts", G), e("script/UI/OverUICtrl.ts", $), e("script/UI/InfiniteOverUICtrl.ts", ot), e("script/UIExpand/SkinItemClick.ts", It), e("script/UI/StoreUICtrl.ts", Ct), e("script/UI/TrySkinUICtrl.ts", P), e("script/UI/RewardUICtrl.ts", N), e("script/UI/SuperStartUI.ts", O), e("script/UI/TurnTableUICtrl.ts", R), e("script/UI/SkinRewardUICtrl.ts", ft), e("script/UI/SignInUICtrl.ts", q), e("script/UIExpand/TaskBtnExpand.ts", vt), e("script/UI/TaskUICtrl.ts", Z), e("script/UI/HighEnergyUICtrl.ts", Tt), e("script/UI/LimitSkinUICtrl.ts", E), e("script/UI/GiftUICtrl.ts", Lt), e("script/UI/GoldEggUICtrl.ts", V), e("script/UI/LuckyBoxUI.ts", K), e("script/UI/GameUICtrl.ts", lt), e("script/UI/BaseInfinitePowerCtrl.ts", k), e("script/UI/LoadUICtrl.ts", W), e("script/UI/FallStartUICtrl.ts", mt), e("script/UI/FallGameoverUICtrl.ts", y), e("script/UI/FallRelifeUICtrl.ts", p), e("script/UIExpand/CourseHExpand.ts", _t), e("script/UI/FallFightUICtrl.ts", a), e("script/UIExpand/FallSkinItemClick.ts", xt), e("script/UI/FallStoreUICtrl.ts", B), e("script/UI/FallLuckyBoxUI.ts", Mt), e("script/UI/FallSignInUICtrl.ts", gt), e("script/UIExpand/FallTaskBtnExpand.ts", Dt), e("script/UI/FallTaskUICtrl.ts", dt), e("script/UI/FallTurnTableUICtrl.ts", ut), e("script/UI/FallGameUICtrl.ts", f), e("script/UI/FallLoadUICtrl.ts", Ut)
		}
	}
	At.width = 750, At.height = 1334, At.scaleMode = "fixedwidth", At.screenMode = "vertical", At.alignV = "top", At.alignH = "center", At.startScene = "GameScenes/LoadScene.scene", At.sceneRoot = "", At.debug = !1, At.stat = !1, At.physicsDebug = !1, At.exportSceneToJson = !0, At.init();
	new class {
		constructor() {
			window.Laya3D ? Laya3D.init(At.width, At.height) : Laya.init(At.width, At.height, Laya.WebGL), Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), Laya.stage.scaleMode = At.scaleMode, Laya.stage.screenMode = At.screenMode, Laya.URL.exportSceneToJson = At.exportSceneToJson, (At.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), At.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), At.stat && Laya.Stat.show(), Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION)
		}
		onVersionLoaded() {
			Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
		}
		onConfigLoaded() {
			if (console.log(Laya.version), Laya.MouseManager.multiTouchEnabled = !1, console.log(Laya.Browser.window), kt.init(), bt.loadJsonFile_Profab(), St.loadJsonFile_Profab(), ct.instance.requestConfig(), At.startScene && Laya.Scene.load(At.startScene), "undefined" != typeof minigame) {
				console.info("初始化 minigame   " + typeof minigame);
				let t = this;
				minigame.initializeAsync().then(function () {
					console.info("FBinitializeAsync"), minigame.getEntryPointAsync().then(function (t) {
						console.info("EntryPoint:", t)
					}), console.info("ContextType:", minigame.context.getType()), t.startMiniGameSDK()
				})
			} else At.startScene && Laya.Scene.open(At.startScene)
		}
		startMiniGameSDK() {
			console.info("startMiniGameSDK"), "undefined" != typeof minigame && (minigame.setLoadingProgress(100), minigame.startGameAsync().then(function () {
				At.startScene && Laya.Scene.open(At.startScene)
			}).catch(function (t) {
				console.info("startGameAsyncerror:" + t)
			}))
		}
	}
}();