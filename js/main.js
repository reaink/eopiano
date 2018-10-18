var data = {
    '49': '1g',
    '50': '2g',
    '51': '3g',
    '52': '4g',
    '53': '5g',
    '54': '6g',
    '55': '7g',
    '56': '1bg',
    '57': '2bg',
    '48': '3bg',
    '189': '4bg',
    '187': '5bg',
    '81': '1',
    '87': '2',
    '69': '3',
    '82': '4',
    '84': '5',
    '89': '6',
    '85': '7',
    '73': '1g',
    '79': '2g',
    '80': '3g',
    '219': '4g',
    '221': '5g',
    '220': '6g',
    '65': '1d',
    '83': '2d',
    '68': '3d',
    '70': '4d',
    '71': '5d',
    '72': '6d',
    '74': '7d',
    '75': '1',
    '76': '2',
    '186': '3',
    '222': '4',
    '90': '1bd',
    '88': '2bd',
    '67': '3bd',
    '86': '4bd',
    '66': '5bd',
    '78': '6bd',
    '77': '7bd',
    '188': '1d',
    '190': '2d',
    '191': '3d',
    '45': '4bg',
    '36': '5bg',
    '33': '6bg',
    '46': '1bg',
    '35': '2bg',
    '34': '3bg',
    '38': '1bd',
    '37': '2bd',
    '40': '3bd',
    '39': '4bd',
    '144': '4g',
    '111': '5g',
    '106': '6g',
    '109': '7g',
    '103': '7',
    '104': '1g',
    '105': '2g',
    '107': '3g',
    '100': '4',
    '101': '5',
    '15': '5',
    '12': '5',
    '102': '6',
    '97': '1',
    '98': '2',
    '99': '3',
    '13': '7d',
    '96': '5d',
    '110': '6d'
}
var dataSys = [
    27,
    192,
    9,
    20,
    16,
    17,
    91,
    18,
    92,
    93,
    8,
    112,
    113,
    114,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122,
    123,
    145,
    19,
]
var dataBg = {
    '系': '',
    '27': '-1',
    '192': '',
    '9': '',
    '20': '0',
    '16': '0',
    '17': '0',
    '91': '0',
    '18': '0',
    '92': '0',
    '93': '0',
    '8': '0',
    '112': '0',
    '113': '0',
    '114': '0',
    '115': '0',
    '116': '0',
    '117': '0',
    '118': '0',
    '119': '0',
    '120': '0',
    '121': '0',
    '122': '0',
    '123': '0',
    '145': '0',
    '19': '0',
    '主': '1排',
    '49': '14',
    '50': '15',
    '51': '16',
    '52': '17',
    '53': '18',
    '54': '19',
    '55': '20',
    '56': '21',
    '57': '22',
    '48': '23',
    '189': '24',
    '187': '25',
    '主': '2排',
    '81': '28',
    '87': '29',
    '69': '30',
    '82': '31',
    '84': '32',
    '89': '33',
    '85': '34',
    '73': '35',
    '79': '36',
    '80': '37',
    '219': '38',
    '221': '39',
    '220': '40',
    '主': '3排',
    '65': '42',
    '83': '43',
    '68': '44',
    '70': '45',
    '71': '46',
    '72': '47',
    '74': '48',
    '75': '49',
    '76': '50',
    '186': '51',
    '222': '52',
    '主': '4排',
    '90': '55',
    '88': '56',
    '67': '57',
    '86': '58',
    '66': '59',
    '78': '60',
    '77': '61',
    '188': '62',
    '190': '63',
    '191': '64',
    '控': '顶',
    '45': '77',
    '36': '78',
    '33': '79',
    '46': '80',
    '35': '81',
    '34': '82',
    '38': '83',
    '37': '84',
    '40': '85',
    '39': '86',
    '右': '锁',
    '144': '87',
    '111': '88',
    '106': '89',
    '103': '90',
    '104': '91',
    '105': '92',
    '100': '93',
    '101': '94',
    '102': '95',
    '97': '96',
    '98': '97',
    '99': '98',
    '96': '99',
    '110': '100',
    '109': '101',
    '107': '102',
    '13': '103'
}

