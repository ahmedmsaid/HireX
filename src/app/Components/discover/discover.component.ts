import { Component, OnInit } from '@angular/core';
import { IJob } from 'src/app/Models/IJob';
import { JobsService} from 'src/app/Services/Jobs.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  jobs!: IJob[];
  filteredJobs!: IJob[];
  filterBy!: string;
  fade: boolean = false
  constructor(private jobService: JobsService) { 

  }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(){
    this.jobService.getAllJobs().subscribe((jobs: IJob[]) => {
      this.jobs = jobs;
      this.filteredJobs = jobs;
    });
  }

  filtering(value: string){
    if (value === 'all') {
      this.filteredJobs = this.jobs;
    } else {
      this.filteredJobs = this.jobs.filter( (job: IJob) => job.category === value);
      this.fade = true;
    }
  }
}
