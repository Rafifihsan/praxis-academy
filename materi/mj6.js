function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
  }
  
  loadScript('https://filecrypt.cc/Container/6DCAA3B222.htmls', script => {
    alert(`Cool, the script ${script.src} is loaded`);
    alert( _ ); // function declared in the loaded script
  });

    