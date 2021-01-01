import { strings } from '@angular-devkit/core';
import { apply, mergeWith,  move,  Rule, SchematicContext, SchematicsException, template, Tree, url } from '@angular-devkit/schematics';
import { parseName } from "@schematics/angular/utility/parse-name";

export function zcn(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {


    
    const workSpaceasBuffer = tree.read('angular.json');
   
    if(!workSpaceasBuffer){
      throw new SchematicsException("Not and Angular CLI workspace")
    }
    const workspace = JSON.parse(workSpaceasBuffer.toString());
    const projectName = workspace.defaultProject;
    const project = workspace.projects[projectName];
    const path = project.sourceRoot+'/app/modules'
     
    console.log(path);
    const parsed = parseName(path,_options.name);


    const sourceTemplate = url('./files');
    const sourceParameter = apply(sourceTemplate,[
      template({
        ..._options,
        ... strings
      }),
      move(parsed.path)
    ])
    return mergeWith(sourceParameter)(tree,_context); 
  };



}

 