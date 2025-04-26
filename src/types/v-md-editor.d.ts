declare module '@kangc/v-md-editor' {
    import { App, Plugin } from 'vue';
    
    interface VMdEditor extends Plugin {
      use: (plugin: Plugin) => void;
    }
  
    const VMdEditor: VMdEditor;
    export default VMdEditor;
  }
  
  declare module '@kangc/v-md-editor/lib/theme/vuepress' {
    import { Plugin } from 'vue';
    const vuepressTheme: Plugin;
    export default vuepressTheme;
  }