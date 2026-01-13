import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TabInfo {
  name: string;
  role: string;
  description: string;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  adminExpanded = false;
  activeTooltip: string | null = null;

  tabInfoMap: { [key: string]: TabInfo } = {
    'request-assessment': {
      name: 'Request Assessment',
      role: 'Trainees / Operators',
      description: 'Submit requests for skill assessments. Complete all mandatory fields including your details, the assessment type, and preferred schedule. Track your assessment status through the portal.'
    },
    'ssi': {
      name: 'SSI (Skill-Specific Instructor)',
      role: 'SSI Evaluators',
      description: 'Review incoming assessment requests from operators. Schedule assessment sessions, coordinate with assessors, and record session details before passing to the Assessor for evaluation.'
    },
    'assessor': {
      name: 'Assessor',
      role: 'Assessors',
      description: 'Conduct physical/practical assessments. Confirm manning page, click "Assess", upload required documents, and select competency outcome (Competent, Not Competent, or Needs Improvement). Documents must be uploaded before submission.'
    },
    'head-of-shift': {
      name: 'Head of Shift',
      role: 'Shift Supervisors',
      description: 'Review assessments marked as "Competent" by Assessors. Verify all documentation is complete and accurate. Approve assessments to forward to HRL4, or return for corrections.'
    },
    'hrl4': {
      name: 'HRL4 Assessment',
      role: 'HR Personnel (Level 4)',
      description: 'Confirm completion of assessment documentation. Verify that HR records are properly updated and process assessments for final verification by the Verifier.'
    },
    'verifier': {
      name: 'Verifier',
      role: 'Verifiers',
      description: 'Conduct final quality check of all assessment records. Verify completeness and accuracy of documentation. Confirm assessments for batch processing and POM review.'
    },
    'batch-management': {
      name: 'Batch Management',
      role: 'Assessors / Administrators',
      description: 'Group completed and verified assessments into batches. Send batches to Plant Operations Management (POM) for final review and approval.'
    },
    'view-operators': {
      name: 'View Operators/Technicians',
      role: 'All Roles',
      description: 'Search and view operators or technicians in the system. Check their current assessment status, qualification levels, and progression history.'
    },
    'assessment-matrix': {
      name: 'Assessment Matrix',
      role: 'Supervisors / Administrators',
      description: 'View a comprehensive matrix showing operators versus their assessment modules. Track qualification levels and identify gaps in competencies across the team.'
    },
    'progression-letters': {
      name: 'Progression Letters',
      role: 'HR / Administrators',
      description: 'Generate official progression letters for operators who have successfully completed assessments and are advancing to higher competency levels.'
    },
    'admin-areas': {
      name: 'Manage Plant Areas',
      role: 'Administrators',
      description: 'Define and manage plant areas such as Gas Production, Utilities, etc. These areas are used to categorize assessments and organize the plant structure.'
    },
    'admin-blocks': {
      name: 'Manage Blocks',
      role: 'Administrators',
      description: 'Define and manage blocks within each plant area. Blocks help organize units and provide a hierarchical structure for the plant.'
    },
    'admin-units': {
      name: 'Manage Units',
      role: 'Administrators',
      description: 'Manage units within each block. Units are the specific operational areas where assessments are conducted.'
    },
    'admin-shifts': {
      name: 'Manage Shifts',
      role: 'Administrators',
      description: 'Configure shift patterns and assign shift IDs. This helps organize operators and assessors by their working schedules.'
    },
    'admin-assessments': {
      name: 'Assessments',
      role: 'Administrators',
      description: 'Create, edit, or delete assessment templates. Define the criteria, requirements, and documentation needed for each type of assessment.'
    },
    'admin-users': {
      name: 'Manage Users',
      role: 'Administrators',
      description: 'Add or update user accounts in the system. Assign roles (Operator, SSI, Assessor, Head of Shift, HRL4, Verifier, Admin) to control access levels.'
    },
    'admin-progression': {
      name: 'Manage Progression Level',
      role: 'Administrators',
      description: 'Define competency levels and their associated requirements. Set up the progression pathway for operators to advance through different qualification levels.'
    },
    'user-feedback': {
      name: 'User Feedback',
      role: 'All Users',
      description: 'Provide feedback about the portal or report issues. Your feedback helps improve the system and resolve any problems you encounter.'
    },
    'help': {
      name: 'Help',
      role: 'All Users',
      description: 'Access the help guide and workflow documentation. Find detailed explanations of each role, the assessment process, and how to use the portal effectively.'
    }
  };

  toggleAdmin() {
    this.adminExpanded = !this.adminExpanded;
  }

  showTooltip(tabKey: string, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.activeTooltip = this.activeTooltip === tabKey ? null : tabKey;
  }

  hideTooltip() {
    this.activeTooltip = null;
  }

  getTabInfo(tabKey: string): TabInfo | null {
    return this.tabInfoMap[tabKey] || null;
  }
}
