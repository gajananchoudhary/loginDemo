import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

import { Ingredient } from '@app/models/index';
import { UsersService } from '@app/core/services/users.service';

@Component({
    selector: 'app-complete-table',
    templateUrl: './complete-table.component.html',
    styleUrls: ['./complete-table.component.scss']
})
export class CompleteTableComponent implements OnInit {
    public displayedColumns: string[];
    dataSource: any;

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private http: HttpClient, private userService: UsersService) {
        this.displayedColumns = ['sno', 'id', 'name', 'email'];
    }

    ngOnInit() {

        this.getAll();
    }

    public applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    getAll() {
        this.userService
            .getAllUsers()
            .subscribe(
                res => this.getAllSuccess(res),
                error => {
                    console.log("Error In Data Fetching")
                }
            );
    }

    getAllSuccess(res) {

        if (res && res.data && res.data.length) {
            this.dataSource = [];
            let userInfo = res.data;
            userInfo.forEach(item => {
                this.dataSource.push(item);
                this.dataSource = new MatTableDataSource(userInfo);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            });
            console.log(this.dataSource,'dataSource')
        } else {
            this.dataSource = [];
        }

    }

}

