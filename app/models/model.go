package models

import (
	"time"
)

type BaseModel struct {
	ID        uint       `gorm:"primary_key" json:"id"`
	CreatedAt time.Time  ` json:"created_at" gorm:"index:idx_created_at"`
	UpdatedAt time.Time  ` json:"updated_at" `
	DeletedAt *time.Time `sql:"index" json:"delete_at"`
}