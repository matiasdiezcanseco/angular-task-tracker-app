import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Task } from '../../mock-tasks'
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | null = null;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task | null) {
    if (task) this.onDeleteTask.emit(task);
  }

  onToggle(task: Task | null) {
    if (task) this.onToggleReminder.emit(task);
  }
}
