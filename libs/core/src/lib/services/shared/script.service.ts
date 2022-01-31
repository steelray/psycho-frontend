import { Injectable } from '@angular/core';

export interface IScripts {
  name: string;
  src: string;
}

const ScriptStore: IScripts[] = [
  {
    name: 'zoom1',
    src: 'https://source.zoom.us/1.9.9/lib/vendor/react.min.js'
  },
  {
    name: 'zoom2',
    src: 'https://source.zoom.us/1.9.9/lib/vendor/react-dom.min.js'
  },
  {
    name: 'zoom3',
    src: 'https://source.zoom.us/1.9.9/lib/vendor/redux.min.js'
  },
  {
    name: 'zoom4',
    src: 'https://source.zoom.us/1.9.9/lib/vendor/redux-thunk.min.js'
  },
  {
    name: 'zoom5',
    src: 'https://source.zoom.us/1.9.9/lib/vendor/lodash.min.js'
  },
  {
    name: 'zoom6',
    src: 'https://source.zoom.us/zoom-meeting-1.9.9.min.js'
  },
];

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    var promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      //resolve if already loaded
      if (this.scripts[name].loaded) {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
      else {
        //load script
        let script: any = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  //IE
          script.onreadystatechange = () => {
            if (script.readyState === "loaded" || script.readyState === "complete") {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({ script: name, loaded: true, status: 'Loaded' });
            }
          };
        } else {  //Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({ script: name, loaded: true, status: 'Loaded' });
          };
        }
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }

}