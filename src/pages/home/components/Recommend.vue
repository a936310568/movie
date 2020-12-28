<template>
  <div class="the-recommend">
    <div class="First-movie">
      <div class="movie-kill">
        <div class="kill-title"><h2>Leon - The Professional</h2></div>
      </div>
      <div class="tab">
        <div class="tab_list">
          <ul class="kill-role">
            <li v-for="(item, index) in firstLiList" :key="index" @click="addClass(index)" :class="active == index?'actice' : ''">{{item.title}}</li>
          </ul>
        </div>
        <div class="tab-con">
          <div class="kill-item" v-for="(item, index) in tabConList" :key="index" :class="active == index?'showCon' : ''">
            <div class="tab-con-left">
              <div class="The-lian">
                <img class="The-lian-img" :src="item.conImg" alt="">
              </div>
              <div class="The-lian-name">
                <h3 class="The-lian-name-word">{{item.role}}</h3>
                <span class="The-lian-name-word1">{{item.star}}</span>
                </div>
            </div>
            <div class="tab-con-right">
              <div class="lian-rec">{{item.rec}}</div>
              <div class="shape">
                <div class="shape-name">
                  <h3>{{item.shape}}</h3>
                </div>
                <div class="shape-music">
                  <audio :src="item.music" controls="controls"></audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Second-movie">
      <div class="movie-kill">
        <div class="kill-title"><h2>The Fast and the Furious</h2></div>
      </div>
      <div class="tab">
        <div class="tab_list">
          <ul class="kill-role">
            <li v-for="(item, index) in secondLiList" :key="index" @click="addClass2(index)" :class="active2 == index?'actice' : ''">{{item.title}}</li>
          </ul>
        </div>
        <div class="tab-con">
          <div class="kill-item" v-for="(item, index) in secondConList" :key="index" :class="active2 == index?'showCon' : ''">
            <div class="tab-con-left">
              <div class="The-lian">
                <img class="The-lian-img" :src="item.conImg" alt="">
              </div>
              <div class="The-lian-name">
                <h3 class="The-lian-name-word">{{item.role}}</h3>
                <span class="The-lian-name-word1">{{item.star}}</span>
                </div>
            </div>
            <div class="tab-con-right">
              <div class="lian-rec">{{item.rec}}</div>
              <div class="shape">
                <div class="shape-name">
                  <h3>{{item.shape}}</h3>
                </div>
                <div class="shape-music">
                  <audio :src="item.music" controls="controls"></audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Second-movie">
      <div class="movie-kill">
        <div class="kill-title"><h2>The Dark Knight</h2></div>
      </div>
      <div class="tab">
        <div class="tab_list">
          <ul class="kill-role">
            <li v-for="(item, index) in thirdLiList" :key="index" @click="addClass3(index)" :class="active3 == index?'actice' : ''">{{item.title}}</li>
          </ul>
        </div>
        <div class="tab-con">
          <div class="kill-item" v-for="(item, index) in thirdConList" :key="index" :class="active3 == index?'showCon' : ''">
            <div class="tab-con-left">
              <div class="The-lian">
                <img class="The-lian-img" :src="item.conImg" alt="">
              </div>
              <div class="The-lian-name">
                <h3 class="The-lian-name-word">{{item.role}}</h3>
                <span class="The-lian-name-word1">{{item.star}}</span>
                </div>
            </div>
            <div class="tab-con-right">
              <div class="lian-rec">{{item.rec}}</div>
              <div class="shape">
                <div class="shape-name">
                  <h3>{{item.shape}}</h3>
                </div>
                <div class="shape-music">
                  <audio :src="item.music" controls="controls"></audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      active: 0,
      active2: 0,
      active3: 0,
      firstLiList: [
        { title: '里昂' },
        { title: '玛蒂尔达' }
      ],
      secondLiList: [
        { title: '多米尼克' },
        { title: '布莱恩' },
        { title: '米娅' },
        { title: '莱蒂' }
      ],
      thirdLiList: [
        { title: '布鲁斯·韦恩' },
        { title: '小丑' },
        { title: '哈维·丹特' },
        { title: '阿尔弗雷德' }
      ],
      tabConList: [
        {
          conImg: '../../../../static/images/la.jpg',
          role: 'Léon',
          star: '让·雷诺 饰演',
          rec: '意大利裔的顶尖职业杀手，一直孤独的住在纽约小意大利，只有一株盆栽是他最好的朋友。他虽然身怀绝技，但内心非常缺乏安全感。甚至从不敢睡在床上，而是坐在椅子上睡，并把枪放在手边。',
          shape: 'Shape Of My Heart',
          music: '../../../../static/audio/shape of my heart.mp3'
        },
        {
          conImg: '../../../../static/images/mati.png',
          role: 'Mathilda',
          star: '娜塔丽·波特曼 饰演',
          rec: '实际年龄只有12岁的小女孩，刚刚亲眼目睹全家被杀。她的生活经历以及悲惨的特殊遭遇令她的性格变的非常的倔强任性、独立自主，而且还有着与年龄极不相称的成熟。',
          shape: 'Shape Of My Heart',
          music: '../../../../static/audio/shape of my heart.mp3'
        }
      ],
      secondConList: [
        {
          conImg: '../../../../static/images/fld.jpg',
          role: 'Dominica',
          star: '范·迪塞尔 饰演',
          rec: '老大兼车手，绝对十足的飞车老大，对朋友讲义，对家人讲情。道奇是他的标志，只要一开上道奇，没人比得过他。',
          shape: 'We own It',
          music: 'http://mp3.9ku.com/mp3/511/510046.mp3'
        },
        {
          conImg: '../../../../static/images/ble.jpg',
          role: 'Brian O Conner',
          star: '保罗·沃克 饰演',
          rec: '军师兼车手，一个爱非法赛车的前FBI探员，卧底期间和飞车党老大成为生死之交，并与老大的胞妹米娅眉来眼去，为大舅子劫大狱，带怀孕的米娅走天涯。在第七部最后隐退。',
          shape: 'We own It',
          music: 'http://mp3.9ku.com/mp3/511/510046.mp3'
        },
        {
          conImg: '../../../../static/images/my.png',
          role: 'Mia Toretto',
          star: '乔丹娜·布鲁斯特 饰演',
          rec: '后援，多米尼克的胞妹。从小跟着大哥混江湖，却偏偏爱上了FBI探员，因为对方卧底身份一度情路中断，但最终修成正果。',
          shape: 'We own It',
          music: 'http://mp3.9ku.com/mp3/511/510046.mp3'
        },
        {
          conImg: '../../../../static/images/mxe.jpg',
          role: 'Letty Ortiz',
          star: '米歇尔·罗德里格兹 饰演',
          rec: '前团队干将，多米尼克的女人，为自家男人什么事情都敢做。四年前她为男人留一条后路，生死不明。莱蒂和多米尼克的关系是一种在老式的婚姻中才能找到的罕见的浪漫的忠诚。',
          shape: 'We own It',
          music: 'http://mp3.9ku.com/mp3/511/510046.mp3'
        }
      ],
      thirdConList: [
        {
          conImg: '../../../../static/images/blswe.jpg',
          role: 'Bruce Wayne',
          star: '克里斯蒂安·贝尔 饰演',
          rec: '大部分时间，韦恩老爷都是哥潭市的花花公子和家族企业CEO，但当这座城市面临危机的时候，当欺诈、暴力、犯罪企图玷污这座城市的时候，他就是正义之神蝙蝠侠。',
          shape: 'Risen From Drakness',
          music: 'http://mp3.9ku.com/new/2015/05-15/663664.mp3'
        },
        {
          conImg: '../../../../static/images/bfxxc.jpg',
          role: 'Joker',
          star: '希斯·莱杰 饰演',
          rec: '哥潭市正在从黑暗的边缘回到风气清明的安全城市。此时出现了一名叫做“小丑”的狂人。他不在乎金钱，也不求名利，他制造爆炸和屠杀，小丑所要做的就是对人性重新做考量，他要迫使从不杀人的蝙蝠侠手上染血。',
          shape: 'Risen From Drakness',
          music: 'http://mp3.9ku.com/new/2015/05-15/663664.mp3'
        },
        {
          conImg: '../../../../static/images/hwdt.jpg',
          role: 'Harvey Dent',
          star: '艾伦·艾克哈特 饰演',
          rec: '光明而又善良的检察官哈维·丹特唯一的问题就是太过偏执，自从他毁容的那一刻起，自从那枚硬币的一面布满刮痕的那一刻起，他的冲动与决心最终酿成了大错',
          shape: 'Risen From Drakness',
          music: 'http://mp3.9ku.com/new/2015/05-15/663664.mp3'
        },
        {
          conImg: '../../../../static/images/arfld.jpg',
          role: 'Alfred',
          star: '迈克尔·凯恩 饰演',
          rec: '阿尔弗雷德是韦恩家族最忠诚可靠的朋友，他曾经“参加了好几代韦恩的葬礼”。他看护着布鲁斯·韦恩长大，又在布鲁斯离家期间照看韦恩产业，即使布鲁斯决定做行侠仗义的蝙蝠侠，他也都在身后默默地支持',
          shape: 'Risen From Drakness',
          music: 'http://mp3.9ku.com/new/2015/05-15/663664.mp3'
        }
      ]
    }
  },
  methods: {
    addClass (index) {
      this.active = index
      this.$forceUpdate()
      console.log(index)
    },
    addClass2 (index) {
      this.active2 = index
      this.$forceUpdate()
    },
    addClass3 (index) {
      this.active3 = index
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .the-recommend
    height 1000px
    width 80%
    float right
    .kill-title
      height 8.666667rem
      background #fff
      font-size 2rem
      line-height 8.66rem
      text-align center
      margin-top 40px
  .tab
    background url(../../../../static/images/bgd.png)
  .kill-role
    height 4rem
    li
      margin-top 10px
      list-style none
      width 5rem
      height 2rem
      float left
      line-height 2rem
      text-align center
      color #378ce6
    .actice
      border 1px solid #ccc
      border-radius 12px
      border-bottom 0
      background-color: rgba(66,189,86,.5)
      color #fff
  .tab-con
    .kill-item
      height 20rem
      display none
    .showCon
      display block
      .tab-con-left
        width 40%
        float left
        .The-lian
          overflow hidden
          width 200px
          height 200px
          margin-left 109px
          .The-lian-img
            width 100%
            height 100%
            border-radius 100px
        .The-lian-name
          height 50px
          .The-lian-name-word
            line-height 50px
            text-align center
            font-size 28px
          .The-lian-name-word1
            display inline-block
            width 100%
            text-align center
      .tab-con-right
        width 59%
        float right
        background url(../../../../static/images/bgd.png)
        .lian-rec
          width 500px
          height 100px
          border 1px solid #ccc
          padding 15px
          margin 30px
          margin-left 70px
        .shape
          margin-left 50px
          margin-top 80px
          overflow hidden
          .shape-name
            float left
            margin-top 10px
            font-size 20px
          .shape-music
            float left
            margin-left 30px
</style>
