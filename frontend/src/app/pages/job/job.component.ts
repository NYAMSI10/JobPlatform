import {Component, OnInit} from '@angular/core';
import {Contrat} from "../../interface/contrat";
import {ContratService} from "../contrat/contrat.service";
import {HttpClientModule} from "@angular/common/http";
import {NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {GridComponent} from "../grid/grid.component";
import {JobService} from "../../service/job.service";
import {Job} from "../../interface/job";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [HttpClientModule, NgIf, RouterLink, RouterLinkActive, GridComponent, FormsModule],
  providers: [ContratService, JobService],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent implements OnInit{

   contrats: Contrat[] = []
   jobs : Job[]= []
  public  filteredJobs: Job[]=[];
  public  errMsg : string | undefined;
  private _jobFilter = 'mot';

  constructor(private contratService : ContratService, private jobService: JobService) {
  }

  ngOnInit() {
    this.jobService.getJob().subscribe({
      next: jobs=>{
        this.jobs = jobs;
        this.filteredJobs = this.jobs;
      },
      error: err => this.errMsg = err

    });

    this.jobFilter = ''

     this.contratService.getContrat().subscribe({
       next: contrats=>{
         this.contrats = contrats;
       },
       error: err => this.errMsg = err

     })
  }
  public get  jobFilter(): string{
    return this._jobFilter;
  }

  public set jobFilter(filter:string){
    this._jobFilter = filter;

    this.filteredJobs = this.jobFilter ? this.filterJobs(this.jobFilter) : this.jobs;

  }

  private filterJobs(criteria:string){
    criteria = criteria.toLocaleLowerCase();

    const res = this.jobs.filter(
      (job : Job) =>Object.values(job).some(value =>
        value != null && value.toString().toLocaleLowerCase().includes(criteria)
      )

    );
    return res;
  }

}