function EOPieno() {
    var oPianos = document.getElementById('pianos');
    var aKLi = oPianos.getElementsByTagName('li');
    var oKbug = document.getElementById('kBug');
    var oPre = document.getElementById('pre');
    var oPreAll = document.getElementById('pre-all');
    var oVol = document.getElementById('vol');
    var oPianoAudio = document.getElementById('piano-audio');
    var oAudioName = document.getElementById('audio-name');
    var i = 0;

    oPreAll.innerText = Object.keys(data).length;

    function load(url) {
        oPianoAudio.src = url;
        oPianoAudio.setAttribute('controls', 'controls');
        oPianoAudio.load();
        oAudioName.innerText = url;
        // console.log(oPianoAudio, url)
        // console.log(oPianoAudio.paused);
        
        if (oPianoAudio.paused) {
            oPre.innerText++;
        }
    }

    function play(url) {
        oPianoAudio.src = url;
        oAudioName.innerText = url;
        oPianoAudio.play();
    }

    (function() {
        oVol.value = oPianoAudio.volume;
        oVol.step = 0.1;
        oVol.onchange = function () {
            oPianoAudio.volume = +this.value;
        }
    })(oVol, oPianoAudio);

    var i;
    var audioM = 'pianoaudio/';
    if (/http/.exec(window.location.href)) {
        for (i of Object.values(data)) {
            oPianoAudio.muted = true;
            load(audioM + i + '.wav');
        }
        if (oPreAll.innerText !== 0 && oPre.innerText === oPreAll.innerText) {
            oVol.value = oPianoAudio.volume = 1;
            // oCache.innerText = '缓存完毕';
        }
    } else {
        console.log('本地项目，跳过XMLHttpRequest缓存');
    }

    for (i = 0; i < aKLi.length; i++) {
        aKLi[i].onmousedown = function () {
            if (this.getAttribute('n') != "") {
                play(audioM + this.getAttribute('n').substring(1) + '.wav')
            } else {
                return;
            }
        }
    }

    function keyBug(ev) {
        var ckyCode = window.event ? ev.keyCode : ev.which;

        play(audioM + data[ckyCode] + '.wav')

        if (144) {
            ev.preventDefault
        };

        if (ckyCode == 27 || ckyCode == 192 || ckyCode == 9) {
            return;
        }
        aKLi[dataBg[ckyCode]].style.background = '#09f';
    }

    function keyOne(ev) {
        var ckyCode = window.event ? ev.keyCode : ev.which;
        if (!is_down) {
            play(audioM + data[ckyCode] + '.wav')

            if (144) {
                ev.preventDefault
            };

            if (ckyCode == 27 || ckyCode == 192 || ckyCode == 9) {
                return;
            }
            aKLi[dataBg[ckyCode]].style.background = '#09f';
        }
        is_down = true;
    }

    var is_down = false;
    document.onkeydown = function (ev) {
        var ckyCode = window.event ? ev.keyCode : ev.which;
        var i = 0;

        if (144) {
            ev.preventDefault
        };

        for (i = 0; i < dataSys.length; i++) {
            if (dataSys[i] == ckyCode) {
                return
            }
        }

        aKLi[dataBg[ckyCode]].style.background = '#09f';

        play(audioM + data[ckyCode] + '.wav')

        if (ev.ctrlKey && ckyCode == 82) {
            window.loaction.reload(true);
        }
        return false;
    };

    oKbug.onclick = function () {
        if (this.value == '可多键模式') {
            document.onkeydown = keyOne;
            this.value = '仅一键模式';
        } else {
            document.onkeydown = keyBug;
            this.value = '可多键模式';
        }
    }

    document.onkeyup = function (ev) {
        is_down = false;
        for (i = 0; i < aKLi.length; i++) {
            aKLi[i].style.background = '#fff';
        }
    }

}

window.onload = function () {
    EOPieno();
}