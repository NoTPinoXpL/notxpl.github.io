const _0x5f0141=_0xe5cb;(function(_0x14b933,_0x55baf9){const _0x529041=_0xe5cb,_0x597767=_0x14b933();while(!![]){try{const _0x2a01ff=-parseInt(_0x529041(0x155))/0x1*(-parseInt(_0x529041(0x15c))/0x2)+-parseInt(_0x529041(0x164))/0x3+parseInt(_0x529041(0x163))/0x4*(parseInt(_0x529041(0x156))/0x5)+parseInt(_0x529041(0x166))/0x6*(parseInt(_0x529041(0x15a))/0x7)+parseInt(_0x529041(0x168))/0x8+-parseInt(_0x529041(0x169))/0x9+-parseInt(_0x529041(0x15f))/0xa*(parseInt(_0x529041(0x160))/0xb);if(_0x2a01ff===_0x55baf9)break;else _0x597767['push'](_0x597767['shift']());}catch(_0x94cf2d){_0x597767['push'](_0x597767['shift']());}}}(_0x4ca2,0xb1ffd),document[_0x5f0141(0x167)](_0x5f0141(0x157))[_0x5f0141(0x161)]('click',function(_0x2ce0ce){const _0xdd085b=_0x5f0141;_0x2ce0ce['preventDefault']();const _0x1b35ca=document[_0xdd085b(0x167)]('whatsapp-form');_0x1b35ca[_0xdd085b(0x158)]['display']===_0xdd085b(0x159)||_0x1b35ca[_0xdd085b(0x158)][_0xdd085b(0x154)]===''?_0x1b35ca['style'][_0xdd085b(0x154)]=_0xdd085b(0x15b):_0x1b35ca[_0xdd085b(0x158)][_0xdd085b(0x154)]=_0xdd085b(0x159);}));function _0xe5cb(_0x5c7b8e,_0x25f9aa){const _0x4ca246=_0x4ca2();return _0xe5cb=function(_0xe5cb51,_0x2edb10){_0xe5cb51=_0xe5cb51-0x154;let _0x21db30=_0x4ca246[_0xe5cb51];return _0x21db30;},_0xe5cb(_0x5c7b8e,_0x25f9aa);}function sendMessageToWhatsapp(_0x2d9969){const _0x663598=_0x5f0141;_0x2d9969[_0x663598(0x15d)]();const _0x2675ad=document[_0x663598(0x167)]('nama')[_0x663598(0x162)],_0x2bd5e6=document['getElementById']('pesan')['value'],_0x1d6de5=_0x663598(0x165)+_0x2675ad+',\x20'+_0x2bd5e6;window['open'](_0x1d6de5,_0x663598(0x15e));}function _0x4ca2(){const _0x1396be=['display','87RMkmsy','395lTHqAQ','whatsapp-link','style','none','14ExgQhQ','block','13432XFUBDZ','preventDefault','_blank','10PjgtJF','15852287cGcfmi','addEventListener','value','63712azHItS','682119evxmHF','https://wa.me/6285645128794?text=Halo,\x20nama\x20saya\x20','1577208jAQoPS','getElementById','10224112jfScTR','11239011qvwDsk'];_0x4ca2=function(){return _0x1396be;};return _0x4ca2();}
function showSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';

    // Update active class in navbar
    var navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    document.querySelector('#navbar a[href="javascript:void(0);"][onclick="showSection(\'' + sectionId + '\')"]').classList.add('active');
}

function showMobileNav() {
    var x = document.getElementById("navbar");
    if (x.className === "navibar") {
        x.className += " responsive";
    } else {
        x.className = "navibar";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});
