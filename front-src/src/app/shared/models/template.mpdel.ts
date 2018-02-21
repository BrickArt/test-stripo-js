export class APPTemplate {
  constructor(
    public name: string,
    public modified: number,
    public template: any,
    public id?: number
  ) {}
}

// {
//         "id": 3,
//         "name": "Three",
//         "template": "<div class='template'><div class='editable'>one</div><div class='editable'>two</div><div class='editable'>three</div></div>",
//         "modified": 1516008564742
//       }
