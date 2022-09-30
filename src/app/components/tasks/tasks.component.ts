import { Component, OnInit } from '@angular/core'
import { Task } from '../../mock-tasks'
import { TaskService } from '../../services/task.service'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((task) => (this.tasks = task));
  }
}
