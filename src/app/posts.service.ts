import { Injectable } from '@angular/core';
import {IPost, IUser} from './models';
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  user: IUser;

  constructor(private userService: UserService, private http: HttpClient) {
    this.user = this.userService.user;
  }

  getPostsForProfilePage(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`/posts/profile`);
  }

  getPostsForUserPage(id: string): Observable<IPost[]> {
    return this.http.get<IPost[]>(`/posts/${id}`);
  }

  getCountOfComments() {
  }

  public posts: IPost[] = [{
    title: 'Слово мэра',
    text: 'Ну что сказать... Я вижу кто-то наступил на грабли.\n' +
      'Ты разочаровал меня, ты был натравлен. \n' +
      'Гора, как на ладони под нами, смог с дымом над ней. \n' +
      'Может вина? У меня вполне сносный виноградник.\n' +
      '\n' +
      'Ты главное так не шугайся, я не изверг.\n' +
      'Я даже листал твой фолиант, что издан. Браво! Бис! \n' +
      'Ты дальше б сочинял, смешил, писал, природу Пасторали. \n' +
      'Ладно, не серчай - мои орлы чуток перестарались. \n' +
      '\n' +
      'Не надо тебя было им волочить за рубаху до виселицы! \n' +
      'Ну что ж тебе - гаду, неймётся никак. Отдыхай, веселись, и не ссы. \n' +
      'А такие, как ты - всегда видят лишь негатив положив на весы, \n' +
      'Но я переживаю за всех горожан, словно каждый из них - мой единственный сын!\n' +
      '\n' +
      'Я знаю, враги утверждают, что якобы многих боюсь.\n' +
      'Что якобы, я - целый край оплетаю, как головоногий моллюск. \n' +
      'Допустим всё так, но что будет если уйду? Города по соседству, \n' +
      'Убрав своих деспотов, бедствуя - мрут, для сравнения тут. \n' +
      '\n' +
      'Горный воздух. Спорт и здоровье. Курорт, игорный дом, \n' +
      'Двор торговый, фудкорт. Добро пожаловать в Горгород;\n' +
      'Эталон комфортного отдыха, гольф, аквадром и керлинг - \n' +
      'Добро пожаловать в Горгород! \n' +
      'Мировой гандбольный рекорд, ипподром и соборы, боулинг - \n' +
      'Добро пожаловать в Горгород! \n' +
      'Мой народ не хочет реформ, когда повторно накормлен; \n' +
      'Добро пожаловать в Горгород!\n' +
      '\n' +
      'Ты собрал только половину пазла.\n' +
      'Картина маслом! Социальный лифт в пирамиде Маслоу. \n' +
      'Толпа многоголова, как Гидра и Цербер, \n' +
      'Но она не делает погоду как гидрометцентр.\n' +
      '\n' +
      'Она, хоть я не Макиавелли Никколо, \n' +
      'Благоговеет влекомо к плахе петле или колу, \n' +
      'Страху, елею, иконам, хаки, игле и оковам, \n' +
      'Ты умнее намного, нафиг плебеи такому, а?\n' +
      '\n' +
      'Тебе промыл мозги идиот под горой, \n' +
      'Все переплетено который год - анекдот с бородой. \n' +
      'Конспиролог-изгой, мы с гуру знакомы с тех пор, \n' +
      'Как это горе-воин был чиновник, чьё слово закон. \n' +
      '\n' +
      'Допустим, враги утверждают, что якобы многих боюсь;\n' +
      'Допустим, я мир оплетаю, как будто я - головоногий моллюск... \n' +
      'Допустим, все так... Но, что будет, если уйду? \n' +
      'Города по соседству, убрав своих деспотов, \n' +
      'Бедствуя - мрут, для сравнения тут...\n' +
      '\n' +
      'Горный воздух. Спорт и здоровье. Курорт, игорный дом, \n' +
      'Двор торговый, фудкорт. Добро пожаловать в Горгород;\n' +
      'Эталон комфортного отдыха, гольф, аквадром и керлинг - \n' +
      'Добро пожаловать в Горгород! \n' +
      'Мировой гандбольный рекорд, ипподром и соборы, боулинг - \n' +
      'Добро пожаловать в Горгород! \n' +
      'Мой народ не хочет реформ, когда повторно накормлен;\n' +
      'Добро пожаловать в Горгород!\n' +
      '\n' +
      'Пойми, писатель - ты хороший парень, но с плохой компанией связался, \n' +
      'Не нарочно твари, бросили тебя едва запахло гарью. \n' +
      'Глянь, на горизонте расцветает, у нас даже солнце под ногами, а?\n' +
      'Учти, тебе на сей раз повезло! Карьера, здоровье, свобода - все цело. \n' +
      'Но, вот те слово мэра! Второго шанса нет! Короче, берегись -\n' +
      'Если снова дотронешься до моей дочери - Алисы!',
    tags: [ 'Хип-хоп', 'По фактам' ],
    user: '@norimyxxxo',
    profilePhotoSrc: 'https://pbs.twimg.com/profile_images/1029031247073476610/trKYjiJ3_400x400.jpg',
    likes: 1234,
    comments: 1,
    date: '24 апреля 2018 в 14:58',
    imgPostSrc: 'https://avatars.yandex.net/get-music-content/38044/cd8c7557.a.3087311-1/400x400',
    postId: 1
  },
  {
      title: 'Город под подошвой',
      text: 'Дон ли, Волга ли течет. Котомку - на плечо ' +
        'Боль в груди - там тайничок, открытый фомкой, не ключо ' +
        'Сколько миль еще? Перелет короткий был не в счет ' +
        'Долгий пыльный чес, фургон набит коробками с мерчем ' +
        'Верим - подфартит, наши постели портативны ' +
        'Менестрелю - два пути: корпоратив или квартирник ' +
        'Схемы однотипны. Все теперь MC ' +
        'Ведь смену породив, мы здесь достигли смены парадигмы ' +
        'Теперь рэп - многопартийный. Бэттлов наплодив ' +
        'Я смотрю в зеркало по типу "Сколько бед наворотил ты!?" ' +
        'Я б весь рэп поработил, но все время в пути ' +
        'У индустрии нервный тик, валокордин - стенокардийным ' +
        'Соберите суд, но победителей не судят ' +
        'Мы первые кроманьонцы - мы выбились в люди ' +
        'Не пизди! Я кладу на вас, челядь, пятикратно ' +
        'Ведь мы выступаем сильно, будто челюсть питекантропа ' +
        'Весь мой рэп, если коротко, про то, что ' +
        'Уж который год который город под подошвой ' +
        'В гору, когда прет. Потом под гору, когда тошно ' +
        'Я не то, что Гулливер, но все же город под подошвой ' +
        'Город под подошвой, город под подошвой ' +
        'Светофоры, госпошлины, сборы и таможни ' +
        'Я не знаю, вброд или на дно эта дорожка ' +
        'Ты живешь под каблуком, у меня - город под подошвой ' +
        'Мимо тополей и спелого хлеба полей ' +
        'Где приведения Есенина, крест, молебен, елей ' +
        'Из минивэна вижу землю, вижу небо над ней ' +
        'Мы все преодолеем, если нет, то я не Водолей ' +
        'Наша земля топит одиночек как щенят ' +
        'Был чужой, но Охра, Порчи, Илья - больше, чем семья ' +
        'Бомбу ночью сочинял, что есть мочи начинял ' +
        'Я так хотел принадлежать к чему-то большему, чем я ' +
        'Мир пустой, хоть с каждым вторым перезнакомься ' +
        'Я не биоробот с позитивной лыбой комсомольца ' +
        'AY! Избавь меня от ваших панацей ' +
        'Домашний Парацельс, ведь для меня *башить - самоцель ' +
        'Подустал? Нам насрать, Тони Старк, как стандарт ' +
        'Пара стран, автострад. Краснодар, Татарстан, Москвабад ' +
        'Паспорта, гам эстрад, нарасхват ' +
        'Хоть по МКАД\'у на старт, хоть на Мадагаскар (Ты знаешь!) ' +
        'Весь мой рэп, если коротко, про то, что ' +
        'Уж который год который город под подошвой ' +
        'В гору, когда прет. Потом под гору, когда тошно ' +
        'Я не то, что Гулливер, но все же город под подошвой ' +
        'Город под подошвой, город под подошвой ' +
        'Светофоры, госпошлины, сборы и таможни ' +
        'Я не знаю, вброд или на дно эта дорожка ' +
        'Ты живешь под каблуком, у меня - город под подошвой ' +
        'Дай силенок тут, не свернуть и не сломаться ' +
        'Есть маршрут и есть на трассе населенный пункт ' +
        'И там нас сегодня ждут. Нытик, не будь женственным ' +
        'У Руслана в деке саундтреки к путешествию ' +
        'Снова *бло заспано, снова подъем засветло ' +
        'Снова броник, снова дорога, мешок - за спину ' +
        'Все наскоро, в поле насрано, дождь, пасмурно ' +
        'Мост в Асгард - после, пусть просто везет с транспортом ' +
        'Я делаю каждый свой куплет автопортретом ' +
        'Час на чек, читаем рэп, как логопед под марафетом ' +
        'Трафарет на парапетах: лого на стене везде ' +
        'Мое ученье - всем, как Магомеда с Бафометом ' +
        'Я - звезда? Дайте теплый плед и капюшон ' +
        'Салфетки жопу вытирать - и все, отметка "Хорошо" ' +
        'Раньше говорили "Я бы с ним в разведку не пошел" ' +
        'Я с тобой в тур не поехал - ты проверку не прошел (Хоуми, знай!) ' +
        'Мой рэп, если коротко, про то, что ' +
        'Уж который год который город под подошвой ' +
        'В гору, когда прет. Потом под гору, когда тошно ' +
        'Я не то, что Гулливер, но все же город под подошвой ' +
        'Город под подошвой, город под подошвой ' +
        'Светофоры, госпошлины, сборы и таможни ' +
        'Я не знаю, вброд или на дно эта дорожка ' +
        'Ты живешь под каблуком, у меня - город под подошвой',
      tags: [ 'Хип-хоп', 'Отец рэпа' ],
      user: '@norimyxxxo',
      profilePhotoSrc: 'https://pbs.twimg.com/profile_images/1029031247073476610/trKYjiJ3_400x400.jpg',
      likes: 12345,
      comments: 12,
      date: '24 апреля 2018 в 14:58',
      imgPostSrc: 'https://avatars.yandex.net/get-music-content/28589/0c106866.a.2976568-1/400x400',
      postId: 4
    },
    {
      title: 'Watch',
      text: 'Lips meet teeth and tongue\n' +
        'My heart skips eight beats at once\n' +
        'If we were meant to be, we would have been by now\n' +
        'See what you wanna see, but all I see is him right now\n' +
        'I’ll sit and watch your car burn\n' +
        'With the fire that you started in me\n' +
        'But you never came back to ask it out\n' +
        'Go ahead and watch my heart burn\n' +
        'With the fire that you started in me\n' +
        'But I’ll never let you back to put it out\n' +
        'Your love feels so fake\n' +
        'And my demands aren’t high to make\n' +
        'If I could get to sleep, I would have slept by now\n' +
        'Your lies will never keep, I think you need to blow \'em out\n' +
        'I’ll sit and watch your car burn\n' +
        'With the fire that you started in me\n' +
        'But you never came back to ask it out\n' +
        'Go ahead and watch my heart burn\n' +
        'With the fire that you started in me\n' +
        'But I’ll never let you back to put it out\n' +
        'When you call my name\n' +
        'Do you think I’ll come runnin\'?\n' +
        'You never did the same\n' +
        'So good at givin\' me nothin\'\n' +
        'When you close your eyes, do you picture me?\n' +
        'When you fantasize, am I your fantasy?\n' +
        'Now you know\n' +
        'Now I’m free\n' +
        'I’ll sit and watch your car burn\n' +
        'With the fire that you started in me\n' +
        'But you never came back to ask it out\n' +
        'Watch my heart burn\n' +
        'With the fire that you started in me\n' +
        'But I’ll never let you back to put it out\n' +
        'Never let you back\n' +
        'Let you back, let you back\n' +
        'Never gonna let you back\n' +
        'Let you back',
      tags: [ 'Красивая музыка', 'Америка' ],
      user: '@wherearetheavocados',
      profilePhotoSrc: 'https://scontent-arn2-1.cdninstagram.com/vp/e66f19d62b5a2a531ee80c7dcdc01700/5D425FC4/t51.2885-19/s320x320/50241673_369100297223490_7661710700984664064_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com',
      likes: 99999,
      comments: 10,
      date: '1 апреля 2018 в 12:18',
      imgPostSrc: 'https://avatars.yandex.net/get-music-content/98892/90ce450c.a.4923330-1/400x400',
      postId: 2
    },
    {
      title: 'Поэма о родине',
      text: 'Моя родина - моя любовь. Вид из окна -' +
        'Моногородок в платье серого сукна.' +
        'Моя родина - моя любовь. В каждом окне ' +
        'Солдаты трущоб улыбаются мне.',
      tags: [ 'Патриотизм', 'Хаски' ],
      user: '@papinomoloko',
      likes: 234,
      comments: 2,
      date: '24 марта 2018 в 14:58',
      postId: 3
    }
  ];
}
