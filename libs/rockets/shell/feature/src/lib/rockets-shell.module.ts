import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RocketsShellRoutingModule } from './rockets-shell-routing.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RocketsShellRoutingModule,
    GraphQLModule,
    HttpClientModule],

})
export class RocketsShellModule {}


