import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import PersonComponent from "./person.component";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent, PersonComponent],
    imports: [BrowserModule, CommonModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
