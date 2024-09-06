function copyInfo() {
    document.body.oncopy = function () {
        if (window.getSelection().toString().length < 100) {
            return;
        }
        Swal.fire({
            allowOutsideClick: false,
            type: 'success',
            title: '复制成功,如转载请注明出处！',
            showConfirmButton: false,
            timer: 2000
        });
    };
}

function colorfulTag() {
    let tags = Array.from(document.querySelectorAll("#tag_cloud-2 a")).filter(tag => !tag.closest("#header_right"));
    let infos = Array.from(document.querySelectorAll(".badge")).filter(info => !info.closest("#header_right"));
    let colorArr = ["#428BCA", "#AEDCAE", "#ECA9A7", "#DA99FF", "#FFB380", "#D9B999"];
    
    tags.forEach(tag => {
        let tagsColor = colorArr[Math.floor(Math.random() * colorArr.length)];
        tag.style.backgroundColor = tagsColor;
    });
    
    infos.forEach(info => {
        let infosColor = colorArr[Math.floor(Math.random() * colorArr.length)];
        info.style.backgroundColor = infosColor;
    });
}

function topScroll() {
    if (!document.getElementById('progress-bar')) {
        var progressBar = document.createElement('div');
        progressBar.id = 'progress-bar';
        document.body.prepend(progressBar);
    }

    document.addEventListener('scroll', function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        var clientHeight = document.documentElement.clientHeight || window.innerHeight;
        var scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        document.getElementById('progress-bar').style.width = scrollPercentage + '%';
    });
}

function init() {
    copyInfo();
    colorfulTag();
    topScroll();
}

$(document).ready(function() {
    init();
  });

$(document).on('contentLoaded pjax:end', function () {
    // 解绑之前绑定的事件，防止多次绑定
    document.body.oncopy = null;
    init();
});
