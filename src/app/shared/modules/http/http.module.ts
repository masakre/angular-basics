import { NgModule } from '@angular/core';
import { FakeHttpService } from './services/fake-http.service';

@NgModule({
  providers: [FakeHttpService],
  exports: [FakeHttpService],
})
export class HttpModule {}
