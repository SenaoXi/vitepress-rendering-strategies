(async function() {
  const pageId = (
    function getCleanPathname() {
  const siteData = typeof window !== "undefined" ? window.__VP_SITE_DATA__ : void 0;
  let rawBase = "/";
  if (siteData?.base) {
    rawBase = siteData.base;
  } else if ("__BASE__" in globalThis && typeof __BASE__ === "string") {
    rawBase = __BASE__;
  }
  const base2 = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
  let pathname = decodeURI(location.pathname);
  if (pathname.startsWith(base2)) pathname = pathname.slice(base2.length - 1);
  if (!pathname.startsWith("/")) pathname = `/${pathname}`;
  pathname = pathname.replaceAll(/\/{2,}/g, "/");
  return pathname;
}
  )();

  if (!window["__INJECT_COMPONENT__"][pageId]) { 
    window["__INJECT_COMPONENT__"][pageId] = {}; 
  }

  /**
   * Before dynamically importing React components, 
   * you must inject the React runtime globally, otherwise component parsing will fail.
   */
  if (window["__COMPONENT_MANAGER__"]) {
    await window["__COMPONENT_MANAGER__"].loadReact();
  } else {
    throw new Error('ReactComponentManager is not initialized');
  }
  
  const componentLoaders = [
    
    {
      name: 'Landing',
      loader: async () => {
        try {
          const module = await import('/vitepress-rendering-strategies/assets/Landing.u3EKThfk.js');
          return module['Landing'];
        } catch (error) {
          
    console.log(
      `%cvitepress-rendering-strategies%c[react-client-render]%c: » %c✗%c Failed to load component Landing: error.message`,
      'color: #2579d9; font-weight: bold;',
      'color: #e28a00; font-weight: bold;', 
      'color: gray;',                      
      'color:rgb(233, 63, 80);',
      'color: #dc3545;'
    );
  
          return null;
        }
      }
    },
    {
      name: 'ReactComp1',
      loader: async () => {
        try {
          const module = await import('/vitepress-rendering-strategies/assets/ReactComp1.BMxtl_QH.js');
          return module.default;
        } catch (error) {
          
    console.log(
      `%cvitepress-rendering-strategies%c[react-client-render]%c: » %c✗%c Failed to load component ReactComp1: error.message`,
      'color: #2579d9; font-weight: bold;',
      'color: #e28a00; font-weight: bold;', 
      'color: gray;',                      
      'color:rgb(233, 63, 80);',
      'color: #dc3545;'
    );
  
          return null;
        }
      }
    },
    {
      name: 'ReactComp3',
      loader: async () => {
        try {
          const module = await import('/vitepress-rendering-strategies/assets/ReactComp3.bzk1Ohq6.js');
          return module.default;
        } catch (error) {
          
    console.log(
      `%cvitepress-rendering-strategies%c[react-client-render]%c: » %c✗%c Failed to load component ReactComp3: error.message`,
      'color: #2579d9; font-weight: bold;',
      'color: #e28a00; font-weight: bold;', 
      'color: gray;',                      
      'color:rgb(233, 63, 80);',
      'color: #dc3545;'
    );
  
          return null;
        }
      }
    },
    {
      name: 'ReactComp4',
      loader: async () => {
        try {
          const module = await import('/vitepress-rendering-strategies/assets/ReactComp4.CoMpYBxI.js');
          return module['ReactComp4'];
        } catch (error) {
          
    console.log(
      `%cvitepress-rendering-strategies%c[react-client-render]%c: » %c✗%c Failed to load component ReactComp4: error.message`,
      'color: #2579d9; font-weight: bold;',
      'color: #e28a00; font-weight: bold;', 
      'color: gray;',                      
      'color:rgb(233, 63, 80);',
      'color: #dc3545;'
    );
  
          return null;
        }
      }
    },
    {
      name: 'ReactVueSharedComp',
      loader: async () => {
        try {
          const module = await import('/vitepress-rendering-strategies/assets/ReactVueSharedComp.DnenCgn1.js');
          return module.default;
        } catch (error) {
          
    console.log(
      `%cvitepress-rendering-strategies%c[react-client-render]%c: » %c✗%c Failed to load component ReactVueSharedComp: error.message`,
      'color: #2579d9; font-weight: bold;',
      'color: #e28a00; font-weight: bold;', 
      'color: gray;',                      
      'color:rgb(233, 63, 80);',
      'color: #dc3545;'
    );
  
          return null;
        }
      }
    }
  ];
  
  const loadResults = await Promise.allSettled(
    componentLoaders.map(async ({ name, loader }) => {
      const Component = await loader();
      if (Component) {
        if (!window["__INJECT_COMPONENT__"][pageId][name]) {
          window["__INJECT_COMPONENT__"][pageId][name] = {};
        }
        /**
         * In production environment, unlike development, 
         * we don't need to inject path and importedName fields for HMR.
         */
        window["__INJECT_COMPONENT__"][pageId][name].component = Component;
        window["__COMPONENT_MANAGER__"].notifyComponentLoaded(pageId, name);
        return { name, success: true };
      }
      return { name, success: false };
    })
  );
  
  const successCount = loadResults.filter(result => 
    result.status === 'fulfilled' && result.value.success
  ).length;
  
      
    console.log(
      `%cvitepress-rendering-strategies%c[react-client-render]%c: » %c✓%c Loaded ${successCount} / ${componentLoaders.length} React components for page: ${pageId}`,
      'color: #2579d9; font-weight: bold;',
      'color: #e28a00; font-weight: bold;', 
      'color: gray;',                      
      'color: #13ef3e;',
      'color: #2ba245;'
    );
  
})();