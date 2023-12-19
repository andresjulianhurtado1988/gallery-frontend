import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { sideNavData } from 'src/app/global/tree-data';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  public imgAuthors: string = 'assets/img/fantasy_author.jpg';

  treeControl = new NestedTreeControl<any>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<any>();

  public sideNavData: any[] = [];

  constructor() {
    this.dataSource.data = sideNavData.tree_data;
  }

  hasChild = (_: number, node: any) =>
    !!node.children && node.children.length > 0;
}
