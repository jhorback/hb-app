{
    // set the rootPath differently if we are in the "components" directory
    const {href, origin} = window.location;
    const componentsPath = "/components/hb-app";
    const indexOfComponents = href.indexOf(componentsPath);
    const rootPath = indexOfComponents > -1 ?
        href.substring(0, indexOfComponents + componentsPath.length) :
        origin;
    window.Polymer = { rootPath };
}