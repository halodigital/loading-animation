import { Component, ElementRef, OnInit } from '@angular/core';


@Component({
    selector: 'halo-loading-animation',
    templateUrl: './loading-animation.component.html',
    styleUrls: ['./loading-animation.component.scss']
})

export class HaloLoadingComponent implements OnInit {

    constructor(private host: ElementRef) {}

    ngOnInit(): void {

        let size: number;
        const minimumSize = 30;
        const width = this.host.nativeElement.clientWidth - 40;
        const height = this.host.nativeElement.clientHeight - 10;
        const elements = this.host.nativeElement.getElementsByTagName('div');

        if (width < minimumSize && height < minimumSize) {

            size = minimumSize;

        } else if (width < minimumSize) {

            size = height;

        } else if (height < minimumSize) {

            size = width;

        } else {

            size = width < height ? width : height;

        }

        for (let i = 0; i < elements.length; i++) {

            elements[i].style.width = (size / 4) + 'px';
            elements[i].style.height = (size / 4) + 'px';

        }

    }

}
