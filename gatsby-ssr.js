exports.onRenderBody = function({setPostBodyComponents}, pluginOptions) {
  return setPostBodyComponents([
    <script
    key='body1'
    dangerouslySetInnerHTML={{
      __html:
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?3cea55d238f97fec27bb5b4eb0ff0bbb";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    }}>
    </script>
  ])
}