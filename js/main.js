window.onload = function() {
    var oPianos = document.getElementById('pianos');
    var oLeft = oPianos.getElementsByClassName('left')[0];
    var oCenter = oPianos.getElementsByClassName('center')[0];
    var oRight = oPianos.getElementsByClassName('right')[0];
    var oKzm = oLeft.getElementsByClassName('Kzm')[0];
    var aKLi = oPianos.getElementsByTagName('li');
    var oADiv = document.getElementsByClassName('audio')[0];
    var oTip = document.getElementsByClassName('tips')[0];
    var oKbug = document.getElementById('kBug');
    var K = 1;
    var i = 0;

    var audioM = 'pianoaudio/';
    var oPP = null;

    for (i = 0; i < aKLi.length; i++) {
        aKLi[i].onmousedown = function() {
            oPP = document.createElement('audio');
            oPP.setAttribute('preload', 'load');
            if (this.getAttribute('n') != '') {
                oPP.src = audioM + this.getAttribute('n').substring(1) + '.wav';
            } else {
                return;
            }
            oPP.play();
        }
    }
    
    function keyBug(ev) {
        var ckyCode = window.event ? ev.keyCode : ev.which;
        
    	oPP = document.createElement('audio');
		oPP.src = audioM + data[ckyCode] + '.wav';
		oPP.play();
	
		if(144) {ev.preventDefault};
		document.title = ckyCode +',' + data[ckyCode];

		if ( ckyCode == 27 || ckyCode == 192 || ckyCode == 9 ) { return ;}
		aKLi[dataBg[ckyCode]].style.background = '#09f';
    }
    
    function keyOne(ev) {
        var ckyCode = window.event ? ev.keyCode : ev.which;
        if (!is_down) {
        	oPP = document.createElement('audio');
			oPP.src = audioM + data[ckyCode] + '.wav';
			oPP.play();
		
			if(144) {ev.preventDefault};
			document.title = ckyCode +',' + data[ckyCode];
	
			if ( ckyCode == 27 || ckyCode == 192 || ckyCode == 9 ) { return ;}
			aKLi[dataBg[ckyCode]].style.background = '#09f';
        }
        is_down = true;
    }

    var is_down = false;
    document.onkeydown = function(ev) {
        var ckyCode = window.event ? ev.keyCode : ev.which;
        
    	oPP = document.createElement('audio');
		oPP.src = audioM + data[ckyCode] + '.wav';
		oPP.play();
	
		if(144) {ev.preventDefault};
		document.title = ckyCode +',' + data[ckyCode];

		if ( ckyCode == 27 || ckyCode == 192 || ckyCode == 9 ) { return ;}
		aKLi[dataBg[ckyCode]].style.background = '#09f';

        if (ev.ctrlKey && ckyCode == 82){
            window.loaction.reload(true);
        }
        return false;
    };
    
    oKbug.onclick = function() {
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
    
    var data = {
        '系':'',
        '27': '0',
        '192': '0',
        '9': '0',
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
        '主': '2排',
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
        '主': '3排',
        '65':'1d',
        '83':'2d',
        '68':'3d',
        '70':'4d',
        '71':'5d',
        '72':'6d',
        '74':'7d',
        '75':'1',
        '76':'2',
        '186':'3',
        '222':'4',
        '主': '4排',
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
        '控': '顶',
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
        '右':'锁',
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
    };
    var dataBg = {
        '系':'',
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
        '65':'42',
        '83':'43',
        '68':'44',
        '70':'45',
        '71':'46',
        '72':'47',
        '74':'48',
        '75':'49',
        '76':'50',
        '186':'51',
        '222':'52',
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
        '右':'锁',
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
    };
    
};
