import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Subscription } from 'rxjs'
import { Task } from '../../mock-tasks'
import { UiService } from '../../services/ui.service'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask = new EventEmitter<Task>();

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = true;
  subscription: Subscription = undefined!;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((tg) => (this.showAddTask = tg));
  }

  ngOnInit(): void {
    this.uiService.getToggle().subscribe((val) => (this.showAddTask = val));
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
