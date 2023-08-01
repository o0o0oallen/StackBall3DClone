{
	"version":"LAYASCENE3D:01",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"FailingBall",
			"ambientColor":[
				0.212,
				0.227,
				0.259
			],
			"lightmaps":[],
			"enableFog":false,
			"fogStart":0,
			"fogRange":200,
			"fogColor":[
				0.1433824,
				0.2142495,
				0.3823529
			]
		},
		"child":[
			{
				"type":"Camera",
				"props":{
					"name":"Main Camera",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-12,
						10,
						0
					],
					"rotation":[
						0.1830127,
						0.6830127,
						0.1830127,
						-0.6830127
					],
					"scale":[
						1,
						1,
						1
					],
					"clearFlag":0,
					"orthographic":false,
					"fieldOfView":60,
					"nearPlane":0.3,
					"farPlane":1000,
					"viewport":[
						0,
						0,
						1,
						1
					],
					"clearColor":[
						0.1362457,
						0.2634083,
						0.4632353,
						0
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"DirectionLight",
				"props":{
					"name":"Directional Light",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						17.7,
						-15.2
					],
					"rotation":[
						0.4137915,
						0.5026936,
						0.2485562,
						-0.7171441
					],
					"scale":[
						1,
						1,
						1
					],
					"intensity":1.33,
					"lightmapBakedType":0,
					"color":[
						1,
						1,
						1
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Cylinder1",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						455,
						-260,
						-6
					],
					"rotation":[
						-0.3535533,
						0.6123726,
						-0.3535535,
						-0.6123724
					],
					"scale":[
						50,
						1,
						75
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/Materials/skyMat.lmat"
						}
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Cylinder2",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						455,
						-260,
						-6
					],
					"rotation":[
						-0.3535533,
						0.6123726,
						-0.3535535,
						-0.6123724
					],
					"scale":[
						50,
						1,
						75
					],
					"meshPath":"Library/unity default resources-Plane.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/Materials/skyMat2.lmat"
						}
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Cylinder",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						-15,
						0
					],
					"rotation":[
						0,
						-0.9022846,
						0,
						0.431141
					],
					"scale":[
						1.3,
						30,
						1.3
					],
					"meshPath":"Assets/Model/zhuzi-pCylinder1.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/Materials/cyMat.lmat"
						}
					]
				},
				"components":[
					{
						"type":"PhysicsCollider",
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									-5.960464E-08,
									0,
									-8.940697E-08
								],
								"size":[
									0.7,
									2,
									0.7
								]
							}
						],
						"isTrigger":false
					}
				],
				"child":[]
			},
			{
				"type":"TrailSprite3D",
				"props":{
					"name":"Trail",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0.58,
						0
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						0.4,
						0.4,
						0.4
					],
					"time":0.15,
					"minVertexDistance":0.1,
					"widthMultiplier":0.2,
					"textureMode":0,
					"widthCurve":[
						{
							"time":0,
							"inTangent":0.04059176,
							"outTangent":0.04059176,
							"value":1
						},
						{
							"time":0.4727561,
							"inTangent":-1.770512,
							"outTangent":-1.770512,
							"value":0.55016
						},
						{
							"time":0.9958496,
							"inTangent":-0.05926929,
							"outTangent":-0.05926929,
							"value":0
						},
						{
							"time":1,
							"inTangent":0,
							"outTangent":0,
							"value":0
						}
					],
					"colorGradient":{
						"mode":0,
						"colorKeys":[
							{
								"time":0,
								"value":[
									1,
									1,
									1
								]
							},
							{
								"time":1,
								"value":[
									1,
									1,
									1
								]
							}
						],
						"alphaKeys":[
							{
								"time":0,
								"value":1
							},
							{
								"time":1,
								"value":1
							}
						]
					},
					"materials":[
						{
							"type":"Laya.TrailMaterial",
							"path":"Assets/Materials/trailMat.lmat"
						}
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"MeshSprite3D",
				"props":{
					"name":"Ball",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-2.2,
						6,
						0
					],
					"rotation":[
						0,
						0.7071068,
						0,
						-0.7071068
					],
					"scale":[
						0.22,
						0.22,
						0.22
					],
					"meshPath":"Assets/Model/baolingqiu(1)-baolingqiu_pSphere428_pSphere428.lm",
					"enableRender":true,
					"materials":[
						{
							"path":"Assets/Materials/ballMat.lmat"
						}
					]
				},
				"components":[
					{
						"type":"Rigidbody3D",
						"mass":1,
						"isKinematic":true,
						"restitution":0,
						"friction":0.5,
						"rollingFriction":0,
						"linearDamping":0,
						"angularDamping":0,
						"overrideGravity":false,
						"gravity":[
							0,
							0,
							0
						],
						"shapes":[
							{
								"type":"BoxColliderShape",
								"center":[
									0,
									0,
									0
								],
								"size":[
									0.7,
									1.9,
									0.7
								]
							}
						],
						"isTrigger":true
					}
				],
				"child":[
					{
						"type":"ShuriKenParticle3D",
						"props":{
							"name":"Special",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								1.05,
								1.05,
								1.05
							],
							"isPerformanceMode":true,
							"duration":5,
							"looping":true,
							"prewarm":false,
							"startDelayType":0,
							"startDelay":0,
							"startDelayMin":0,
							"startDelayMax":0,
							"startLifetimeType":0,
							"startLifetimeConstant":2,
							"startLifetimeConstantMin":0,
							"startLifetimeConstantMax":2,
							"startLifetimeGradient":{
								"startLifetimes":[]
							},
							"startLifetimeGradientMin":{
								"startLifetimes":[]
							},
							"startLifetimeGradientMax":{
								"startLifetimes":[]
							},
							"startSpeedType":0,
							"startSpeedConstant":0,
							"startSpeedConstantMin":0,
							"startSpeedConstantMax":0,
							"threeDStartSize":false,
							"startSizeType":0,
							"startSizeConstant":1,
							"startSizeConstantMin":0,
							"startSizeConstantMax":1,
							"startSizeConstantSeparate":[
								1,
								1,
								1
							],
							"startSizeConstantMinSeparate":[
								0,
								0,
								0
							],
							"startSizeConstantMaxSeparate":[
								1,
								1,
								1
							],
							"threeDStartRotation":false,
							"startRotationType":0,
							"startRotationConstant":0,
							"startRotationConstantMin":0,
							"startRotationConstantMax":0,
							"startRotationConstantSeparate":[
								0,
								0,
								0
							],
							"startRotationConstantMinSeparate":[
								0,
								0,
								0
							],
							"startRotationConstantMaxSeparate":[
								0,
								0,
								0
							],
							"randomizeRotationDirection":0,
							"startColorType":0,
							"startColorConstant":[
								1,
								0.9740365,
								0.05882353,
								1
							],
							"startColorConstantMin":[
								0,
								0,
								0,
								0
							],
							"startColorConstantMax":[
								1,
								0.9740365,
								0.05882353,
								1
							],
							"gravity":[
								0,
								-9.81,
								0
							],
							"gravityModifier":0,
							"simulationSpace":1,
							"scaleMode":1,
							"playOnAwake":true,
							"maxParticles":1,
							"autoRandomSeed":true,
							"randomSeed":1165933840,
							"emission":{
								"enable":true,
								"emissionRate":10,
								"emissionRateTip":"Time",
								"bursts":[]
							},
							"colorOverLifetime":{
								"enable":true,
								"color":{
									"type":1,
									"constant":[
										0,
										0,
										0,
										0
									],
									"gradient":{
										"alphas":[
											{
												"key":0,
												"value":0.4901961
											},
											{
												"key":0.5000076,
												"value":1
											},
											{
												"key":1,
												"value":0.4901961
											}
										],
										"rgbs":[
											{
												"key":0,
												"value":[
													1,
													0.5897457,
													0
												]
											},
											{
												"key":0.5000076,
												"value":[
													1,
													0.947,
													0
												]
											},
											{
												"key":1,
												"value":[
													1,
													0.5882353,
													0
												]
											}
										]
									},
									"constantMin":[
										0,
										0,
										0,
										0
									],
									"constantMax":[
										0,
										0,
										0,
										0
									],
									"gradientMax":{
										"alphas":[
											{
												"key":0,
												"value":0.4901961
											},
											{
												"key":0.5000076,
												"value":1
											},
											{
												"key":1,
												"value":0.4901961
											}
										],
										"rgbs":[
											{
												"key":0,
												"value":[
													1,
													0.5897457,
													0
												]
											},
											{
												"key":0.5000076,
												"value":[
													1,
													0.947,
													0
												]
											},
											{
												"key":1,
												"value":[
													1,
													0.5882353,
													0
												]
											}
										]
									}
								}
							},
							"sizeOverLifetime":{
								"enable":true,
								"size":{
									"type":0,
									"separateAxes":false,
									"gradient":{
										"sizes":[
											{
												"key":0,
												"value":0.7971231
											},
											{
												"key":0.8012695,
												"value":0.7971231
											},
											{
												"key":1,
												"value":0.7971231
											}
										]
									},
									"gradientX":{
										"sizes":[
											{
												"key":0,
												"value":0.7971231
											},
											{
												"key":0.8012695,
												"value":0.7971231
											},
											{
												"key":1,
												"value":0.7971231
											}
										]
									},
									"gradientY":{
										"sizes":[
											{
												"key":0,
												"value":0
											},
											{
												"key":1,
												"value":1
											}
										]
									},
									"gradientZ":{
										"sizes":[
											{
												"key":0,
												"value":0
											},
											{
												"key":1,
												"value":1
											}
										]
									},
									"constantMin":0,
									"constantMax":0,
									"constantMinSeparate":[
										0,
										0,
										0
									],
									"constantMaxSeparate":[
										0,
										0,
										0
									],
									"gradientMin":{
										"sizes":[]
									},
									"gradientMax":{
										"sizes":[
											{
												"key":0,
												"value":0.7971231
											},
											{
												"key":0.8012695,
												"value":0.7971231
											},
											{
												"key":1,
												"value":0.7971231
											}
										]
									},
									"gradientXMin":{
										"sizes":[]
									},
									"gradientXMax":{
										"sizes":[
											{
												"key":0,
												"value":1
											},
											{
												"key":0.8012695,
												"value":1
											},
											{
												"key":1,
												"value":1
											}
										]
									},
									"gradientYMin":{
										"sizes":[]
									},
									"gradientYMax":{
										"sizes":[
											{
												"key":0,
												"value":0
											},
											{
												"key":1,
												"value":1
											}
										]
									},
									"gradientZMin":{
										"sizes":[]
									},
									"gradientZMax":{
										"sizes":[
											{
												"key":0,
												"value":0
											},
											{
												"key":1,
												"value":1
											}
										]
									}
								}
							},
							"renderMode":0,
							"stretchedBillboardCameraSpeedScale":0,
							"stretchedBillboardSpeedScale":0,
							"stretchedBillboardLengthScale":2,
							"sortingFudge":0,
							"material":{
								"type":"Laya.ShurikenParticleMaterial",
								"path":"Assets/Materials/P_cir_smt 3.lmat"
							}
						},
						"components":[],
						"child":[]
					}
				]
			},
			{
				"type":"Sprite3D",
				"props":{
					"name":"Springboard",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0,
						0
					],
					"rotation":[
						0,
						-0.08715578,
						0,
						-0.9961947
					],
					"scale":[
						1,
						0.8,
						1
					]
				},
				"components":[],
				"child":[
					{
						"type":"Sprite3D",
						"props":{
							"name":"Turntable",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0,
								0.08715578,
								0,
								-0.9961947
							],
							"scale":[
								1,
								1,
								1
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"BoxColliderShape",
										"center":[
											-1.4,
											0.1,
											0.05
										],
										"size":[
											3,
											0.7,
											2.1
										]
									}
								],
								"isTrigger":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"TurntableMesh",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								1,
								1,
								1
							],
							"meshPath":"Assets/Model/board1-SmartCombine_1.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Materials/turnTabelMat 1.lmat"
								}
							]
						},
						"components":[],
						"child":[]
					}
				]
			},
			{
				"type":"Sprite3D",
				"props":{
					"name":"Turntable",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						5,
						0
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					]
				},
				"components":[],
				"child":[
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"Turntable",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								1,
								1,
								1
							],
							"meshPath":"Assets/Model/table1-SmartCombine_0.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Materials/turnTabelMat.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"BoxColliderShape",
										"center":[
											-2,
											0.07,
											0
										],
										"size":[
											2,
											0.75,
											1.3
										]
									}
								],
								"isTrigger":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"Turntable",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0,
								0.309017,
								0,
								-0.9510565
							],
							"scale":[
								1,
								1,
								1
							],
							"meshPath":"Assets/Model/table1-SmartCombine_0.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Materials/turnTabelMat.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"BoxColliderShape",
										"center":[
											-2,
											0.07,
											0
										],
										"size":[
											2,
											0.75,
											1.3
										]
									}
								],
								"isTrigger":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"Turntable",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0,
								0.5877852,
								0,
								-0.809017
							],
							"scale":[
								1,
								1,
								1
							],
							"meshPath":"Assets/Model/table1-SmartCombine_0.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Materials/turnTabelMat.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"BoxColliderShape",
										"center":[
											-2,
											0.07,
											0
										],
										"size":[
											2,
											0.75,
											1.3
										]
									}
								],
								"isTrigger":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"Turntable",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0,
								0.8090169,
								0,
								-0.5877853
							],
							"scale":[
								1,
								1,
								1
							],
							"meshPath":"Assets/Model/table1-SmartCombine_0.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Materials/turnTabelMat.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"BoxColliderShape",
										"center":[
											-2,
											0.07,
											0
										],
										"size":[
											2,
											0.75,
											1.3
										]
									}
								],
								"isTrigger":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"Turntable",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0,
								0.9510565,
								0,
								-0.309017
							],
							"scale":[
								1,
								1,
								1
							],
							"meshPath":"Assets/Model/table1-SmartCombine_0.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Materials/turnTabelMat.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"BoxColliderShape",
										"center":[
											-2,
											0.07,
											0
										],
										"size":[
											2,
											0.75,
											1.3
										]
									}
								],
								"isTrigger":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"Turntable",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0,
								1,
								0,
								0
							],
							"scale":[
								1,
								1,
								1
							],
							"meshPath":"Assets/Model/table1-SmartCombine_0.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Materials/turnTabelMat.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"BoxColliderShape",
										"center":[
											-2,
											0.07,
											0
										],
										"size":[
											2,
											0.75,
											1.3
										]
									}
								],
								"isTrigger":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"Turntable",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0,
								0.9510566,
								0,
								0.3090169
							],
							"scale":[
								1,
								1,
								1
							],
							"meshPath":"Assets/Model/table1-SmartCombine_0.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Materials/turnTabelMat.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"BoxColliderShape",
										"center":[
											-2,
											0.07,
											0
										],
										"size":[
											2,
											0.75,
											1.3
										]
									}
								],
								"isTrigger":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"Turntable",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0,
								0.8090171,
								0,
								0.5877851
							],
							"scale":[
								1,
								1,
								1
							],
							"meshPath":"Assets/Model/table1-SmartCombine_0.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Materials/turnTabelMat.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"BoxColliderShape",
										"center":[
											-2,
											0.07,
											0
										],
										"size":[
											2,
											0.75,
											1.3
										]
									}
								],
								"isTrigger":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"Turntable",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0,
								0.5877852,
								0,
								0.809017
							],
							"scale":[
								1,
								1,
								1
							],
							"meshPath":"Assets/Model/table1-SmartCombine_0.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Materials/turnTabelMat.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"BoxColliderShape",
										"center":[
											-2,
											0.07,
											0
										],
										"size":[
											2,
											0.75,
											1.3
										]
									}
								],
								"isTrigger":true
							}
						],
						"child":[]
					},
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"Turntable",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0,
								0.3090171,
								0,
								0.9510565
							],
							"scale":[
								1,
								1,
								1
							],
							"meshPath":"Assets/Model/table1-SmartCombine_0.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Materials/turnTabelMat.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"BoxColliderShape",
										"center":[
											-2,
											0.07,
											0
										],
										"size":[
											2,
											0.75,
											1.3
										]
									}
								],
								"isTrigger":true
							}
						],
						"child":[]
					}
				]
			},
			{
				"type":"ShuriKenParticle3D",
				"props":{
					"name":"Burst",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						-2.2,
						6,
						0
					],
					"rotation":[
						0.6123725,
						-0.3535534,
						-0.3535534,
						-0.6123725
					],
					"scale":[
						0.25,
						0.25,
						0.25
					],
					"isPerformanceMode":true,
					"duration":0.15,
					"looping":false,
					"prewarm":false,
					"startDelayType":0,
					"startDelay":0,
					"startDelayMin":0,
					"startDelayMax":0,
					"startLifetimeType":0,
					"startLifetimeConstant":3,
					"startLifetimeConstantMin":0,
					"startLifetimeConstantMax":3,
					"startLifetimeGradient":{
						"startLifetimes":[]
					},
					"startLifetimeGradientMin":{
						"startLifetimes":[]
					},
					"startLifetimeGradientMax":{
						"startLifetimes":[]
					},
					"startSpeedType":0,
					"startSpeedConstant":23,
					"startSpeedConstantMin":0,
					"startSpeedConstantMax":23,
					"threeDStartSize":false,
					"startSizeType":0,
					"startSizeConstant":0.5,
					"startSizeConstantMin":0,
					"startSizeConstantMax":0.5,
					"startSizeConstantSeparate":[
						0.5,
						1,
						1
					],
					"startSizeConstantMinSeparate":[
						0,
						0,
						0
					],
					"startSizeConstantMaxSeparate":[
						0.5,
						1,
						1
					],
					"threeDStartRotation":false,
					"startRotationType":0,
					"startRotationConstant":0,
					"startRotationConstantMin":0,
					"startRotationConstantMax":0,
					"startRotationConstantSeparate":[
						0,
						0,
						0
					],
					"startRotationConstantMinSeparate":[
						0,
						0,
						0
					],
					"startRotationConstantMaxSeparate":[
						0,
						0,
						0
					],
					"randomizeRotationDirection":0,
					"startColorType":0,
					"startColorConstant":[
						1,
						1,
						1,
						1
					],
					"startColorConstantMin":[
						0,
						0,
						0,
						0
					],
					"startColorConstantMax":[
						1,
						1,
						1,
						1
					],
					"gravity":[
						0,
						-9.81,
						0
					],
					"gravityModifier":1.5,
					"simulationSpace":0,
					"scaleMode":1,
					"playOnAwake":true,
					"maxParticles":100,
					"autoRandomSeed":true,
					"randomSeed":3194544310,
					"emission":{
						"enable":true,
						"emissionRate":150,
						"emissionRateTip":"Time",
						"bursts":[]
					},
					"shape":{
						"enable":true,
						"shapeType":2,
						"sphereRadius":1,
						"sphereEmitFromShell":false,
						"sphereRandomDirection":0,
						"hemiSphereRadius":1,
						"hemiSphereEmitFromShell":false,
						"hemiSphereRandomDirection":0,
						"coneAngle":10,
						"coneRadius":1,
						"coneLength":5,
						"coneEmitType":0,
						"coneRandomDirection":0,
						"boxX":1,
						"boxY":1,
						"boxZ":1,
						"boxRandomDirection":0,
						"circleRadius":1,
						"circleArc":120,
						"circleEmitFromEdge":false,
						"circleRandomDirection":0
					},
					"sizeOverLifetime":{
						"enable":true,
						"size":{
							"type":0,
							"separateAxes":false,
							"gradient":{
								"sizes":[
									{
										"key":0,
										"value":1
									},
									{
										"key":1,
										"value":0
									}
								]
							},
							"gradientX":{
								"sizes":[
									{
										"key":0,
										"value":1
									},
									{
										"key":1,
										"value":0
									}
								]
							},
							"gradientY":{
								"sizes":[
									{
										"key":0,
										"value":0
									},
									{
										"key":1,
										"value":1
									}
								]
							},
							"gradientZ":{
								"sizes":[
									{
										"key":0,
										"value":0
									},
									{
										"key":1,
										"value":1
									}
								]
							},
							"constantMin":0,
							"constantMax":0,
							"constantMinSeparate":[
								0,
								0,
								0
							],
							"constantMaxSeparate":[
								0,
								0,
								0
							],
							"gradientMin":{
								"sizes":[]
							},
							"gradientMax":{
								"sizes":[
									{
										"key":0,
										"value":1
									},
									{
										"key":1,
										"value":0
									}
								]
							},
							"gradientXMin":{
								"sizes":[]
							},
							"gradientXMax":{
								"sizes":[
									{
										"key":0,
										"value":1
									},
									{
										"key":1,
										"value":0
									}
								]
							},
							"gradientYMin":{
								"sizes":[]
							},
							"gradientYMax":{
								"sizes":[
									{
										"key":0,
										"value":0
									},
									{
										"key":1,
										"value":1
									}
								]
							},
							"gradientZMin":{
								"sizes":[]
							},
							"gradientZMax":{
								"sizes":[
									{
										"key":0,
										"value":0
									},
									{
										"key":1,
										"value":1
									}
								]
							}
						}
					},
					"renderMode":0,
					"stretchedBillboardCameraSpeedScale":0,
					"stretchedBillboardSpeedScale":0,
					"stretchedBillboardLengthScale":2,
					"sortingFudge":0,
					"material":{
						"type":"Laya.ShurikenParticleMaterial",
						"path":"Assets/MTl/tar.lmat"
					}
				},
				"components":[],
				"child":[]
			},
			{
				"type":"Sprite3D",
				"props":{
					"name":"BurstStamp",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						0.365,
						0
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					]
				},
				"components":[],
				"child":[
					{
						"type":"MeshSprite3D",
						"props":{
							"name":"BurstStamp",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								-2.2,
								0,
								0
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								0.11,
								1,
								0.11
							],
							"meshPath":"Library/unity default resources-Plane.lm",
							"enableRender":true,
							"materials":[
								{
									"path":"Assets/Materials/stampMat.lmat"
								}
							]
						},
						"components":[
							{
								"type":"PhysicsCollider",
								"restitution":0,
								"friction":0.5,
								"rollingFriction":0,
								"shapes":[
									{
										"type":"MeshColliderShape",
										"mesh":"Library/unity default resources-Plane.lm"
									}
								],
								"isTrigger":false
							}
						],
						"child":[]
					}
				]
			}
		]
	}
}