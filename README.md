# Okode NGX Palette

## Importing library

Add package dependency from GitHub:

```bash
$ npm i okode/ngx-palette --save-dev
```

Include `node_modules/@okode/ngx-palette/src/**/*.ts` as source to your `tsconfig.app.json` file:

```json
"include": [
  "src/**/*.ts",
  "node_modules/@okode/ngx-palette/src/**/*.ts"
]
```

Add `@okode/ngx-palette` path to your `tsconfig.json` file:

```json
"paths": {
  "@okode/ngx-palette": [
    "node_modules/@okode/ngx-palette/src"
  ]
}
```

Register `OkodeNgxCustomPaletteModule` and `OkodeNgxDatepickerModule` in your `app.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { OkodeNgxCustomPaletteModule, OkodeNgxDatepickerModule } from '@okode/ngx-palette';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { Device } from '@ionic-native/device/ngx';

@NgModule({
  imports: [
    IonicStorageModule.forRoot(), // Required
    HttpClientModule, // Required
    OkodeNgxCustomPaletteModule.forRoot(),
    OkodeNgxDatepickerModule.forRoot()
    ...
  ]
})
export class AppModule {}
```

## Publishing library

```
$ release.sh [CURRENT_VERSION] [NEXT_VERSION]
```
