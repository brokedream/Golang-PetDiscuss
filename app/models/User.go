package models

// . "github.com/goblog/app/models/user"
// import (
// 	"github.com/goblog/app/ViewModel"
// )

type User struct {
	BaseModel
	Name     string    `json:"name" binding:"required" gorm:"not null"`
	Account  string    `json:"account" binding:"required" gorm:"not null;unique"`
	Password string    `json:"password" binding:"required" gorm:"not null"`
	Age      int       `json:"age"`
	Articles []Article `json:"articles" `
	Approve  bool      `json:"approve" sql:"DEFAULT:0"`
	Phone    string    `json:"phone"`
	Line     string    `json:"line"`
	Address  string    `json:"address"`
	City     string    `json:"city"`
}
