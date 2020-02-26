// pages/diease/xihongshi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    data_diease: [{
      diease: "番茄",
      diease_name: '白粉病',
      diease_bingyin: ' 病原菌无性阶段为半知菌亚门的拟粉孢属〔Oidiopsistaurica(Lév.)Salm.〕；有性阶段为子囊菌亚门的内丝白粉菌属〔Leveillula taurica(Lév.)Arn.〕。在华南地区，病菌有性阶段不常见，主要以无性态分生孢子作为初侵与再侵接种体，依靠气流辗转传播危害，完成病害周年循环，无明显越冬现象。通常温暖潮湿的天气及环境有利于发展，尤其在温室或大棚保护地栽培，病害发生普通而较严重。病菌孢子耐旱力特强，在高温干燥天气亦可侵染致病。品种间抗性差异尚待调查。',
      diease_img: "../../images/plant/fanqiebanfenbing.jpg",
      diease_zhengzhuang: '病害发生在叶片、叶柄、茎及果实上。叶片染病，初在叶面出现褪绿色小点，后扩大为不规则形粉斑，表面生白色絮状物，是病菌的菌丝、分生孢子梗及分生孢子。起初霉层稀疏，渐增多呈毡状，病斑扩大连片或覆盖全叶面。有时粉斑也可发生于叶背面，其正面为边缘不明显的黄绿色斑，后期病叶变褐枯死。叶柄、茎、果实染病时，病部表面也产生白粉状霉斑。',
      diease_fangan: '1.选育抗白粉病品种，加强棚室温湿度管理。采收后及时清除病残体，减少越冬菌源。发病初期棚室可选用粉尘法或烟雾法，于傍晚喷撒10%多百粉尘剂，每亩每次1千克，或施用45%百菌清烟剂，每亩每次250克，用暗火点燃熏一夜。2.露地或棚室可选用15 % 三唑酮(粉锈宁)可湿性粉剂500倍液、40% 福星乳油10000～8000倍液、10% 世高水溶性颗粒剂1500倍液、30% 特富灵可湿性粉剂1500～2000倍液、50% 硫磺悬浮剂200～300倍液，或50% 嗪胺灵乳油500～600倍液、2% 武夷菌素水剂或2 % 农抗120水剂150倍液、25% 敌力脱乳油3000倍液、15% 三唑酮(粉锈宁)可湿性粉剂2000倍液加25% 敌力脱乳油4000倍液，隔7～15d1次，连续防治2～3次。'
    }, {
        diease: "番茄",
        diease_name: '疮痂病',
        diease_bingyin: '油菜黄单胞菌疮斑致病型，或称辣淑疮痂致病变种，属细菌。菌体短杆状，两端钝圆，大小1.0-1.5×0.6-0.7微米，端部具1根鞭毛，革兰氏染色阴性，发育适温27—30℃，最高40℃，最低5℃，56℃经10分钟致死。除侵染番茄外，还为害甜（辣）椒。',
        diease_img: "../../images/plant/fanqiechuangjiabing.jpg",
        diease_zhengzhuang: ' 主要危害茎、叶和果实。病叶早期在叶背出现水浸状小斑，逐渐扩展近圆形或连结成不规则形黄褐色病斑，粗糙不平，病斑周围有褪绿晕圈，后期干枯质脆。茎部先出现水浸状褪绿斑点，后上下扩展呈长椭圆形，中央稍凹陷的黑褐色病斑；病果表面出现水浸状褪绿斑点，逐渐扩展，初期有油浸亮光，后呈黄褐色或黑褐色木栓化、直径0.2-0.5厘米大小近圆形粗糙枯死斑，有的相互连结成不规则形大斑块，果柄与果实连接处受害时，易落果。',
        diease_fangan: '  1、番茄种植地实行与十字花科作物或禾本科作物2～3年以上的轮作。设无病留种田或从无病单株采种。\n 2、番茄种子在播种前，用55℃温水中浸泡15分钟，然后转入冷水里冷却，晾干后再播种。或者用1∶10农用链霉素浸种30分钟。\n  3、番茄适时整枝打杈，及时清除病残体。雨季加强排水，降低田间湿度，保持田间通风透光。施足氮、磷、钾肥，增施菌肥、腐熟的优质有机肥，以活化土壤，增强植株的抗病能力。\n 4、在番茄疮痂病发病初期，及时喷施药剂防治，药剂可用：47%加瑞农可湿性粉剂600倍液、或72%的农用链霉素2000倍液、或77%氢氧化铜可湿性粉剂400～500倍液、或硫酸链霉素可溶粉剂4000～5000倍液、或2%春雷霉素液剂3~4克/公顷进行防治，每隔7~10天喷1次，连喷2~3次。'
      }, {
        diease: "番茄",
        diease_name: '早疫病',
        diease_bingyin: '早疫病是由茄链格孢菌侵染所致，在真菌分类中，属于半知菌亚门链格孢属。除发生在番茄上外，还可侵染马铃薯、茄子、辣椒等作物，其主要侵染体是分生孢子。这种棒状的分生孢子晕暗褐色，通过气流、微风、雨水溅流，传染到寄主上，通过气孔、伤口或者从表皮直接侵入。在体内繁殖多量的菌丝，然后产生孢子梗，进而产生分生孢子进行传播。一季作物收获后，病原以形成的菌丝体和分生孢子随病残组织落入土壤中进行越冬。有的分生孢子可残留在种皮上，随种子一起越冬。分生孢子比较顽固，通常条件下可存活1－1.5年。同时产生的活体菌丝可在1-45℃的广泛温度范围中生长，在26－28℃时，生长最快。侵入寄主后， 2－3天就可形成病斑。形成病斑后3－4天，在病斑上就可形成大量的分生孢子。由此而进行多次重复再侵染。在发病的各种条件中，主要条件是温度和湿度。从总的情况看，温度偏高、湿度偏大有利于发病。28－30℃时。分生孢子在水滴中35-45分钟的暂短时间内就可萌芽。初夏季节，如果多雨、多雾，分生孢子就形成的快而且多，病害就很易流行。在浙江地区一般是5月中、下旬为盛发期，在山东地区一般是6月上、中旬为盛发期。除去温、湿度条件外，发病与寄主生育期夫系也很密切。当植株进入1－3穗果膨大期时，在下部和中下部较老的叶片上开始发病，并发展迅速，然后随着叶片的向上逐渐老化而向上扩展，大量病斑和病原都存在于下部、中下部和中部植株上。当然，肥力差、管理粗放的地块发病更重。另外土质粘重者比土质砂性强的地块发病重。',
        diease_img: "../../images/plant/fanqiezaoyibing.jpg",
        diease_zhengzhuang: ' 主要危害叶片，也可危害幼苗、茎和果实。幼苗染病，在茎基部产番茄早疫病危害症状番茄早疫病危害症状生暗褐色病斑，稍凹陷有轮纹。成株期叶片被害，多从植株下部叶片向上发展，初呈水浸状暗绿色病斑，扩大后呈圆形或不规则形的轮纹斑，边缘多具浅绿色或黄色的晕环，中部呈同心轮纹，潮湿时病斑上长出黑色霉层（分生孢子及分生孢子梗），严重时叶片脱落；茎部染病，病斑多在分枝处及叶柄基部，呈褐色至深褐色不规则圆形或椭圆形病斑，凹陷，具同心轮纹，有时龟裂，严重时造成断枝。青果染病，多始于花萼附近，初为椭圆形或不规则形褐色或黑色斑，凹陷，后期果实开裂，病部较硬，密生黑色霉层。叶柄、果柄染病，病斑灰褐色，长椭圆形，稍凹陷。',
        diease_fangan: '1、加强栽培控病管理 （1）收获后彻底清园，销毁病残体，深翻晒土，高畦深沟种植。（2）避免与茄科作物连作或邻作。（3）结合整地施足充分腐熟的优质有机肥，开花结果后尤其注意不能脱肥，可适当增施磷钾肥，增强植株抗性。2、药剂防治 发病初期可选用下列药剂及时喷布：（1）75% 达科宁（百菌清）可湿性粉剂600倍液。（2）10% 世高水分散剂800~1000倍液，兼有预防和治疗效果。（3）30 % 氢氧化铜悬浮剂500倍液。（4）70 % 代森锰锌可湿性粉剂500~600倍液。隔7~10天喷一次，连续喷3~4次。 '
      },
      {
        diease: "番茄",
        diease_name: '晚疫病',
        diease_bingyin: '本病由疫霉菌(Phytophthora infestans（Mont.）De Bary)侵染所致。本菌属鞭毛菌亚门疫霉属真菌。菌丝无色，无隔膜，在寄主细胞间隙生长，以很少的丝状吸器伸入寄主细胞内吸取营养。病斑上的白霉是病菌的孢隔梗和孢子囊。孢囊梗3－5根成丛，由叶背气孔伸出；病薯上也能形成孢囊梗，由皮孔或伤口处外露。孢囊梗纤细，上部常有3－4个分枝，其顶端膨大形成孢子囊。当一个孢子囊形成后孢囊梗又继续生长，把第一个孢子囊推向一旁，呈侧生状，其顶端再生第二个孢子囊。这样每一分枝在短时间内可以陆续产生好几个孢子囊。凡曾着生过孢子囊的部分均肿胀，因此使孢囊梗的主梗和分枝先端普成粗细不匀的状态。孢子囊长可达1mm，基部宽约10um. 孢子囊无色单甩，卵圆形，大小为22－32×16－24um，顶端有乳头状突起，在低温高湿投机条件下能产生6－12个游动孢子，从孢子囊顶端乳头状突起处释放出来。游动孢子肾状，在凹入部位侧生两根鞭毛，在水中游动片刻后便失去鞭毛，不久萌发产生芽管侵入寄主。在高温下孢子囊直接萌发产生芽管侵入寄主。卵孢子膜厚，黄色，直径24－35um。此外，本菌也能在土壤中形成薄壁圆孢了和厚垣孢子。薄壁圆孢子直径为15－24um，褐色，均具有致病能力。番茄晚疫病菌的致力很强，有生理分化现象。',
        diease_img: "../../images/plant/fanqiewanyibing.jpg",
        diease_zhengzhuang: '  番茄晚疫病多为害叶片和果实，叶片从边缘出现水浸状腐烂生白色霉层，发病果实有暗褐色病斑，凹陷但不变软，长白色霉层。',
        diease_fangan: '（1）松脂合剂。使用时也按照以上两个节点，在花期前约一周左右及坐果后幼果约8天后使用，主要是避开盛花期和花转果的阶段。因为松脂合剂偏碱性了，而松脂合剂防治真菌性土传病害时较为单一，此处我推荐松脂合剂搭配石灰氮一起使用，石灰氮的比例为亩施用15--25公斤。（2）铜皂液。使用比例为1400～1800倍液。苗期使用时，和防治其他真菌性病害一起 。其次就是在坐花期前约半个月，比例为1600～2200倍液，坐果期1100～1500倍液，此时和硼酸更配哦。 '
      },
      {
        diease: "番茄",
        diease_name: '叶霉病',
        diease_bingyin: '  为Fulvia fulva（Cooke）Cif.，属半知菌亚门褐孢霉属，异名为黄枝孢菌Cladosporium fulvumCooke。分生孢子梗成束从气孔伸出，稍有分枝，初无色，后呈褐色，有1~10个隔膜，大部分细胞上部偏向一侧膨大。其上产生分生孢子，产孢细胞单芽生或多芽生，合轴式延伸。分生孢子串生，孢子链通常分枝，分生孢子圆柱形或椭圆形，初无色，单孢，后变为褐色，中间长出一个隔膜，形成2个细胞，分生孢子大小为14~38umx5~9um。',
        diease_img: "../../images/plant/fanqieyemeibing.jpg",
        diease_zhengzhuang: '  主要危害叶片，严重时也危害茎、花和果实，叶片发病，初期叶片正面出现黄绿色、边缘不明显的斑点，叶背面出现灰白色霉层，后霉层变为淡褐至深褐色；湿度大时，叶片表面病斑也可长出霉层。病害常由下部叶片先发病，逐渐向上蔓延，发病严重时霉层布满叶背，叶片卷曲，整株叶片呈黄褐色干枯。嫩茎和果柄上也可产生相似的病斑，花器发病易脱落。果实发病，果蒂附近或果面上形成黑色圆形或不规则斑块，硬化凹陷，不能食用。',
        diease_fangan: '移栽幼苗前，用45%百菌清烟剂进行室内消毒，发病初期及时用药防治，可采用粉尘法或烟剂熏烟，药剂可选用5%加瑞农粉尘剂、45%百菌清烟剂。喷雾要在上午进行，注意叶背着药，可选用10%世高水分散粒剂1000倍液、2%武夷霉素水剂150倍液、60%防霉宝超微粉剂600倍液、47%加瑞农可湿性粉剂600～800倍液等喷雾，7～8天喷1次，连喷3次，注意交替用药，防止产生抗药性。在喷药时，菜农要注意重点的喷洒部位。叶霉病的病菌是在土壤里的病残体上存活，番茄开始发生叶霉病都是在植株的下部叶片。在一个棚内靠近南面的棚脚处的番茄最先发病，因此在发病前喷药时要重点照顾植株的下部叶片和大棚南面的植株。在发病后喷药要重点保护植株中上部的功能叶片。 '
      },
      {
        diease: "番茄",
        diease_name: '斑点病',
        diease_bingyin: '   番茄匍柄霉（Stemphylium lycopersici(Enjoji)Yamamoto），属半知菌亚门真菌。分生孢子梗大小140×6～7微米，膨大部位直径8～10微米；分生孢子短锥状，具横隔膜1～8个，若干 个纵隔膜，通常在3条主横隔处缢缩。光滑或具微瘤，大小50～74×16～23微米。',
        diease_img: "../../images/plant/fanqiebandianbing.jpg",
        diease_zhengzhuang: '番茄（匍柄霉）斑点病主要危害叶片。初生绿褐色水浸状小斑点，后扩大，周缘黑褐色，中间灰褐色，大小 2～3毫米，病斑圆形或近圆形，病斑周围形成不规则形黄化区，后期病斑中间穿孔，叶片黄化枯死或脱落。',
        diease_fangan: ' 1、采用高畦栽培方法，及时排除田间积水，做好田园清洁，及早摘除病叶，彻底清除病株残体。2、避免过量施用氮肥，增施磷钾肥，以提高抗病性。并及时清除病残体。3、合理密植，清沟排渍，增施磷钾肥和有机肥，避免氮肥过量。重病地与非茄果类、瓜类、豆类蔬菜进行2～3年轮作。4、在番茄斑点病发病初期开始喷洒36%甲基硫菌灵悬浮剂或50%混杀浮剂500倍液，40%多•硫悬浮剂600倍液、50%复方甲基硫菌灵可湿性粉剂800~900倍液、50%多菌灵可湿性粉剂1000倍液加75%百菌清可湿性粉剂1000倍液，隔10天左右1次，连续防治2~3次。'
},
      {
        diease: "番茄",
        diease_name: '斑枯病',
        diease_bingyin: '  番茄斑枯病菌是番茄壳针孢菌Septoria lycopersici，属半知菌亚门真菌。分生孢子器球形至扁球肜，黑色，初埋生于寄主表皮下，后部分突破表皮外露，呈小黑点状。其内生有大量分生孢子。分生孢子针形，直或稍弯曲，无色，具1～74-隔膜。',
        diease_img: "../../images/plant/fanqiebankubing.jpg",
        diease_zhengzhuang: '主要为害番茄的叶片、茎和花萼，尤其在开花结果期的叶片上发生最多，果实很少受害。接近地面的老叶先发病(图10-62)，逐渐蔓延到上部叶片。初发病时，叶片背面出现水浸状小圆斑，不久叶片正面出现近圆形的褪绿斑，边缘深褐色，中央灰白色，凹陷，密生黑色小粒点。发病严重时，病斑布满全叶，叶片逐渐枯黄，植株早衰，造成早期落叶。茎部病斑椭圆形(图10-63)，稍隆起。病斑中间灰白色，边缘暗褐色。果实染病，果实上散生黑色小斑点，直径2-3毫米，病部灰白色，边缘暗褐色，呈圆形隆起，尤如鱼眼状。番茄斑枯病典型症状是病斑小，呈鱼眼状，病斑上散生许多黑色小点，不同于斑点病和细菌性斑疹病症状。番茄斑点病典型症状是坏死斑呈灰黄色或黄褐色，有轮纹或边缘有黄色晕，潮湿时着生暗灰色霉层。番茄细菌性斑疹病典型症状是病斑深褐色至黑褐色，有晕圈，叶缘和未成熟果实染病明显，潮湿冷凉、低温多雨、喷灌后有利于发病。',
        diease_fangan: '1、应与非茄科作物轮作3--4年，培育无病壮苗。从无病健株上采种，播种前用52温汤加新高脂膜800倍液浸种30分钟，然后催芽播种。 2、苗床用新土或两年未种过茄科蔬菜的地块育苗，播种后及时在地表喷施新高脂膜800倍液保温保墒，防治土壤结板，提高出苗率。3、施用充分腐熟的有机肥，增施磷钾肥，提高抗病性。连作大棚可以增施微生物菌肥，改良土壤，每亩30公斤。4、加强栽培管理，及时整枝打岔、排水降湿，清除病残体，摘除老叶，促进通风透光。番茄采收后，要彻底清除田间病株残余物和田边杂草，可以运到肥场集中沤肥，经高温发酵和充分腐熟后才能使用。 5、适时喷施促花王3号抑制主梢旺长，促进花芽分化；在开花前喷施菜果壮蒂灵提高花粉质量，增强循环坐果率，使番茄连连稳产优质。 6、发病初期喷药防治，可喷施70％代森锰锌可湿性粉剂800～1000倍液、40％百菌清悬浮剂600～700倍液、64％恶霜锰锌可湿性粉剂500倍液、50％福美双可湿性粉剂500倍液、40％克菌丹可湿性粉剂400倍液、50％多菌灵可湿性粉剂800～1000倍液、65％代森锌可湿性粉剂500倍液、70％甲基硫菌灵可湿性粉剂1 000倍液、65％福美锌可湿性粉剂500倍液、50％异菌脲可湿性粉剂、77％氢氧化铜可湿性粉剂600～800倍液、40％氟硅唑乳油4 000～6 000倍液、10％苯醚甲环唑水分散粒剂4 000倍液、50％硫菌灵可湿性粉剂600倍液、50％腐霉利可湿性粉剂1000倍液，每7～10天喷1次，连续喷2～3次。'
      }, {
        diease: "番茄",
        diease_name: '红蜘蛛损伤',
        diease_bingyin: '  红蜘蛛在温度1O℃以上就开始大量繁殖，主要为两性生殖，也可营孤雌生殖，雌螨一生只交配一次，雄螨可以多次交配。交配后 1～3 d，雌螨即可产卵。卵散产，多产于幼叶面，日产卵量为 5～10粒，一生平均可产卵50～100粒，最多达到300多粒。卵孵化时，卵壳裂开，幼螨爬出，先静伏于叶背上，脱皮后为第一若螨；雄螨再脱一次皮即为成螨，雌螨第二次脱皮后即为第二若螨，再经一次脱皮后，方变为成螨。红蜘蛛的寿命与性别有关，雄螨一般在交尾后死亡，雌螨通常可存活 2～5周。在不同温度下，红蜘蛛各螨态的发育历期差异较大，在最适温度下，完成一个世代一般只要 7～10天。红蜘蛛有爬迁习性，当繁殖数量过多，食料不足和温度过高时，则通过爬行扩散或随风扩散。',
        diease_img: "../../images/plant/fanqiehongzhizhu.jpg",
        diease_zhengzhuang: ' 主要危害植物的叶、茎、花等，刺吸植物的茎叶，使受害部位水分减少，表现失绿变白，叶表面呈现密集苍白的小斑点，卷曲发黄。严重时植株发生黄叶、焦叶、卷叶、落叶和死亡等现象。同时，红蜘蛛还是病毒病的传播介体。',
        diease_fangan: '（1）加强管理，做好农业防治： 及时清除温室内残株败叶，内部及外部周边杂草，来消灭部分虫源和红蜘蛛的中间寄主。合理施肥灌溉，促进植株生长健壮，增强抗虫力。（2）适时使用化学农药，及时防治： 药剂防治可用1.8 % 的农克螨乳油2000倍液，或20% 螨克乳油2000倍液或40 % 水胺硫磷乳油2000倍液，每隔7～10天喷1次，连喷2～3次。'
      },

      {
        diease: "番茄",
        diease_name: '黄化曲叶病毒病',
        diease_bingyin: '  该病毒为中国番茄黄化曲叶病毒(Tomato yellow leaf curl virus，TYLCV)，属于双生病毒科（Geminiviridae）菜豆金色花叶病毒属（Begomovirus）病毒，因该属病毒在自然条件下只能由烟粉虱（Bemisia tabaci）以持久方式传播，又被称为粉虱传双生病毒，是一类具有孪生颗粒形态的植物DNA 病毒，广泛分布于热带和亚热带地区，在烟草、番茄、南瓜、木薯、棉花等重要经济作物上造成毁灭性危害。',
        diease_img: "../../images/plant/fanqiehuanghua.jpg",
        diease_zhengzhuang: '染病番茄植株矮化，生长缓慢或停滞，顶部叶片常稍褪绿发黄、变小，叶片边缘上卷，叶片增厚，叶质变硬，叶背面叶脉常显紫色。生长发育早期染病植株严重矮缩，无法正常开花结果；生长发育后期染病植株仅上部叶和新芽表现症状，结果数减少，果实变小，成熟期果实着色不均匀(红不透)，基本失去商品价值。',
        diease_fangan: ' 1.培育无病无虫苗是关键。该病对番茄植株侵害越早，发病率越高，所以预防要从育苗期抓起，做到早防早控，力争少发病或不发病。苗床周围杂草要除干净，苗床土壤要进行消毒处理，以减少病源。苗床用黄化曲叶病毒灵B灌根剂3000倍液喷后整地，并使用40～60目防虫网覆盖。在苗期2-3片叶开始5天一次连续喷施3次黄化曲叶病毒疫苗预防。并用黄化曲叶病毒灵B2000倍液在分苗时和定植前灌苗床2次 。<br>2.农业措施。定植时用黄化曲叶病毒灵B2000-3000倍液浇穴水，缓苗后用黄化曲叶病毒灵A1袋1桶水3-4天一次喷施。连喷4次。适当控制氮肥用量和保持田间湿润。施肥灌水做到少量多次，做到不旱不涝，适时放风，避免棚内高温，调节好田间温湿度，增施有机肥，促进植株生长健壮，提高植株的抗病能力，1-2穗果时可再喷施1-2次番茄黄化曲叶病毒灵，及时清除田间杂草和残枝落叶，以减少虫源。大棚风口用40～60目防虫网隔离，配合田间吊黄板预防烟粉虱。<  3、治疗：如前期没有预防感染上了病毒，请立即用黄化曲叶病毒灵B2000 - 3000倍液灌根，3 - 4天喷1次黄化曲叶病毒灵A或黄化曲叶病毒疫苗，连喷4 - 5次。如不想灌根可用黄化曲叶病毒灵B冲施，亩用1000 - 1500毫升。在治疗期间停止用生长素及控旺药物及普通病毒药物。一般浇水后的3～4天用药最好，1～2次用药可控制病害扩散，3～4次用药初发病株可恢复，对生长点已经停止生长的就没有治疗意义了。如果已经发病必须灌根和喷施同时进行，效果快，恢复好。'
      },
      {
        diease: "番茄",
        diease_name: '花叶病毒病',
        diease_bingyin: '   T烟草普通花叶病毒（obacco mosaic virus.），简称TMV，属+ssRNA目、（未定）科、烟草花叶病毒属病毒。病毒粒体杆状，大小300×18(nm)。钝化温度90～93℃经10分钟，稀释限点10-4～10-7，体外保毒期72～96小时。在无菌条件下致病力达数年，在干燥病组织内存活50年以上。该病毒有不同株系，我国主要有普通株系、番茄株系、黄斑株系和珠斑等4个株系，因致病力差异及与其它病毒的复合侵染而造成症状的多样性。',
        diease_img: "../../images/plant/fanqiehuayebingdubing.jpg",
        diease_zhengzhuang: '1）花叶：在叶片上发生轻微的花叶或绿色深浅不匀的斑驳，植株生长发育正常，株高与健株无异，叶片不变小，不畸形，植株不矮化，对产量影响不大。 （2）在叶片上发生浓、淡相间的斑驳，随后新生叶片变小，叶脉变紫，叶片细长狭窄，扭曲畸形。茎顶叶片生长停滞，植株矮小，下部叶片多呈卷筒状，花芽分化能力减退，大量落花落蕾，已坐果的，果形细小，果小质劣呈花脸状。对产量影响很大，病株比健株减产10%～30%。',
        diease_fangan: '（1）农业防治：①选用抗病品种，目前大多数番茄品种都抗烟草花叶病毒，各地应因地制宜选用适于本地栽培的较抗病品种。②与瓜类或禾本科类作物实行3年以上轮作。③采收完后及时清除病残体，在远离菜地、水源的地方处烧毁或挖坑深埋。育苗前，苗床彻底清除枯枝残叶和杂草；定植前深翻土壤，促使病残体腐烂；对病田里用过的工具、架材要进行消毒处理。④增施钙、磷、钾肥，适时早播和定植。⑤打杈、整枝、绑蔓时先健株后病株，接触过病株的手要用肥皂水消毒，防止通过农事操作再次传播。⑥部分粮菜混作区，将晚夏番茄定植在小麦田预留的行间，生长前期病毒病明显轻于空地块。⑦番茄行间采取铺草保湿等措施，也有利于减轻病害。（2）物理防治：将干燥的种子在70℃下干热消毒72小时。（3）药剂防治：①播种前，先用清水浸泡种子3～4小时，再放到10 % 的磷酸三钠溶液中浸种20～30分钟，捞出后用清水冲洗干净后催芽播种。②在苗期即开始进行药剂防治：。可以在5～7月份用病毒必克800倍液，或植病灵600倍普防2～3次。发病初期用20 % 病毒A2可湿性粉剂500～600倍液进行叶面喷雾。每隔10天喷1次，全生长期喷2～4次，或视病情而定。③早期及时防治蚜虫，加强肥水管理。'
      },

]


},

/**
* 生命周期函数--监听页面加载
*/
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})