import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RocketsShellRoutingModule } from './rockets-shell-routing.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RocketsShellRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
exports: [RocketsShellRoutingModule],
})
export class RocketsShellModule {}


