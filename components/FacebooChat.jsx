import Script from 'next/script';

function FBChat () {
return (
   <> <div id="fb-root"></div>

    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <Script strategy="lazyOnload">
    {`
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "100408728787421");
      chatbox.setAttribute("attribution", "biz_inbox");
    
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v19.0'
        });
      };

      (function(d, s, id) {
        let js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      `}
    </Script>
    </>
)
}

export default FBChat;
  