// 由 人物骨骼.docx 自动生成，勿手改；改文档后重新生成
export const RIG_PAGE = {
  "id": "rig",
  "title": "3D 骨骼系统（Rig）全面介绍与区别",
  "sections": [
    {
      "id": "sec-1",
      "num": "01",
      "title": "一、15 种骨骼系统总览",
      "blocks": [
        {
          "t": "p",
          "text": "分类、定位与主要应用场景"
        },
        {
          "t": "table",
          "head": [
            "名称",
            "类型",
            "主要软件 / 平台",
            "主要用途"
          ],
          "rows": [
            [
              "Mixamo",
              "自动绑定与动画骨骼",
              "Mixamo",
              "快速角色绑定、动画"
            ],
            [
              "Rigify",
              "自动绑定系统",
              "Blender",
              "专业角色绑定"
            ],
            [
              "ARP",
              "自动绑定系统",
              "Blender",
              "游戏及影视角色绑定"
            ],
            [
              "Biped",
              "骨骼动画系统",
              "3ds Max",
              "游戏、影视动画"
            ],
            [
              "MMD",
              "角色骨骼体系",
              "MikuMikuDance",
              "二次元角色动画"
            ],
            [
              "CC4",
              "商业角色骨骼体系",
              "Character Creator 4",
              "写实角色制作"
            ],
            [
              "DAZ Rig",
              "角色骨骼体系",
              "DAZ Studio",
              "人物、人体动画"
            ],
            [
              "DAZ MHX",
              "骨骼映射 / 绑定方案",
              "Blender、DAZ",
              "DAZ 角色导入与控制"
            ],
            [
              "CloudRig",
              "自动绑定系统",
              "Blender",
              "复杂角色绑定"
            ],
            [
              "MakeHuman",
              "角色生成及骨骼体系",
              "MakeHuman",
              "人体模型生成"
            ],
            [
              "Unreal Mannequin",
              "游戏角色骨骼体系",
              "Unreal Engine",
              "游戏动画"
            ],
            [
              "Unity Humanoid",
              "人形骨骼映射规范",
              "Unity",
              "动画重定向"
            ],
            [
              "HumGen Rig",
              "角色生成及绑定体系",
              "Blender",
              "人体角色生成"
            ],
            [
              "Cascadeur",
              "物理辅助动画系统",
              "Cascadeur",
              "动作制作、修正"
            ],
            [
              "VDMocap",
              "需要进一步确认具体项目",
              "视具体实现而定",
              "动作捕捉相关"
            ]
          ]
        },
        {
          "t": "p",
          "text": "这里有两个容易混淆的地方："
        },
        {
          "t": "list",
          "items": [
            "Unity Humanoid 不是一种固定的骨骼结构，而是 Unity 对不同人形骨骼进行标准化映射的机制。",
            "Cascadeur 不是传统意义上的骨骼生成系统，它主要解决角色动画制作、物理辅助和动作编辑问题。"
          ]
        }
      ]
    },
    {
      "id": "sec-2",
      "num": "02",
      "title": "二、逐一详细介绍",
      "blocks": [
        {
          "t": "h2",
          "text": "1. Mixamo"
        },
        {
          "t": "lead",
          "name": "Mixamo",
          "tag": "快速绑定 / 动画资源"
        },
        {
          "t": "list",
          "items": [
            "开发商：Adobe",
            "使用方式：在线自动绑定",
            "主要格式：FBX",
            "典型用途：游戏角色、动作原型、动画测试",
            "特点：自动绑定、自动生成权重、提供大量预制动作"
          ]
        },
        {
          "t": "h3",
          "text": "骨骼结构"
        },
        {
          "t": "p",
          "text": "Mixamo 使用通用人形骨骼结构，通常包括："
        },
        {
          "t": "code",
          "text": "Hips\n├── Spine\n│   └── Spine1\n│       └── Spine2\n│           ├── Neck\n│           │   └── Head\n│           ├── LeftShoulder\n│           │   └── LeftArm\n│           │       └── LeftForeArm\n│           │           └── LeftHand\n│           └── RightShoulder\n│               └── RightArm\n│                   └── RightForeArm\n│                       └── RightHand\n├── LeftUpLeg\n│   └── LeftLeg\n│       └── LeftFoot\n│           └── LeftToeBase\n└── RightUpLeg\n    └── RightLeg\n        └── RightFoot\n            └── RightToeBase"
        },
        {
          "t": "p",
          "text": "实际骨骼可能包含额外的辅助骨骼，具体取决于角色和导出配置。"
        },
        {
          "t": "h3",
          "text": "主要特点"
        },
        {
          "t": "list",
          "items": [
            "自动识别人物身体结构。",
            "自动生成骨骼和蒙皮权重。",
            "提供行走、跑步、攻击、跳跃、死亡等动画。",
            "能够下载 FBX 动画资源。",
            "适合快速建立动画原型。"
          ]
        },
        {
          "t": "h3",
          "text": "优缺点"
        },
        {
          "t": "table",
          "head": [
            "优点",
            "缺点"
          ],
          "rows": [
            [
              "上手简单",
              "自定义能力有限"
            ],
            [
              "动画资源丰富",
              "不适合复杂面部绑定"
            ],
            [
              "适合快速制作",
              "骨骼结构扩展性有限"
            ],
            [
              "游戏引擎导入方便",
              "复杂非人形角色支持有限"
            ]
          ]
        },
        {
          "t": "note",
          "text": "推荐场景： 使用 AI 生成的普通人形角色，需要快速赋予跑步、攻击、跳跃等基础动作。"
        },
        {
          "t": "h2",
          "text": "2. Rigify"
        },
        {
          "t": "lead",
          "name": "Rigify",
          "tag": "专业绑定 / Blender"
        },
        {
          "t": "list",
          "items": [
            "开发平台：Blender",
            "类型：程序化自动绑定",
            "主要用途：角色动画、复杂控制器、IK/FK",
            "核心机制：Meta-Rig → Control Rig"
          ]
        },
        {
          "t": "p",
          "text": "Rigify 是 Blender 内置的自动绑定插件。"
        },
        {
          "t": "p",
          "text": "它与 Mixamo 最大的区别是："
        },
        {
          "t": "p",
          "text": "Mixamo 主要帮你快速获得可以播放动画的骨骼，而 Rigify 更注重为动画师提供完整的角色控制系统。"
        },
        {
          "t": "h3",
          "text": "骨骼结构"
        },
        {
          "t": "p",
          "text": "Rigify 通常包含三类骨骼："
        },
        {
          "t": "table",
          "head": [
            "骨骼类型",
            "功能"
          ],
          "rows": [
            [
              "DEF",
              "实际负责网格变形的骨骼"
            ],
            [
              "CTRL",
              "动画师使用的控制骨骼"
            ],
            [
              "MCH",
              "内部计算、约束和辅助骨骼"
            ]
          ]
        },
        {
          "t": "p",
          "text": "典型结构："
        },
        {
          "t": "code",
          "text": "Root\n├── DEF-spine\n│   ├── DEF-spine.001\n│   └── DEF-spine.002\n├── DEF-upper_arm.L\n├── DEF-forearm.L\n├── DEF-hand.L\n├── DEF-thigh.L\n├── DEF-shin.L\n└── DEF-foot.L"
        },
        {
          "t": "code",
          "text": "CTRL\n├── root\n├── torso\n├── hand_ik.L\n├── hand_ik.R\n├── foot_ik.L\n├── foot_ik.R\n└── head"
        },
        {
          "t": "p",
          "text": "以上是功能示意，并非完整的实际骨骼命名清单。"
        },
        {
          "t": "h3",
          "text": "核心功能"
        },
        {
          "t": "list",
          "items": [
            "IK / FK 切换。",
            "手部、脚部控制。",
            "脊柱控制。",
            "手指独立控制。",
            "肩膀、手肘、膝盖控制。",
            "面部绑定组件。",
            "自定义骨骼组件。",
            "自动生成约束、驱动器和控制器。"
          ]
        },
        {
          "t": "h3",
          "text": "优缺点"
        },
        {
          "t": "p",
          "text": "优点："
        },
        {
          "t": "list",
          "items": [
            "免费开源。",
            "与 Blender 深度集成。",
            "可以制作非常复杂的角色绑定。",
            "支持人形和多种其他生物的绑定组件。"
          ]
        },
        {
          "t": "p",
          "text": "缺点："
        },
        {
          "t": "list",
          "items": [
            "学习成本较高。",
            "生成的控制骨骼较多。",
            "不能直接将完整控制器体系原样导入 Unity 或 Unreal。",
            "导出游戏资源前通常需要烘焙、清理辅助骨骼。"
          ]
        },
        {
          "t": "note",
          "text": "推荐场景： 在 Blender 中制作原创英雄、Boss、复杂怪物和需要精细控制的动画。"
        },
        {
          "t": "h2",
          "text": "3. ARP（Auto-Rig Pro）"
        },
        {
          "t": "lead",
          "name": "Auto-Rig Pro",
          "tag": "游戏角色 / 导出工作流"
        },
        {
          "t": "list",
          "items": [
            "开发平台：Blender",
            "类型：商业自动绑定插件",
            "主要用途：角色绑定、动作重定向、游戏导出",
            "核心功能：Smart、Rig、Remap、Export"
          ]
        },
        {
          "t": "p",
          "text": "ARP 是 Blender 中非常实用的专业自动绑定工具。"
        },
        {
          "t": "p",
          "text": "它与 Rigify 相比，更注重完整的生产工作流，尤其是游戏角色导出和动作重定向。"
        },
        {
          "t": "h3",
          "text": "核心组成"
        },
        {
          "t": "table",
          "head": [
            "模块",
            "功能"
          ],
          "rows": [
            [
              "Smart",
              "自动检测和辅助定位骨骼"
            ],
            [
              "Rig",
              "生成角色控制系统"
            ],
            [
              "Remap",
              "不同角色骨骼之间的动画重定向"
            ],
            [
              "Export",
              "导出游戏引擎使用的骨骼和动画"
            ]
          ]
        },
        {
          "t": "h3",
          "text": "骨骼特点"
        },
        {
          "t": "p",
          "text": "ARP 同样拥有："
        },
        {
          "t": "list",
          "items": [
            "变形骨骼。",
            "控制骨骼。",
            "辅助骨骼。",
            "IK/FK 控制。",
            "脊柱和手指控制。",
            "面部控制相关功能。"
          ]
        },
        {
          "t": "h3",
          "text": "ARP 与 Rigify 对比"
        },
        {
          "t": "table",
          "head": [
            "对比项",
            "Rigify",
            "ARP"
          ],
          "rows": [
            [
              "价格",
              "免费",
              "商业插件"
            ],
            [
              "自动绑定",
              "支持",
              "支持"
            ],
            [
              "IK/FK",
              "支持",
              "支持"
            ],
            [
              "动画重定向",
              "需搭配其他工具或流程",
              "内置 Remap"
            ],
            [
              "游戏导出",
              "需自行配置",
              "专门提供导出模块"
            ],
            [
              "自定义程度",
              "很高",
              "很高"
            ],
            [
              "适合生产流程",
              "很好",
              "很好"
            ]
          ]
        },
        {
          "t": "note",
          "text": "推荐场景： Blender 制作角色，随后需要批量导入 Unity 或 Unreal，并且需要重复使用动作资源。"
        },
        {
          "t": "h2",
          "text": "4. Biped"
        },
        {
          "t": "lead",
          "name": "Biped",
          "tag": "传统角色动画系统"
        },
        {
          "t": "list",
          "items": [
            "开发商：Autodesk",
            "使用软件：3ds Max",
            "类型：专用人形骨骼动画系统",
            "主要用途：角色动画、群集动画、动作制作"
          ]
        },
        {
          "t": "p",
          "text": "Biped 是 3ds Max Character Studio 的经典角色动画系统。"
        },
        {
          "t": "p",
          "text": "它不只是普通骨骼，而是一套包含骨骼、运动控制和动画管理的系统。"
        },
        {
          "t": "h3",
          "text": "主要结构"
        },
        {
          "t": "code",
          "text": "Bip001\n├── Bip001 Pelvis\n│   ├── Spine\n│   │   ├── Spine1\n│   │   ├── Neck\n│   │   └── Head\n│   ├── L Thigh\n│   │   └── L Calf\n│   │       └── L Foot\n│   └── R Thigh\n│       └── R Calf\n│           └── R Foot"
        },
        {
          "t": "h3",
          "text": "核心功能"
        },
        {
          "t": "list",
          "items": [
            "Figure Mode：调整骨骼结构，匹配角色比例。",
            "Keyframe Mode：制作角色动画。",
            "Footstep：自动生成脚步行走动画。",
            "Motion Flow：组合多个动作片段。",
            "Motion Mixer：混合不同动画。",
            "BIP：保存和交换 Biped 动作文件。"
          ]
        },
        {
          "t": "p",
          "text": "Biped 可以通过不同身材比例的角色共享动作，但仍需处理角色比例和骨骼适配。"
        },
        {
          "t": "note",
          "text": "推荐场景： 已经拥有 3ds Max 动画生产流程，或者需要处理传统 BIP 动作资源的项目。"
        },
        {
          "t": "h2",
          "text": "5. MMD"
        },
        {
          "t": "lead",
          "name": "MMD",
          "tag": "二次元 / PMX 骨骼"
        },
        {
          "t": "list",
          "items": [
            "全称：MikuMikuDance",
            "主要格式：PMD、PMX、VMD",
            "类型：角色骨骼、物理和表情动画体系",
            "主要用途：二次元角色、舞蹈、表情、动作动画"
          ]
        },
        {
          "t": "p",
          "text": "MMD 与普通人形骨骼存在明显区别。"
        },
        {
          "t": "p",
          "text": "它不仅包含骨骼，还包含一套完整的二次元角色动画控制机制。"
        },
        {
          "t": "h3",
          "text": "主要骨骼"
        },
        {
          "t": "code",
          "text": "全ての親\n└── センター\n    └── グルーブ\n        └── 腰\n            └── 上半身\n                ├── 上半身2\n                │   ├── 首\n                │   │   └── 頭\n                │   ├── 左肩\n                │   │   └── 左腕\n                │   │       └── 左ひじ\n                │   │           └── 左手首\n                │   └── 右肩\n                └── 下半身\n                    ├── 左足\n                    │   └── 左ひざ\n                    │       └── 左足首\n                    └── 右足"
        },
        {
          "t": "p",
          "text": "不同 PMX 模型的骨骼结构会有所区别。"
        },
        {
          "t": "h3",
          "text": "MMD 的特殊机制"
        },
        {
          "t": "p",
          "text": "① IK 反向运动学"
        },
        {
          "t": "list",
          "items": [
            "脚部 IK。",
            "膝盖 IK。",
            "手部 IK。",
            "自定义 IK 链。"
          ]
        },
        {
          "t": "p",
          "text": "② 骨骼继承"
        },
        {
          "t": "list",
          "items": [
            "旋转继承。",
            "位移继承。",
            "骨骼附加变换。"
          ]
        },
        {
          "t": "p",
          "text": "③ Morph 表情和形态变化"
        },
        {
          "t": "list",
          "items": [
            "眨眼。",
            "嘴型。",
            "面部表情。",
            "头发变化。",
            "身体形态变化。"
          ]
        },
        {
          "t": "p",
          "text": "④ 物理模拟"
        },
        {
          "t": "list",
          "items": [
            "头发刚体。",
            "裙摆刚体。",
            "衣服摆动。",
            "关节约束。",
            "物理碰撞。"
          ]
        },
        {
          "t": "p",
          "text": "⑤ VMD 动画"
        },
        {
          "t": "p",
          "text": "VMD 是动作数据格式，不是骨骼类型。它保存骨骼关键帧、表情等动画数据。"
        },
        {
          "t": "p",
          "text": "PMX 还包含骨骼约束、Morph 和物理相关数据。"
        },
        {
          "t": "note",
          "text": "推荐场景： 二次元角色、日系游戏角色、舞蹈动作和需要大量表情控制的角色。"
        },
        {
          "t": "h2",
          "text": "6. CC4（Character Creator 4）"
        },
        {
          "t": "lead",
          "name": "Character Creator 4",
          "tag": "商业级数字人"
        },
        {
          "t": "list",
          "items": [
            "开发商：Reallusion",
            "类型：角色生成、骨骼绑定和动画体系",
            "主要用途：写实人物、数字人、游戏角色",
            "主要工具：AccuRIG、iClone"
          ]
        },
        {
          "t": "p",
          "text": "CC4 是一套完整的数字人生产系统，而不是单独的骨骼插件。"
        },
        {
          "t": "p",
          "text": "它可以生成写实人体、调整身体比例、创建服装、面部表情，并提供适合动画制作的骨骼。"
        },
        {
          "t": "h3",
          "text": "骨骼结构特点"
        },
        {
          "t": "p",
          "text": "CC4 通常包含："
        },
        {
          "t": "list",
          "items": [
            "Root / Pelvis。",
            "Spine。",
            "Neck / Head。",
            "左右肩膀、手臂、手掌。",
            "左右腿部、脚部。",
            "手指骨骼。",
            "面部变形系统。",
            "额外辅助变形骨骼。"
          ]
        },
        {
          "t": "h3",
          "text": "主要特点"
        },
        {
          "t": "list",
          "items": [
            "写实人体骨骼绑定。",
            "完整手指控制。",
            "面部表情和 Morph。",
            "皮肤和肌肉相关变形效果。",
            "支持角色动画。",
            "支持游戏引擎导出。",
            "可与 iClone 动画系统配合。"
          ]
        },
        {
          "t": "p",
          "text": "CC4.1 还集成了 AccuRIG 相关的角色绑定能力，可以为导入的静态模型创建动画骨骼。"
        },
        {
          "t": "note",
          "text": "推荐场景： 写实英雄、NPC、数字人、真人比例角色，以及需要面部表情的游戏人物。"
        },
        {
          "t": "h2",
          "text": "7. DAZ Rig"
        },
        {
          "t": "lead",
          "name": "DAZ Studio",
          "tag": "数字人体 / Genesis"
        },
        {
          "t": "list",
          "items": [
            "开发商：DAZ 3D",
            "类型：参数化人体骨骼体系",
            "主要用途：人体角色、写实人物、面部动画",
            "核心系列：Genesis 3、Genesis 8、Genesis 9"
          ]
        },
        {
          "t": "p",
          "text": "DAZ Rig 的关键在于 Genesis 人体系统。"
        },
        {
          "t": "p",
          "text": "DAZ 不同版本的 Genesis 角色并不完全使用相同的骨骼结构。"
        },
        {
          "t": "h3",
          "text": "主要特点"
        },
        {
          "t": "list",
          "items": [
            "人体参数化变形。",
            "身体比例调整。",
            "面部 Morph。",
            "手指骨骼。",
            "关节弯曲控制。",
            "肌肉和皮肤形态变化。",
            "多种辅助变形节点。"
          ]
        },
        {
          "t": "h3",
          "text": "Genesis 8 与 Genesis 9"
        },
        {
          "t": "table",
          "head": [
            "对比",
            "Genesis 8",
            "Genesis 9"
          ],
          "rows": [
            [
              "骨骼体系",
              "G8 专用体系",
              "G9 专用体系"
            ],
            [
              "身体模型",
              "男女角色有不同基础形态",
              "更统一的基础人体体系"
            ],
            [
              "兼容性",
              "G8 动画和资源生态",
              "G9 动画和资源生态"
            ],
            [
              "导出",
              "需要针对目标平台处理",
              "同样需要针对目标平台处理"
            ]
          ]
        },
        {
          "t": "note",
          "text": "需要注意："
        },
        {
          "t": "p",
          "text": "DAZ 角色导出到 Blender、Unity、Unreal 时，可能涉及骨骼映射、辅助节点、蒙皮权重、Morph 和材质转换。"
        },
        {
          "t": "note",
          "text": "推荐场景： 高质量写实人体、角色肖像、数字人、电影级人物资产。"
        },
        {
          "t": "h2",
          "text": "8. DAZ MHX"
        },
        {
          "t": "lead",
          "name": "MHX Rig",
          "tag": "DAZ 到 Blender 的绑定方案"
        },
        {
          "t": "list",
          "items": [
            "主要工具：Diffeomorphic DAZ Importer",
            "使用平台：Blender",
            "类型：角色控制 Rig 转换方案",
            "主要用途：DAZ 人物的 Blender 动画控制"
          ]
        },
        {
          "t": "p",
          "text": "这里特别需要纠正一个容易出现的概念混淆："
        },
        {
          "t": "p",
          "text": "MHX 不等于 DAZ 原生骨骼。"
        },
        {
          "t": "p",
          "text": "MHX 在 Blender 角色绑定领域通常指 MHX（MakeHuman eXchange）相关的绑定方案。Diffeomorphic DAZ Importer 中也提供了将 DAZ Rig 转换为 MHX Rig 的功能。"
        },
        {
          "t": "p",
          "text": "它的作用是让导入 Blender 的 DAZ 角色拥有更方便的动画控制器。"
        },
        {
          "t": "h3",
          "text": "主要功能"
        },
        {
          "t": "list",
          "items": [
            "IK/FK 控制。",
            "手部和脚部控制。",
            "肘部、膝盖 Pole Target。",
            "脊柱控制。",
            "辅助骨骼。",
            "手指控制。",
            "角色姿势调整。"
          ]
        },
        {
          "t": "h3",
          "text": "特别注意"
        },
        {
          "t": "p",
          "text": "MHX 主要是 Blender 动画控制工作流，不应该直接当作 Unity Humanoid 或 Unreal Mannequin 的标准骨骼。"
        },
        {
          "t": "p",
          "text": "从 Blender 导出游戏角色时，需要根据目标引擎重新整理变形骨骼和动画数据。"
        },
        {
          "t": "p",
          "text": "相关实现可以在 Diffeomorphic 的 MHX 转换模块中查看。"
        },
        {
          "t": "p",
          "text": "GitHub"
        },
        {
          "t": "h2",
          "text": "9. CloudRig"
        },
        {
          "t": "lead",
          "name": "CloudRig",
          "tag": "专业动画制作"
        },
        {
          "t": "list",
          "items": [
            "开发团队：Blender Studio",
            "使用平台：Blender",
            "类型：程序化角色绑定系统",
            "技术基础：Rigify 扩展体系"
          ]
        },
        {
          "t": "p",
          "text": "CloudRig 可以理解为在 Rigify 基础上进一步扩展的专业角色绑定工具。"
        },
        {
          "t": "p",
          "text": "它使用 Metarig 定义角色结构，再自动生成完整控制系统。"
        },
        {
          "t": "h3",
          "text": "主要功能"
        },
        {
          "t": "list",
          "items": [
            "自动生成控制骨骼。",
            "自动创建约束。",
            "自动生成驱动器。",
            "手臂、腿部和脊柱控制。",
            "复杂生物的绑定。",
            "面部控制系统。",
            "自定义 Rig 类型。",
            "动画制作工作流增强。"
          ]
        },
        {
          "t": "h3",
          "text": "CloudRig 与 Rigify"
        },
        {
          "t": "table",
          "head": [
            "对比",
            "Rigify",
            "CloudRig"
          ],
          "rows": [
            [
              "定位",
              "通用自动绑定",
              "扩展型专业绑定"
            ],
            [
              "生成机制",
              "Metarig",
              "Metarig"
            ],
            [
              "控制器",
              "丰富",
              "丰富且可扩展"
            ],
            [
              "自定义",
              "支持",
              "强调生产级定制"
            ],
            [
              "复杂生物",
              "支持",
              "支持"
            ],
            [
              "适合团队动画",
              "适合",
              "特别适合定制流程"
            ]
          ]
        },
        {
          "t": "p",
          "text": "Blender Studio 的动画生产流程就使用 CloudRig 生成控制 Rig，并结合权重绘制和修正形态完成角色绑定。"
        },
        {
          "t": "note",
          "text": "推荐场景： 需要制作复杂 Boss、怪物、非标准人体和高质量动画的 Blender 项目。"
        },
        {
          "t": "h2",
          "text": "10. MakeHuman"
        },
        {
          "t": "lead",
          "name": "MakeHuman",
          "tag": "开源人体生成"
        },
        {
          "t": "list",
          "items": [
            "类型：人体生成与骨骼绑定系统",
            "平台：MakeHuman / Blender",
            "主要用途：快速生成标准人体",
            "骨骼配置：Default、Game Engine、Rigify、Mixamo 等"
          ]
        },
        {
          "t": "p",
          "text": "MakeHuman 最重要的功能不是骨骼动画，而是参数化人体生成。"
        },
        {
          "t": "p",
          "text": "可以通过调节参数生成不同的人体："
        },
        {
          "t": "list",
          "items": [
            "身高。",
            "体型。",
            "肌肉。",
            "年龄外观。",
            "面部比例。",
            "手脚比例。",
            "身体结构。"
          ]
        },
        {
          "t": "h3",
          "text": "骨骼体系"
        },
        {
          "t": "p",
          "text": "MakeHuman 支持不同类型的骨骼配置，例如："
        },
        {
          "t": "table",
          "head": [
            "骨骼类型",
            "作用"
          ],
          "rows": [
            [
              "Default",
              "基础人体骨骼"
            ],
            [
              "Game Engine",
              "面向游戏引擎"
            ],
            [
              "Rigify",
              "Blender 专业绑定"
            ],
            [
              "Mixamo",
              "Mixamo 动画兼容"
            ],
            [
              "CMU MB",
              "动作捕捉研究相关骨骼"
            ]
          ]
        },
        {
          "t": "p",
          "text": "具体可用配置取决于 MakeHuman / MPFB 版本和安装的骨骼资源。"
        },
        {
          "t": "note",
          "text": "推荐场景： 需要批量生成普通人形 NPC、基础人体模型和游戏测试角色。"
        },
        {
          "t": "h2",
          "text": "11. Unreal Mannequin"
        },
        {
          "t": "lead",
          "name": "Unreal Engine Mannequin",
          "tag": "游戏引擎标准角色"
        },
        {
          "t": "list",
          "items": [
            "开发商：Epic Games",
            "使用平台：Unreal Engine",
            "主要版本：UE4 Mannequin、",
            "类型：游戏人形骨骼体系"
          ]
        },
        {
          "t": "p",
          "text": "Unreal Mannequin 是游戏开发中非常重要的一套人形骨骼体系。"
        },
        {
          "t": "p",
          "text": "尤其是 UE5 的 Manny 和 Quinn，是 Unreal Engine 5 常见的人形角色参考。"
        },
        {
          "t": "h3",
          "text": "主要结构"
        },
        {
          "t": "code",
          "text": "root\n└── pelvis\n    └── spine_01\n        └── spine_02\n            └── spine_03\n                ├── neck_01\n                │   └── head\n                ├── clavicle_l\n                │   └── upperarm_l\n                │       └── lowerarm_l\n                │           └── hand_l\n                └── clavicle_r\n                    └── upperarm_r\n                        └── lowerarm_r\n                            └── hand_r\n    ├── thigh_l\n    │   └── calf_l\n    │       └── foot_l\n    │           └── ball_l\n    └── thigh_r"
        },
        {
          "t": "p",
          "text": "实际 Manny 骨骼还有更多手指、辅助和变形骨骼。"
        },
        {
          "t": "h3",
          "text": "核心功能"
        },
        {
          "t": "list",
          "items": [
            "Skeletal Mesh。",
            "Skeleton Asset。",
            "Animation Blueprint。",
            "Animation Montage。",
            "Blend Space。",
            "IK Rig。",
            "IK Retargeter。",
            "Control Rig。",
            "Root Motion。"
          ]
        },
        {
          "t": "h3",
          "text": "UE4 与 UE5 的区别"
        },
        {
          "t": "table",
          "head": [
            "对比",
            "UE4 Mannequin",
            "UE5 Manny"
          ],
          "rows": [
            [
              "骨骼体系",
              "UE4 经典体系",
              "UE5 新体系"
            ],
            [
              "骨骼命名",
              "UE4 命名",
              "新命名体系"
            ],
            [
              "骨骼数量",
              "相对较少",
              "有更多辅助骨骼"
            ],
            [
              "动画兼容",
              "UE4 资源生态",
              "UE5 新动画资源"
            ],
            [
              "重定向",
              "Retarget Manager",
              "IK Rig / IK Retargeter"
            ]
          ]
        },
        {
          "t": "p",
          "text": "UE5 可以通过 IK Retargeter 将不同骨骼体系的角色动画互相转换，不要求两套骨骼具有完全相同的命名。"
        },
        {
          "t": "note",
          "text": "推荐场景： Unreal Engine 游戏项目，尤其是需要使用官方角色动画、动画蓝图和角色控制系统的项目。"
        },
        {
          "t": "h2",
          "text": "12. Unity Humanoid"
        },
        {
          "t": "lead",
          "name": "Unity Humanoid",
          "tag": "跨角色动画重定向"
        },
        {
          "t": "list",
          "items": [
            "开发商：Unity",
            "类型：人形骨骼映射规范",
            "核心机制：Avatar Mapping",
            "主要用途：跨角色动画复用"
          ]
        },
        {
          "t": "p",
          "text": "这是 15 种里面最需要理解的一个概念。"
        },
        {
          "t": "p",
          "text": "Unity Humanoid 并不是像 Mixamo 那样规定一套固定的骨骼树。"
        },
        {
          "t": "p",
          "text": "它通过 Avatar 将不同角色的骨骼映射到 Unity 统一的人形骨骼定义。"
        },
        {
          "t": "p",
          "text": "例如："
        },
        {
          "t": "code",
          "text": "Unity Humanoid Avatar\n│\n├── Hips\n├── Spine\n├── Chest\n├── Neck\n├── Head\n│\n├── Left Arm\n│   ├── Upper Arm\n│   ├── Lower Arm\n│   └── Hand\n│\n├── Right Arm\n│\n├── Left Leg\n│   ├── Upper Leg\n│   ├── Lower Leg\n│   └── Foot\n│\n└── Right Leg"
        },
        {
          "t": "h3",
          "text": "核心机制"
        },
        {
          "t": "p",
          "text": "① Avatar"
        },
        {
          "t": "p",
          "text": "建立角色骨骼和 Unity 人形骨骼之间的映射。"
        },
        {
          "t": "p",
          "text": "② Retargeting"
        },
        {
          "t": "p",
          "text": "让角色 A 的动画可以应用到角色 B。"
        },
        {
          "t": "p",
          "text": "③ IK"
        },
        {
          "t": "p",
          "text": "可以通过 Animation Rigging 等工具进一步实现角色肢体控制。"
        },
        {
          "t": "p",
          "text": "④ Muscle System"
        },
        {
          "t": "p",
          "text": "Unity 将人形关节动作抽象为肌肉参数，便于在不同身材的角色之间复用动作。"
        },
        {
          "t": "h3",
          "text": "优缺点"
        },
        {
          "t": "p",
          "text": "优点："
        },
        {
          "t": "list",
          "items": [
            "方便共享动画。",
            "支持不同角色比例。",
            "适合大量 NPC。",
            "可直接使用 Unity Asset Store 中的 Humanoid 动画资源。"
          ]
        },
        {
          "t": "p",
          "text": "缺点："
        },
        {
          "t": "list",
          "items": [
            "主要针对标准双足人形。",
            "非人形怪物不适合强行设置 Humanoid。",
            "特殊骨骼需要额外处理。",
            "骨骼映射错误可能产生扭曲。"
          ]
        },
        {
          "t": "p",
          "text": "Unity 官方也明确说明，Humanoid Avatar 是跨角色动画重定向的基础。"
        },
        {
          "t": "p",
          "text": "Manual: Retargeting of Humanoid animations"
        },
        {
          "t": "note",
          "text": "推荐场景： Unity 人形游戏项目，尤其是需要让大量不同角色共享同一套攻击、移动、跳跃动画的项目。"
        },
        {
          "t": "h2",
          "text": "13. HumGen Rig"
        },
        {
          "t": "lead",
          "name": "HumGen",
          "tag": "Blender 人体生成"
        },
        {
          "t": "list",
          "items": [
            "平台：Blender",
            "类型：人体生成与自动绑定",
            "主要用途：快速创建数字人",
            "特色：人体参数、面部、服装、骨骼"
          ]
        },
        {
          "t": "p",
          "text": "HumGen 与 MakeHuman 有相似的定位，但更强调 Blender 内部的数字人制作工作流。"
        },
        {
          "t": "h3",
          "text": "主要特点"
        },
        {
          "t": "list",
          "items": [
            "快速生成人体。",
            "修改身材比例。",
            "修改面部形态。",
            "生成不同人物外观。",
            "角色绑定。",
            "面部控制。",
            "服装和配件。",
            "导出 Unity、Unreal 等平台使用的骨骼。"
          ]
        },
        {
          "t": "h3",
          "text": "HumGen Rig 的特点"
        },
        {
          "t": "p",
          "text": "HumGen 的 Blender 控制 Rig 与最终游戏骨骼不是同一个东西。"
        },
        {
          "t": "p",
          "text": "它可以将复杂的 Blender 控制系统转换成目标游戏引擎需要的标准骨骼层级。"
        },
        {
          "t": "p",
          "text": "例如："
        },
        {
          "t": "code",
          "text": "HumGen Blender Rig\n       │\n       ├── Control Bones\n       ├── Constraints\n       ├── Drivers\n       └── Face Rig\n              │\n              ▼"
        },
        {
          "t": "code",
          "text": "Skeleton Export\n              │\n       ┌──────┼──────┐\n       ▼      ▼      ▼"
        },
        {
          "t": "p",
          "text": "Unity  Unreal  Mixamo"
        },
        {
          "t": "p",
          "text": "导出时会清理控制骨骼、烘焙变换，并调整蒙皮权重。"
        },
        {
          "t": "note",
          "text": "推荐场景： 需要批量创建写实 NPC、数字人和大量普通人形角色。"
        },
        {
          "t": "h2",
          "text": "14. Cascadeur"
        },
        {
          "t": "lead",
          "name": "Cascadeur",
          "tag": "物理辅助动画"
        },
        {
          "t": "list",
          "items": [
            "类型：3D 动画制作工具",
            "核心功能：AI 辅助姿势、物理模拟、动画编辑",
            "主要用途：战斗动作、跑跳、翻滚、打击动画"
          ]
        },
        {
          "t": "p",
          "text": "Cascadeur 不是传统意义上的骨骼标准。"
        },
        {
          "t": "p",
          "text": "它的主要价值是：让角色动画更加符合物理规律。"
        },
        {
          "t": "h3",
          "text": "核心功能"
        },
        {
          "t": "list",
          "items": [
            "AutoPosing：自动辅助角色姿势。",
            "AutoPhysics：物理辅助动画。",
            "Ballistic Trajectories：抛物线轨迹。",
            "Center of Mass：重心控制。",
            "Animation Retargeting：动画重定向。",
            "Graph Editor：动画曲线编辑。",
            "Inbetweening：关键帧之间的动画补间。"
          ]
        },
        {
          "t": "h3",
          "text": "特别适合的动作"
        },
        {
          "t": "p",
          "text": "踢击动作"
        },
        {
          "t": "p",
          "text": "拳击动作"
        },
        {
          "t": "p",
          "text": "跳跃动作"
        },
        {
          "t": "p",
          "text": "闪避翻滚"
        },
        {
          "t": "h3",
          "text": "Cascadeur 与其他工具的区别"
        },
        {
          "t": "table",
          "head": [
            "对比",
            "Rigify / ARP",
            "Cascadeur"
          ],
          "rows": [
            [
              "主要用途",
              "角色绑定",
              "动画制作"
            ],
            [
              "生成骨骼",
              "是",
              "可以建立或编辑 Rig"
            ],
            [
              "IK/FK",
              "是",
              "支持 Rig 控制"
            ],
            [
              "物理辅助",
              "依赖其他系统",
              "核心功能"
            ],
            [
              "动画重定向",
              "ARP 等支持",
              "支持"
            ],
            [
              "游戏动画制作",
              "间接支持",
              "非常适合"
            ]
          ]
        },
        {
          "t": "p",
          "text": "Cascadeur 官方也明确区分 Skeleton 和 Rig：Skeleton 负责角色变形，Rig 提供动画控制器。"
        },
        {
          "t": "note",
          "text": "推荐场景： 游戏 Boss 战斗动画、近战攻击、闪避、翻滚、跳跃、受击和死亡动作。"
        },
        {
          "t": "h2",
          "text": "15. VDMocap"
        },
        {
          "t": "p",
          "text": "这里需要特别说明：VDMocap 不是目前能够明确对应到某个主流标准骨骼体系的通用名称。"
        },
        {
          "t": "p",
          "text": "我没有找到足够可靠的官方资料来确认它的准确产品身份，因此不建议直接把它定义成一套固定的骨骼结构。"
        },
        {
          "t": "p",
          "text": "它可能涉及以下几个概念："
        },
        {
          "t": "table",
          "head": [
            "可能指代",
            "说明"
          ],
          "rows": [
            [
              "VMD",
              "MMD 的动作文件格式"
            ],
            [
              "Mocap",
              "Motion Capture，动作捕捉技术"
            ],
            [
              "VMD Mocap",
              "将动作捕捉数据转换为 MMD VMD 动画"
            ],
            [
              "特定 VDMocap 项目",
              "可能是某个插件、工具或开源仓库"
            ]
          ]
        },
        {
          "t": "p",
          "text": "如果你指的是 VMD Mocap，那么需要区分："
        },
        {
          "t": "list",
          "items": [
            "PMX：角色模型及骨骼、物理等信息。",
            "VMD：角色动作和表情关键帧。",
            "Mocap：动作捕捉数据。",
            "Retargeting：把捕捉数据转换到目标角色骨骼。"
          ]
        },
        {
          "t": "p",
          "text": "这几者不是同一种东西。"
        },
        {
          "t": "p",
          "text": "如果你提供 VDMocap 对应的 GitHub 地址、软件截图或者完整名称，我可以进一步确认它的骨骼结构、数据格式和使用方式。"
        }
      ]
    },
    {
      "id": "sec-3",
      "num": "03",
      "title": "三、15 种体系的核心区别",
      "blocks": [
        {
          "t": "p",
          "text": "前面逐一介绍了各自的特点。实际选择时，更重要的是弄清楚它们在骨骼结构、动画控制和游戏引擎兼容性上的差异。"
        },
        {
          "t": "h2",
          "text": "1. 骨骼结构和控制能力对比"
        },
        {
          "t": "table",
          "head": [
            "名称",
            "标准人形骨骼",
            "IK/FK",
            "面部控制",
            "物理辅助",
            "自动绑定"
          ],
          "rows": [
            [
              "Mixamo",
              "是",
              "有限",
              "弱",
              "否",
              "是"
            ],
            [
              "Rigify",
              "否，组件式",
              "强",
              "支持",
              "需扩展",
              "是"
            ],
            [
              "ARP",
              "可配置",
              "强",
              "支持相关工作流",
              "需扩展",
              "是"
            ],
            [
              "Biped",
              "是",
              "支持",
              "需扩展",
              "有限",
              "是"
            ],
            [
              "MMD",
              "特殊体系",
              "强",
              "Morph",
              "有",
              "需工具"
            ],
            [
              "CC4",
              "自有体系",
              "支持",
              "强",
              "支持相关变形",
              "是"
            ],
            [
              "DAZ Rig",
              "自有体系",
              "支持",
              "强",
              "支持相关变形",
              "角色内置"
            ],
            [
              "DAZ MHX",
              "基于 DAZ 转换",
              "强",
              "依赖转换配置",
              "需扩展",
              "转换生成"
            ],
            [
              "CloudRig",
              "组件式",
              "强",
              "支持",
              "需扩展",
              "是"
            ],
            [
              "MakeHuman",
              "多种配置",
              "取决于 Rig",
              "有限",
              "否",
              "是"
            ],
            [
              "Unreal Mannequin",
              "是",
              "支持",
              "需额外系统",
              "引擎支持",
              "否"
            ],
            [
              "Unity Humanoid",
              "映射规范",
              "引擎支持",
              "需额外系统",
              "引擎支持",
              "否"
            ],
            [
              "HumGen Rig",
              "自有体系",
              "支持",
              "支持",
              "需扩展",
              "是"
            ],
            [
              "Cascadeur",
              "不固定",
              "支持 Rig 控制",
              "依赖角色",
              "强",
              "不是主要用途"
            ],
            [
              "VDMocap",
              "未确认",
              "未确认",
              "未确认",
              "未确认",
              "未确认"
            ]
          ]
        },
        {
          "t": "note",
          "text": "说明："
        },
        {
          "t": "list",
          "items": [
            "IK/FK 是绑定系统的控制能力，不代表导出的游戏骨骼一定保留 IK 控制器。",
            "面部控制可能通过骨骼、BlendShape、Morph 或其他变形机制实现。",
            "物理辅助也分为骨骼物理、布料物理、刚体物理和动画物理，不能简单视为同一种功能。"
          ]
        },
        {
          "t": "h2",
          "text": "2. 游戏引擎兼容性对比"
        },
        {
          "t": "p",
          "text": "这是选择骨骼时非常重要的指标。"
        },
        {
          "t": "table",
          "head": [
            "骨骼体系",
            "Unity",
            "Unreal",
            "Blender",
            "动画资源复用"
          ],
          "rows": [
            [
              "Mixamo",
              "很好",
              "很好",
              "很好",
              "高"
            ],
            [
              "Rigify",
              "需要导出处理",
              "需要导出处理",
              "原生",
              "需要重定向"
            ],
            [
              "ARP",
              "很好",
              "很好",
              "原生",
              "支持 Remap"
            ],
            [
              "Biped",
              "需要转换",
              "需要转换",
              "需要导入处理",
              "需要转换"
            ],
            [
              "MMD",
              "需要插件适配",
              "需要插件适配",
              "很好",
              "需要转换"
            ],
            [
              "CC4",
              "很好",
              "很好",
              "很好",
              "高"
            ],
            [
              "DAZ Rig",
              "需要转换",
              "需要转换",
              "很好",
              "需要重定向"
            ],
            [
              "DAZ MHX",
              "需要转换",
              "需要转换",
              "原生工作流",
              "需要重定向"
            ],
            [
              "CloudRig",
              "需要导出处理",
              "需要导出处理",
              "原生",
              "需要重定向"
            ],
            [
              "MakeHuman",
              "很好",
              "很好",
              "很好",
              "取决于导出骨骼"
            ],
            [
              "Unreal Mannequin",
              "需要转换",
              "原生",
              "需要导入处理",
              "高"
            ],
            [
              "Unity Humanoid",
              "原生",
              "需要转换",
              "需要导出处理",
              "高"
            ],
            [
              "HumGen Rig",
              "很好",
              "很好",
              "原生",
              "高"
            ],
            [
              "Cascadeur",
              "支持",
              "支持",
              "可通过中间流程",
              "支持重定向"
            ],
            [
              "VDMocap",
              "未确认",
              "未确认",
              "未确认",
              "未确认"
            ]
          ]
        },
        {
          "t": "note",
          "text": "注意：这里的兼容性是工作流层面的评价，不代表所有版本都能直接导入。特别是 Rigify、CloudRig、MMD、DAZ，通常需要先进行骨骼清理、动画烘焙和格式转换。"
        }
      ]
    },
    {
      "id": "sec-4",
      "num": "04",
      "title": "四、最重要的概念：骨骼、绑定、动画和重定向",
      "blocks": [
        {
          "t": "p",
          "text": "很多 3D 项目容易把这四个概念混淆。"
        },
        {
          "t": "p",
          "text": "实际上它们是不同的技术层次。"
        },
        {
          "t": "h2",
          "text": "完整角色动画技术体系"
        },
        {
          "t": "stack",
          "items": [
            {
              "title": "1. Skeleton（骨骼）",
              "desc": "定义骨骼层级、关节位置、父子关系",
              "tools": "Mixamo / Unreal / Unity / MMD / DAZ"
            },
            {
              "title": "2. Rigging（角色绑定）",
              "desc": "控制器、IK/FK、约束、驱动器、蒙皮权重",
              "tools": "Rigify / ARP / CloudRig / MHX"
            },
            {
              "title": "3. Animation（动画）",
              "desc": "关键帧、动作曲线、物理辅助、动作捕捉",
              "tools": "Mixamo / Cascadeur / MMD / Biped"
            },
            {
              "title": "4. Retargeting（动画重定向）",
              "desc": "将源角色动作映射到目标角色",
              "tools": "ARP Remap / Unity Avatar / Unreal IK Retargeter"
            },
            {
              "title": "5. Runtime（游戏运行）",
              "desc": "动画状态机、混合、IK、Root Motion、物理",
              "tools": "Unity Animator / Unreal Animation Blueprint"
            }
          ]
        },
        {
          "t": "p",
          "text": "例如："
        },
        {
          "t": "p",
          "text": "你使用 Blender Rigify 制作一个英雄角色："
        },
        {
          "t": "list",
          "items": [
            "Rigify 生成控制骨骼。",
            "在 Blender 中制作攻击动作。",
            "将动画烘焙到 DEF 变形骨骼。",
            "导出 FBX。",
            "导入 Unity。",
            "设置 Humanoid Avatar。",
            "通过 Unity Animator 播放攻击动画。"
          ]
        },
        {
          "t": "p",
          "text": "这就是一个完整的角色动画生产流程。"
        }
      ]
    },
    {
      "id": "sec-5",
      "num": "05",
      "title": "五、不同角色应该选择什么骨骼？",
      "blocks": [
        {
          "t": "p",
          "text": "这里按照角色类型进行选择。"
        },
        {
          "t": "roles",
          "items": [
            {
              "name": "普通人形英雄",
              "rec": "Mixamo、ARP、Rigify、Unreal Mannequin、Unity Humanoid。",
              "why": "标准人体比例，容易共享跑步、攻击、跳跃和受击动画。"
            }
          ]
        },
        {
          "t": "roles",
          "items": [
            {
              "name": "大型 Boss、异形怪物",
              "rec": "Rigify、CloudRig、ARP。",
              "why": "需要额外骨骼、尾巴、触手、翅膀、颈部和复杂身体控制。"
            }
          ]
        },
        {
          "t": "roles",
          "items": [
            {
              "name": "写实数字人",
              "rec": "CC4、DAZ Rig、HumGen。",
              "why": "面部表情、人体比例、皮肤变形、手指控制等方面比较成熟。Sparkle【3Dモデル】 - yuyu - BOOTH"
            }
          ]
        },
        {
          "t": "roles",
          "items": [
            {
              "name": "二次元角色",
              "rec": "MMD、Rigify、CC4。",
              "why": "MMD 有成熟的二次元动作和表情生态。"
            }
          ]
        },
        {
          "t": "roles",
          "items": [
            {
              "name": "战斗动作角色",
              "rec": "ARP + Cascadeur + Unreal / Unity。",
              "why": "绑定、动作制作、物理辅助和游戏引擎运行形成完整链路。"
            }
          ]
        }
      ]
    },
    {
      "id": "sec-6",
      "num": "06",
      "title": "六、如果需要从图片生成 3D 模型，应该如何选择？",
      "blocks": [
        {
          "t": "p",
          "text": "这是一个很重要的应用场景。"
        },
        {
          "t": "p",
          "text": "现在常见的 AI 3D 生成平台，例如 Tripo、Meshy、Rodin 等，生成的角色模型通常首先是静态 Mesh，不一定带有符合游戏标准的骨骼。"
        },
        {
          "t": "p",
          "text": "因此需要增加自动绑定和骨骼转换环节。"
        },
        {
          "t": "h2",
          "text": "推荐的完整工作流"
        },
        {
          "t": "h2",
          "text": "AI 图片 → 3D 游戏角色"
        },
        {
          "t": "link",
          "label": "sketchfab.com",
          "href": "https://sketchfab.com/3d-models/glenwys-cos20gloryleague-kings-raid-b1483d9e614649e186ac3e09a90cbd0b?utm_source=chatgpt.com"
        },
        {
          "t": "steps",
          "items": [
            {
              "num": "1",
              "title": "AI 生成角色图片",
              "lines": [
                {
                  "text": "角色概念图、正面图、侧面图、背面图"
                },
                {
                  "link": "tripo3d.ai",
                  "href": "https://www.tripo3d.ai/blog/rig-ai-generated-character-for-mixamo?utm_source=chatgpt.com"
                }
              ]
            },
            {
              "num": "2",
              "title": "图片生成 3D 模型",
              "lines": [
                {
                  "text": "Tripo / Meshy / Rodin"
                },
                {
                  "link": "docs.unity3d.com",
                  "href": "https://docs.unity3d.com/430/Documentation/Manual/BlenderAndRigify.html?utm_source=chatgpt.com"
                }
              ]
            },
            {
              "num": "3",
              "title": "自动绑定骨骼",
              "lines": [
                {
                  "text": "Mixamo / ARP / Rigify"
                },
                {
                  "link": "cascadeur.com",
                  "href": "https://cascadeur.com/blog/general/first-steps-on-the-way-to-becoming-a-3d-animator?utm_source=chatgpt.com"
                }
              ]
            },
            {
              "num": "4",
              "title": "动作制作",
              "lines": [
                {
                  "text": "Mixamo / Cascadeur / 动作捕捉"
                },
                {
                  "link": "estudioarquitectos.cl",
                  "href": "https://estudioarquitectos.cl/2025/11/06/unreal-engine-5-redisena-y-reconstruye-los-secretos-detras-de-echo/?utm_source=chatgpt.com"
                }
              ]
            },
            {
              "num": "5",
              "title": "导入游戏引擎",
              "lines": [
                {
                  "text": "Unity Humanoid / Unreal Mannequin"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "sec-7",
      "num": "07",
      "title": "七、我更推荐的三套技术组合",
      "blocks": [
        {
          "t": "plans",
          "items": [
            {
              "label": "方案 A",
              "tag": "推荐",
              "sub": "AI 生成角色 + Blender + Unity / Unreal",
              "combo": "ARP + Cascadeur + Humanoid"
            }
          ]
        },
        {
          "t": "list",
          "items": [
            "Tripo / Meshy：生成 3D 模型。",
            "ARP：自动绑定、调整权重。",
            "Cascadeur：制作攻击、闪避、跳跃和死亡动作。",
            "Unity Humanoid 或 Unreal IK Retargeter：动作重定向。",
            "FBX：角色和动画资源交换。"
          ]
        },
        {
          "t": "p",
          "text": "适合大量原创人形英雄和游戏 Boss。"
        },
        {
          "t": "plans",
          "items": [
            {
              "label": "方案 B",
              "tag": "Blender 专业动画",
              "sub": "复杂怪物 + 高质量动画",
              "combo": "CloudRig + Rigify + Cascadeur"
            }
          ]
        },
        {
          "t": "list",
          "items": [
            "CloudRig：复杂怪物绑定。",
            "Rigify：自定义骨骼组件。",
            "Cascadeur：物理辅助动画。",
            "Unity / Unreal：最终运行。"
          ]
        },
        {
          "t": "p",
          "text": "适合多足怪物、触手怪、巨型 Boss。"
        },
        {
          "t": "plans",
          "items": [
            {
              "label": "方案 C",
              "tag": "大量标准 NPC",
              "sub": "自动生成 + 批量绑定 + 动画复用",
              "combo": "MakeHuman / HumGen + Mixamo + Unity Humanoid"
            }
          ]
        },
        {
          "t": "list",
          "items": [
            "MakeHuman / HumGen：批量生成人体。",
            "Mixamo：快速获取基础动作。",
            "Unity Humanoid：统一 Avatar。",
            "Animator：动作状态机和混合。"
          ]
        },
        {
          "t": "p",
          "text": "适合大量 NPC、普通敌人和人群角色。"
        }
      ]
    },
    {
      "id": "sec-8",
      "num": "08",
      "title": "八、最终选型建议",
      "blocks": [
        {
          "t": "p",
          "text": "如果从长期游戏项目的角度考虑，我建议不要让这 15 种骨骼体系同时成为项目的最终骨骼标准。"
        },
        {
          "t": "p",
          "text": "应该采用："
        },
        {
          "t": "p",
          "text": "创作骨骼（Authoring Rig）+ 游戏骨骼（Runtime Skeleton）+ 动画重定向（Retargeting） 的三层架构。"
        },
        {
          "t": "table",
          "head": [
            "层次",
            "推荐体系",
            "目的"
          ],
          "rows": [
            [
              "角色制作",
              "Rigify / ARP / CloudRig",
              "提高绑定和动画制作效率"
            ],
            [
              "角色生成",
              "CC4 / DAZ / HumGen / MakeHuman",
              "生成不同类型角色"
            ],
            [
              "动作来源",
              "Mixamo / Cascadeur / MMD / Mocap",
              "获取和制作动画"
            ],
            [
              "统一人形规范",
              "Unity Humanoid / Unreal IK Rig",
              "统一动画映射"
            ],
            [
              "游戏最终骨骼",
              "自定义 Runtime Skeleton",
              "控制游戏运行时骨骼规模"
            ]
          ]
        },
        {
          "t": "note",
          "text": "特别重要： 不要直接将 Rigify 或 CloudRig 的全部控制骨骼导入游戏引擎。应当只导出必要的变形骨骼、Root 和需要的辅助骨骼，并烘焙动画。"
        },
        {
          "t": "p",
          "text": "如果要建立一个支持人形英雄、异形 Boss、AI 生成角色、动作捕捉和动画复用的 3D 游戏项目，这种分层方式会比依赖单一骨骼系统更可靠。"
        }
      ]
    },
    {
      "id": "sec-9",
      "num": "09",
      "title": "九、官方资料和进一步学习",
      "blocks": [
        {
          "t": "table",
          "head": [
            "技术",
            "官方资料"
          ],
          "rows": [
            [
              "Mixamo",
              "Adobe Mixamo"
            ],
            [
              "Rigify",
              "Blender Rigify"
            ],
            [
              "ARP",
              "Auto-Rig Pro"
            ],
            [
              "Biped",
              "Autodesk 3ds Max"
            ],
            [
              "MMD",
              "Blender MMD Tools"
            ],
            [
              "CC4",
              "CC4 Manual"
            ],
            [
              "DAZ",
              "Diffeomorphic"
            ],
            [
              "CloudRig",
              "CloudRig"
            ],
            [
              "MakeHuman",
              "MakeHuman"
            ],
            [
              "Unreal",
              "Unreal Retargeting"
            ],
            [
              "Unity",
              "Unity Humanoid"
            ],
            [
              "HumGen",
              "HumGen Documentation"
            ],
            [
              "Cascadeur",
              "Cascadeur Manual"
            ]
          ]
        },
        {
          "t": "note",
          "text": "我的核心建议： 对于 AI 生成 3D 角色的游戏开发流程，优先研究 ARP、Rigify、Mixamo、Cascadeur、Unity Humanoid 和 Unreal Mannequin。这六项基本覆盖了从静态模型到绑定、动作制作、重定向和游戏运行的主要技术环节。"
        }
      ]
    }
  ],
  "intro": [
    {
      "t": "p",
      "text": "在 3D 角色制作、动画制作、游戏开发和动作捕捉流程中，Mixamo、Rigify、ARP、Biped、MMD、CC4、DAZ Rig、Unreal Mannequin、Unity Humanoid 等名称经常被放在一起比较。"
    },
    {
      "t": "p",
      "text": "但需要先明确一个概念：这些名称并不全部属于同一种骨骼系统。"
    },
    {
      "t": "p",
      "text": "它们实际上可以分为五大类："
    },
    {
      "t": "list",
      "items": [
        "通用角色骨骼规范：规定角色骨骼的结构、命名、关节映射，例如 Unity Humanoid。",
        "角色绑定（Rigging）系统：用于创建骨骼、控制器、IK/FK、面部控制等，例如 Rigify、ARP、CloudRig。",
        "商业角色骨骼体系：与特定角色制作软件、角色生成器绑定，例如 CC4、DAZ、MakeHuman。",
        "动画与游戏引擎骨骼体系：面向动画资源生产、游戏运行和动画重定向，例如 Mixamo、Unreal Mannequin、Biped。",
        "动作捕捉与动画制作工具：负责动作生成、动作编辑、动作捕捉数据处理，例如 Cascadeur、VDMocap。"
      ]
    },
    {
      "t": "p",
      "text": "理解这些区别非常重要，因为一个角色即使拥有完整的骨骼，也不意味着它能够直接使用其他系统的动画。"
    }
  ]
}
