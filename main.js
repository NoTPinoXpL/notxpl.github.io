(function(decodeArray, targetValue) {
    const decode = decodeOffset;
    const values = decodeArray();
    while (true) {
        try {
            const result = 
                -parseInt(decode(0x155)) / 1 * (-parseInt(decode(0x15c)) / 2) +
                -parseInt(decode(0x164)) / 3 +
                parseInt(decode(0x163)) / 4 * (parseInt(decode(0x156)) / 5) +
                parseInt(decode(0x166)) / 6 * (parseInt(decode(0x15a)) / 7) +
                parseInt(decode(0x168)) / 8 +
                -parseInt(decode(0x169)) / 9 +
                -parseInt(decode(0x15f)) / 10 * (parseInt(decode(0x160)) / 11);
            if (result === targetValue) break;
            else values.push(values.shift());
        } catch (error) {
            values.push(values.shift());
        }
    }
}(
    function() {
        const values = [
            'display', '87RMkmsy', '395lTHqAQ', 'whatsapp-link', 'style', 
            'none', '14ExgQhQ', 'block', '13432XFUBDZ', 'preventDefault', 
            '_blank', '10PjgtJF', '15852287cGcfmi', 'addEventListener', 'value', 
            '63712azHItS', '682119evxmHF', 'https://wa.me/6285645128794?text=Halo,%20nama%20saya%20', 
            '1577208jAQoPS', 'getElementById', '10224112jfScTR', '11239011qvwDsk'
        ];
        return values;
    }, 0xb1ffd
), 
    document.getElementById('whatsapp-link').addEventListener('click', function(event) {
        event.preventDefault();
        showAlert();
        const form = document.getElementById('whatsapp-form');
        form.style.display === 'none' || form.style.display === '' 
            ? form.style.display = 'block' 
            : form.style.display = 'none';
}));
let formOpen = false;
function showAlert() {
    const form = document.getElementById('whatsapp-form');

    if (formOpen) {
        form.style.display = 'block'; // Tampilkan form
        formOpen = false; // Set status form menjadi terbuka
        alert('Mohon Maaf apabila sedikit kurang nyaman ​🙏​😁​');
    } else {
        form.style.display = 'none'; // Sembunyikan form
        formOpen = true; // Set status form menjadi tertutup
        alert('Jika Form tidak muncul, scroll kebawah sedikit 😉​');
    }
}
function decodeOffset(index, offset) {
    const values = [
        'display', '87RMkmsy', '395lTHqAQ', 'whatsapp-link', 'style', 
        'none', '14ExgQhQ', 'block', '13432XFUBDZ', 'preventDefault', 
        '_blank', '10PjgtJF', '15852287cGcfmi', 'addEventListener', 'value', 
        '63712azHItS', '682119evxmHF', 'https://wa.me/6285645128794?text=Halo,%20nama%20saya%20', 
        '1577208jAQoPS', 'getElementById', '10224112jfScTR', '11239011qvwDsk'
    ];
    return values[index - 0x154];
}

function sendMessageToWhatsapp(event) {
    event.preventDefault();
    const name = document.getElementById('nama').value;
    const message = document.getElementById('pesan').value;
    const whatsappLink = 'https://wa.me/6285645128794?text=Halo, nama saya ' + name + ', ' + message;
    window.open(whatsappLink, '_blank');
}
function showSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    var sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
    sectionToShow.scrollIntoView({behavior: 'smooth'});

    // Update active class in navbar
    var navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    var activeLink = document.querySelector('#navbar a[href="javascript:void(0);"][onclick="showSection(\'' + sectionId + '\')"]');
    if (activeLink) {
        activeLink.classList.add('active');
    }
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
