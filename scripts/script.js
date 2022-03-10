
/* */
let screen_result = document.getElementById('result');
let operation = document.getElementById('operation');
let buttons_html = Array.from(document.getElementsByClassName('normal-button'));
let last_operations = [];

/* */
for(let i=0; i<buttons_html.length;i++)
{
    buttons_html[i].onclick = function () {
        switch (buttons_html[i].innerText) {
            case 'C':
                screen_result.innerText = '';
                operation.innerText = '';
                break;
            case '=':
                try
                {
                    if(screen_result.innerText.includes("'"))
                    {
                        alert("Fatal Error !")
                        operation.innerText = screen_result.innerText;
                        screen_result.innerText = 'Fatal Error';
                        return;
                    }
                    operation.innerText = screen_result.innerText;
                    last_operations.push(operation.innerText);
                    screen_result.innerText = eval(screen_result.innerText);
                }
                catch
                {
                    screen_result.innerText = 'Fatal Error';
                }
                break;

            case 'DEL':
                screen_result.innerText = screen_result.innerText.slice(0, -1);
                break;

            default:
                screen_result.innerText += buttons_html[i].innerText;
        }
    }
}