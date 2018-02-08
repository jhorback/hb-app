{
    const href = window.location.href;
    const indexOfComponents = href.indexOf("/components/hb-app");
    const rootPath = indexOfComponents > -1 ?
        href.substring(indexOfComponents, href.lastIndexOf("/")) :
        window.location.origin;
    window.Polymer = { rootPath};
}