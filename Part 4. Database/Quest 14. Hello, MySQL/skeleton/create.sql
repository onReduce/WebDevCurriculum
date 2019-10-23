CREATE TABLE users (
  id         int          NOT NULL AUTO_INCREMENT,
  account    varchar(128) NOT NULL,
  password   varchar(128) NOT NULL,
  nickname   varchar(20)  NOT NULL,
  created_at datetime     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY accounte_UNIQUE (account),
  UNIQUE KEY nickname_UNIQUE (nickname)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COMMENT='사용자';

CREATE TABLE memos (
  id         int          NOT NULL AUTO_INCREMENT,
  userid     int          NOT NULL,
  memo       text         NOT NULL,
  created_at datetime     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX userid_idx (userid ASC),
  CONSTRAINT userid FOREIGN KEY (userid) REFERENCES users (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COMMENT='메모';