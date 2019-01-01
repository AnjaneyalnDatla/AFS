import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(files: FileList, transactionNumber: String): Observable<HttpEvent<{}>> {


    const formdata: FormData = new FormData();
    Array.from(files).forEach(sf => {
      formdata.append('file', sf);
    });

    const req = new HttpRequest('POST', 'http://localhost:8088/fileuploader/'+ transactionNumber, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  pushFileToContactStorage(files: FileList, contactId: String): Observable<HttpEvent<{}>> {


    const formdata: FormData = new FormData();
    Array.from(files).forEach(sf => {
      formdata.append('file', sf);
    });

    const req = new HttpRequest('POST', 'http://localhost:8088/fileuploader/contact/'+ contactId, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('/getallfiles');
  }
}
