let chatClient;

function startChat() {
    if (!chatClient) {
        chatClient = new CozeWebSDK.WebChatClient({
            config: {
                bot_id: '7486049271679500306',
            },
            componentProps: {
                title: 'CyHome',
            },
            auth: {
                type: 'token',
                token: 'pat_1aDSZAtbbzGKSGKlxJrWlTiSK3eHhOtkVyY9ikGtDoL3clJUor2ZAxDzQPZFSvEn',
                onRefreshToken: function () {
                    return 'pat_1aDSZAtbbzGKSGKlxJrWlTiSK3eHhOtkVyY9ikGtDoL3clJUor2ZAxDzQPZFSvEn'
                }
            },
            userInfo: { 
                id: 'user', 
                url: 'https://cdn-icons-png.flaticon.com/512/7891/7891470.png', 
                nickname: 'Khách hàng', 
              }, 
            ui: { 
                base: { 
                  icon: 'https://pms.cyhome.vn/assets/images/cyhome/logo.png', 
                  lang: 'vi',
                },
                chatBot: {
                  title: 'CyHome',
                  uploadable: false,
                }, 
                /**
                * Controls whether to display the floating ball at the bottom right corner of the page.
                */
                asstBtn: { 
                  isNeed: true, 
                }, 
                footer: {
                    isShow: false,
                    
                }
            },
        });
    }
}

// Khởi động chat bot ngay khi trang được tải
window.onload = startChat; 