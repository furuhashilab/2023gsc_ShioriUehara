var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoic2hpbzIiLCJhIjoiY2xzNmNidzNwMWxmaTJqcXhqNnZxbGN2ZiJ9.iU1Mbqj7YNFFOSgpnjHBEQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '音楽の地理的拡散～ジャズの伝播の歴史～',
    subtitle: 'ジャズは、19世紀終わりから20世紀頭にかけて、ニューオーリンズ等アメリカ南部の都市を舞台に整えられました。それを担ったのは、15世紀以降に奴隷貿易によってアメリカへアフリカから連れてこられた黒人たちでした。アフリカとヨーロッパの異文化同士がアメリカで出会い、新しい文化を作った歴史を紹介します。',
    byline: '青山学院大学　地球社会共生学部3年　上原史栞',
    footer: '<a href="https://docs.google.com/spreadsheets/d/1VDGI0ggjRuoWZbTHGGcxZK3Zis2dVklIGidlAeMQwjs/edit?usp=sharing" target="_blank">参考文献リスト</a> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '新しい音楽の誕生',
            
            description: '奴隷貿易によって連れてこられた黒人たちは、プランテーションで働くことになる。18世紀には、奴隷居住区共同体の暮らしを通してアメリカ黒人独自の新しい音楽言語が芽生える。これが後の「ブルーズ」となる。',
            location: {
                center: [-90.77578, 30.00376],
		zoom: 16.00,
		pitch: 45.00,
		bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'ブルーズの広がり',
            
            description: '19世紀に入ると、プランテーションを渡り歩く「ブルーズマン」の手で急速に南部一帯へと広がる。ブルーズの確立。',
            location: {
                center: [-90.77578, 30.00376],
		zoom: 8.00,
		pitch: 45.00,
		bearing: -40.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'ジャズの誕生',
            
            description: '19世紀半ば、自由奴隷・逃亡奴隷が集まり始め、コンゴ・スクエア等の広場にたむろして音楽を奏で始める。南北戦争によって払い下げられた南軍の楽器を手に入れてジャズが始まる。',
            location: {
                center: [-90.06837, 29.96099],
		zoom: 16.00,
		pitch: 45.00,
		bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'ストーリーヴィルでの発展',
            
            description: '1910年には、最大の貿易港であったニューオーリンズで、ルイ・アームストロング（トランペット奏者）の活躍によりジャズが目覚ましく発展する。しかし、第一次世界大戦によってストーリーヴィル（ニューオーリンズの歓楽街）が閉鎖。仕事場を失った演奏者たちはミシシッピ川の外輸船で演奏するようになり、そのまま川の流れを逆にたどってシカゴへと場所を移した。',
            location: {
                center: [-90.07435, 29.95872],
		zoom: 16.00,
		pitch: 45.00,
		bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
 {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'ジャズの確立',
            
            description: '1920年代、シカゴにおいて、ギャングの庇護下で発展が続く。管楽器やピアノが中心として使われ始め、使用楽器の変化など、白人社会への同化が進んでいく。',
            location: {
                center: [-87.68949, 41.83989],
zoom: 9.69,
pitch: 45.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'オーケストラへの転身',
            
            description: '一方その頃ニューヨークでは、大音量のダンスミュージックに対応する音量を出すため、オーケストラスタイルのジャズがスタンダードとなっていた。また、レコードが登場したので、ジャズを音楽として正当に評価しようとする動きが出始めた。1933年には世界恐慌を脱出、禁酒法も廃止されたので、クラブの客寄せのためのエンタメとしてジャズが使われた。ラジオによって一般家庭への普及も進んだ。',
            location: {
                center: [-73.95476, 40.81619],
zoom: 14.85,
pitch: 45.00,
bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: '即興演奏の流行',
            
            description: 'しかし、1930年代のカンザスでは、飛び入り歓迎、譜面無しの即興演奏主体のジャズが流行りだす。実際、譜面無しの音楽が売れた。',
            location: {
                center: [-94.58164, 39.10124],
zoom: 14.66,
pitch: 45.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-chapter',
            alignment: 'left',
            hidden: false,
            title: '黒人の音楽～ニューヨーク～',
            
            description: '1940年代は、第二次世界大戦の影響で若者が出兵してしまう。残った者が、ミントンズ・プレイハウスへ集まり演奏を続けることになった。その延長で、戦争終結の1945年以降、ニューヨークにはジャズクラブが7軒オープンし、黒人の音楽としてのジャズが印象付けられていった。',
            location: {
               center: [-73.95280, 40.80473],
zoom: 16.00,
pitch: 45.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
 {
            id: 'nineth-chapter',
            alignment: 'right',
            hidden: false,
            title: '白人の音楽～ロサンゼルス～',
            
            description: 'ニューヨークでジャズクラブがオープンした頃、ウェストコートでは、亡命してきた音楽家たちの影響で現代音楽とジャズが融合し始める。こちらでは、白人の音楽としての顔を見せていた。',
            location: {
                center: [-118.25064, 34.05176],
zoom: 13.25,
pitch: 45.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'tenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'モダンジャズ全盛期',
            
            description: '1950年代はモダンジャズ全盛期。ニューヨークで発展したジャズは、ハードバップ、イーストコートジャズとして認知、発展していく。',
            location: {
                center: [-74.00223, 40.74094],
zoom: 11.77,
pitch: 45.00,
bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'ジャズが来日',
            
            description: '1953年、JATP（オールスタークラスのビッグネームがステージに並ぶ拡大ジャムセッションのような企画〈ジャズ・アット・ザ・フィルハーモニック〉)とルイ・アームストロングが来日。銀座に大勢が押し寄せた。すぐにレコード化して発売したことで定着化し、日本にジャズブームが訪れる。',
            location: {
                center: [139.76396, 35.67206],
zoom: 17.49,
pitch: 45.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'twelfth-chapter',
            alignment: 'right',
            hidden: false,
            title: '映画音楽としてのジャズ',
            
            description: '1957年、フランス映画「死刑台のエレベーター」にモダンジャズが採用されて世界的なブームになった。',
            location: {
                center: [2.28698, 48.85605],
zoom: 16.00,
pitch: 45.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
 {
            id: 'thirteenth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'ジャズと詩',
            
            description: '1950年代後半、日本では、ファンキーブームが起こった。新宿ピットインで山下洋輔トリオをバックに自作詩を朗読したケネス・レクスロスなどがいた。',
            location: {
                center: [139.70736, 35.69069],
zoom: 17.72,
pitch: 45.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'fourteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'フリージャズ',
            
            description: '1960年代には、一方で、脱ヨーロッパの雰囲気を持つリージャズが流行り始めた。日本では銀座や新宿のシャンソン喫茶に人が集まり自由に演奏を始めた。',
            location: {
                center: [139.76248, 35.66849],
zoom: 16.00,
pitch: 45.00,
bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifteenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'フュージョン期',
            
            description: '1970年代、ハービーハンコックやチックコリアに代表されるフュージョン期の到来。電子楽器が登場してキーボードやギターのエフェクトがつけられるようになって表現の幅が広がった。',
            location: {
                center: [-95.69030, 30.40131],
zoom: 10.33,
pitch: 45.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: '近年のジャズ',
            
            description: '1980年代～現在まで、ジャズは、アコースティックとの融合、原点回帰、コンテンポラリージャズ、ヒップホップ化など時代を反映させながら姿を様々に変えてきた。アフリカとヨーロッパの文化が出会ったアメリカから、対位的に海を渡って全世界へ親しまれるようになった。',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
