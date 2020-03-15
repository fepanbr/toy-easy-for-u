import { Component } from '@angular/core';
import { SpeechRecognition, SpeechRecognitionListeningOptionsAndroid } from '@ionic-native/speech-recognition/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private speechRecognition: SpeechRecognition, private platform: Platform) {
    if (this.platform.is("cordova")) {
      this.getReadySpeechRecognition();
    } else {

    }

  }

  getReadySpeechRecognition() {
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => console.log(available));
  }

  startSpeechRecognition() {
    const options: SpeechRecognitionListeningOptionsAndroid = {
      language: "ko-KR",
      prompt: "음성인식 시작",
      showPopup: true,
    }
    this.speechRecognition.startListening(options)
      .subscribe(
        (matches: string[]) => console.log(matches),
        (onerror) => console.log('error:', onerror)
      )
  }
}
