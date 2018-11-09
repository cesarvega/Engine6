import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { navigation } from 'app/navigation/navigation';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit, OnDestroy {
    horizontalNavbar: boolean;
    rightNavbar: boolean;
    hiddenNavbar: boolean;
    languages: any;
    navigation: any;
    selectedLanguage: any;
    userStatusOptions: any[];
    username = '';
    avatar = '';
    title = '';
    vip = false;
    toolbarLogo = '';
    // tslint:disable-next-line:max-line-length
    // avatars = ['assets/images/avatars/bi/Dentist.jpg', 'assets/images/avatars/bi/DrOfMedicine.jpg', 'assets/images/avatars/bi/GeneralRespondent.jpg', 'assets/images/avatars/bi/HealthcareProf.jpg', 'assets/images/avatars/bi/Nurse.jpg', 'assets/images/avatars/bi/Optometrist.jpg', 'assets/images/avatars/bi/Pharmacist Technician.jpg', 'assets/images/avatars/bi/Pharmacist.jpg', 'assets/images/avatars/bi/PhysicianAss.jpg', 'assets/images/avatars/bi/Vet.jpg'];

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {TranslateService} _translateService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseSidebarService: FuseSidebarService,
        private _translateService: TranslateService
    ) {
        // Set the defaults
        this.userStatusOptions = [
            {
                'title': 'Online',
                'icon': 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon': 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon': 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];

        this.languages = [
            {
                id: 'en',
                title: 'English',
                flag: 'us'
            },
            {
                id: 'tr',
                title: 'Turkish',
                flag: 'tr'
            }
        ];

        this.navigation = navigation;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to the config changes
        this.username = localStorage.getItem('userName') ? localStorage.getItem('userName') : 'NO Username';
        this.title = localStorage.getItem('profession') ? localStorage.getItem('profession') : 'NO title';
        switch (this.title) {
            case 'Not related to Health Care':
                this.avatar = 'assets/images/avatars/bi/GeneralRespondent.jpg';
                break;
            case 'Dentist':
                this.avatar = 'assets/images/avatars/bi/Dentist.jpg';
                break;
            case 'Optometrist':
                this.avatar = 'assets/images/avatars/bi/Optometrist.jpg';
                break;
            case 'Veterinarian':
                this.avatar = 'assets/images/avatars/bi/Vet.jpg';
                break;
            case 'Allied Health Care Profession or Occupation':
                this.avatar = 'assets/images/avatars/bi/HealthcareProf.jpg';
                break;
            case 'Physician/Doctor of Medicine (MD, DO)':
                this.avatar = 'assets/images/avatars/bi/DrOfMedicine.jpg';
                break;
            case 'Physician Assistant (PA)':
                this.avatar = 'assets/images/avatars/bi/PhysicianAss.jpg';
                break;
            case 'Pharmacist Technician':
                this.avatar = 'assets/images/avatars/bi/PharmacistTechnician.jpg';
                break;
            case 'Pharmacist':
                this.avatar = 'assets/images/avatars/bi/Pharmacist.jpg';
                break;
            case 'Nurse':
                this.avatar = 'assets/images/avatars/bi/Nurse.jpg';
                break;
            case 'Vip':
                this.avatar = 'assets/images/avatars/VIP.jpg';
                break;
        }

        this.toolbarLogo = 'assets/images/avatars/VIP.jpg';
        // this.toolbarLogo = this.avatar;

        


        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {
                this.horizontalNavbar = settings.layout.navbar.position === 'top';
                this.rightNavbar = settings.layout.navbar.position === 'right';
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
            });

        // Set the selected language from default languages
        this.selectedLanguage = _.find(this.languages, { 'id': this._translateService.currentLang });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }

    /**
     * Search
     *
     * @param value
     */
    search(value): void {
        // Do your search here...
        console.log(value);
    }

    /**
     * Set the language
     *
     * @param lang
     */
    setLanguage(lang): void {
        // Set the selected language for the toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this._translateService.use(lang.id);
    }
}
